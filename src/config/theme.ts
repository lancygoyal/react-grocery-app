import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: { main: "#1a77d2", contrastText: "#ffffff" }, // Blue color for button
    secondary: { main: "#333333", contrastText: "#ffffff" }, // Dark grey
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    }
  }
});

export default theme;
