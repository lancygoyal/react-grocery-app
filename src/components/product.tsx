import React, { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CardHeader from "@material-ui/core/CardHeader";
import { CardMedia } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    margin: 20
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    display: "flex",
    alignItems: "center",
    fontSize: 16
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  pos: {
    marginBottom: 12
  },
  chip: {
    marginRight: 5
  }
});

interface ProductProps {
  data: any;
  onAdd: any;
}

const Product: FunctionComponent<ProductProps> = ({ data, onAdd }) => {
  const classes = useStyles({});
  return (
    <Card className={classes.card} color="secondary">
      <CardHeader title={data.name} />
      <CardMedia
        className={classes.media}
        image={data.image}
        title={data.name}
      />
      <CardContent style={{ padding: 9 }}>
        <Typography variant="body2" component="p" style={{ marginTop: 10 }}>
          {data.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" onClick={onAdd}>
          Add to cart
        </Button>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
