import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { setUser } from "../redux/user";

const styles = theme =>
  createStyles({
    main: {
      width: "auto",
      display: "block", // Fix IE 11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: "auto",
        marginRight: "auto"
      }
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
        .spacing.unit * 3}px`
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main,
      width: 144,
      height: 144
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing.unit
    },
    submit: {
      marginTop: theme.spacing.unit * 3
    }
  });

interface SignInProps extends WithStyles, StateProps, DispatchProps {
  firebase: any;
  history: any;
}

class Hello extends React.Component<SignInProps> {
  login = () => {
    this.props.firebase.auth
      .signInWithPopup(this.props.firebase.provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // let token = result.credential.accessToken;
        // The signed-in user info.
        // let user = result.user;
        this.props.setUser(result.user);
        console.log("Success");
        this.props.history.replace("/");
        // this.currentUser = user;
        // this.dp = user.photoURL;
      })
      .catch(error => {
        // Handle Errors here.
        // let errorCode = error.code;
        let errorMessage = error.message;
        // The email of the user's account used.
        // let email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        // let credential = error.credential;
        console.error(errorMessage);
        alert(errorMessage);
      });
  };

  logout = () => {
    this.props.firebase.auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("Success");
      })
      .catch(error => {
        // An error happened.
        console.error(error);
      });
  };

  render() {
    const { classes, user } = this.props;
    const userName = user.isLogin
      ? `Hello ${user.data.displayName}`
      : "Hello Guest";
    const userImage = user.isLogin
      ? user.data.photoURL
      : "https://w5insight.com/wp-content/uploads/2014/07/placeholder-user-400x400.png";
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar alt={userName} src={userImage} className={classes.avatar} />
          <Typography component="h1" variant="h5">
            {userName}
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={user.isLogin ? this.logout : this.login}
          >
            {user.isLogin ? "Logout" : "Login"}
          </Button>
        </Paper>
      </main>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = { setUser };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Hello));
