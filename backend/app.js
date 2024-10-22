const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error")
const helmet = require('helmet');
const path = require('path');

//import routese
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const trainingTypeRoutes = require('./routes/trainingTypeRoutes');
const trainingRoutes = require('./routes/trainingRoutes');

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// Database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => console.log("DB connected"))
.catch((err) => console.log(err));



//middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }
app.use(bodyParser.json({limit: "5mb"}));
app.use(bodyParser.urlencoded({
    limit: "5mb",
    extended: true

}));

app.use(cookieParser())
app.use(cors())

// adding security headers
app.use(
    helmet.contentSecurityPolicy({
      useDefaults: true,
      directives: {
        "script-src": ["'self'", "https://www.gstatic.com/charts/loader.js"],
        "img-src": ["'self'", "https: data:"]
      }
    })
  )

//Routesmiiddleware
//app.get('/', (req, res)=>{
  //  res.send("Hello from node.js")

//})

app.use('/api',authRoutes);
app.use('/api',userRoutes);
app.use('/api',trainingTypeRoutes);
app.use('/api',trainingRoutes);

__dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

//error middleware
app.use(errorHandler);

const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
