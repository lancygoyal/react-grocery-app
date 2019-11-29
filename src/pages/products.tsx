import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Product from "../components/product";
import { connect } from "react-redux";
import { fetchProducts } from "../redux/products";
import { fetchCart } from "../redux/cart";

interface ProductsProps extends StateProps, DispatchProps {
  firebase: any;
}

class Products extends React.Component<ProductsProps> {
  componentWillMount() {
    this.props.fetchProducts();
    this.props.fetchCart();
  }

  addToCart = id => () => {
    const { firebase, user, cart } = this.props;
    const cartRef = firebase.cartCollection.doc(user.data.uid);
    const items = cart && cart.items ? cart.items : {};
    if (items[id]) items[id] = items[id] + 1;
    else items[id] = 1;
    cartRef.set(
      {
        items
      },
      { merge: true }
    );
  };

  render() {
    const { products, cart } = this.props;
    return (
      <div>
        <Typography
          variant="h6"
          noWrap
          style={{ fontSize: "17px", marginTop: "17px", marginLeft: "21px" }}
        >
          Products - {products.length}
        </Typography>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          {products.map((data, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Product
                key={idx}
                data={data}
                cart={cart}
                onAdd={this.addToCart(data.id)}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ user, product, cart }) => ({
  user,
  products: product.data,
  cart: cart.data
});

const mapDispatchToProps = {
  fetchProducts,
  fetchCart
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Products);
