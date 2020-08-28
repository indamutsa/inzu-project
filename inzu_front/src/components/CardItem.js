import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    boxShadow: "0 0 15px #999",
    height: "450px",
    width: "350px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: "#7ed386",
  },
}));

const CardItem = (props) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <figcaption className="overlayn">
        <Link className="card__link" to={`/listings/${props.slug}`}>
          View Listing
        </Link>
      </figcaption>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            Iz
          </Avatar>
        }
        title={props.title}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={props.photo_main}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="div">
          <p className="card__location">
            {props.address}, {props.city}, {props.state}
          </p>
          <div className="row">
            <div className="col-md-6">
              <p className="card__info">
                Price: ${numberWithCommas(props.price)}
              </p>
              <p className="card__info">Bedrooms: {props.bedrooms}</p>
              <p className="card__info">Bathrooms: {props.bathrooms}</p>
            </div>
            <div className="col-md-6">
              <p className="card__saletype">{props.sale_type}</p>
              <p className="card__hometype">{props.home_type}</p>
              <p className="card__sqft">Sqft: {props.sqft}</p>
            </div>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
};

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  photo_main: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.string.isRequired,
  sale_type: PropTypes.string.isRequired,
  home_type: PropTypes.string.isRequired,
  sqft: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default CardItem;
