import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import MoneyIcon from "@material-ui/icons/Money";
import { ButtonGroup, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    inline: {
      display: "inline"
    }
  })
);

export default ({ items, products, updateCart }) => {
  const classes = useStyles({});
  let price = 0;
  return (
    <List className={classes.root}>
      {Object.keys(items).map((id, idx) => {
        const product = products.find(data => data.id === id);
        price = price + Number(items[id]) * Number(product.price);
        const updateCartById = updateCart(id);
        const currCount = Number(items[id]);
        return (
          <div style={{ minWidth: 300 }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={product.name} src={product.image} />
              </ListItemAvatar>
              <ListItemText
                primary={product.name}
                secondary={
                  <>
                    <p>{`Quantity Added - ${items[id]} ${product.qntType}`} </p>
                    <p>{`Price - ${product.price}/${product.qntType}`} </p>
                  </>
                }
              />
              <ButtonGroup size="small">
                <Button onClick={() => updateCartById(currCount + 1)}>+</Button>
                <Button onClick={() => updateCartById(currCount - 1)}>-</Button>
              </ButtonGroup>
            </ListItem>
            {idx !== Object.keys(items).length - 1 && (
              <Divider variant="inset" component="li" />
            )}
          </div>
        );
      })}
      <div style={{ minWidth: 300 }}>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <MoneyIcon />
          </ListItemAvatar>
          <ListItemText
            secondary="Total Cart Price"
            primary={`${price}/- In Rupee`}
          />
        </ListItem>
      </div>
    </List>
  );
};
