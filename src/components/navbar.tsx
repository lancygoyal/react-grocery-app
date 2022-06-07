import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { APP_NAME } from "../constants/app";
import { Avatar, Badge, Menu } from "@material-ui/core";
import Cart from "./cart";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block"
      }
    },
    avatar: {
      margin: 1,
      backgroundColor: theme.palette.secondary.main,
      width: 36,
      height: 36
    },
  })
);

export const Navbar = ({ history, user, products, cart, firebase }) => {
  const classes = useStyles({});
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const updateCart = id => count => {
    const cartRef = firebase.cartCollection.doc(user.data.uid);
    const items = { ...cart.items, [id]: count };
    if (count === 0) delete items[id];
    cartRef.set({
      items: { ...items }
    });
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            {APP_NAME}
          </Typography>
          {user.isLogin && (
            <>
              {cart.items && Object.keys(cart.items).length > 0 && (
                <>
                  <IconButton
                    aria-label="items in cart"
                    color="inherit"
                    onClick={event => setAnchorEl(event.currentTarget)}
                  >
                    <Badge
                      badgeContent={Object.keys(cart.items).length}
                      color="secondary"
                    >
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                  <Menu
                    id="cart"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    PaperProps={{
                      style: {
                        maxHeight: 500
                      }
                    }}
                  >
                    <Cart
                      products={products}
                      items={cart.items}
                      updateCart={updateCart}
                    />
                  </Menu>
                </>
              )}
              <IconButton
                edge="end"
                color="inherit"
                aria-label={user.data.displayName}
                onClick={() => history.push("/hello")}
              >
                <Avatar alt={user.data.displayName} src={user.data.photoURL} className={classes.avatar} />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = ({ user, product, cart }) => ({
  user,
  products: product.data,
  cart: cart.data
});

export default connect(mapStateToProps)(Navbar);
