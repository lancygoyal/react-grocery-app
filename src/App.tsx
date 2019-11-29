import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import Loader from "./components/loader";
import firebase from "./config/firebase";
import Routers from "./config/routes";
import theme from "./config/theme";
import initializeStore from "./redux/store";
import { setUser } from "./redux/user";

const store = initializeStore();

class App extends React.Component {
  state = {
    isFirebaseLoaded: false
  };

  componentDidMount() {
    firebase.auth.onAuthStateChanged(() => {
      firebase.auth.currentUser
        ? store.dispatch(setUser(firebase.auth.currentUser))
        : store.dispatch({ type: "RESET" });
      this.setState({ isFirebaseLoaded: true });
    });
  }

  render() {
    const { isFirebaseLoaded } = this.state;
    if (isFirebaseLoaded) {
      return (
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Routers />
          </ThemeProvider>
        </Provider>
      );
    }
    return <Loader />;
  }
}

export default App;
