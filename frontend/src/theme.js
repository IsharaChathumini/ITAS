import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const lightBlack = '#696969'; // Custom light black (dark grey)
const darkBlack = '#000000';  // Custom dark black

export const theme = createTheme({
    palette: {
        primary: {
            main: darkBlack
        },
        secondary: {
            main: lightBlack,
            darkBlack: darkBlack
        }
    }
});





