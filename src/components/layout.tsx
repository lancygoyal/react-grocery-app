import React from "react";
import { withStyles, WithStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./navbar";
import Footer from "./footer";

const styles = theme =>
  makeStyles({
    root: {
      display: "flex",
      flexDirection: "column"
    },
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto"
    }
  });

interface LayoutProps extends WithStyles {
  history: any;
}

class Layout extends React.Component<LayoutProps> {
  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <main className={classes.content}>
          <Navbar {...this.props} />
          {children}
          <Footer />
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
