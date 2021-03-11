import React, { Component } from "react";

// Used components
import ProductList from "./ProductList";

// Import the db file
import db  from "../../database/db";

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      bg: "",
      myProduct: db.findByCategory("Face")
    };
    this.getImages = this.getImages.bind(this);
  }

  getImages() {
    switch (this.props.location.pathname.substring(10)) {
      case "Face":
        this.setState(state => {
          const info = db.findByCategory("Face");
          return {
            myProduct: info,
            bg: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/foundation-lead-1566229964.png'
          };
        });
        break;
      case "Lips":
        this.setState(state => {
          const info = db.findByCategory("Lips");
          return {
            myProduct: info,
            bg: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-long-lasting-lipsticks-1597325782.jpg'
          };
        });
        break;
      case "Eyes":
        this.setState(state => {
          const info = db.findByCategory("Eyes");
          return {
            myProduct: info,
            bg: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/eyeshadow-palettes-1599149886.jpg'
          };
        });
        break;
      default:
        this.setState(state => {
          const info = db.findByCategory("Lips");
          return {
            myProduct: info,
            bg: 'https://cdn.cultbeauty.co.uk/resized/600/slots-img/bra/brandlanding_coverfx_840x400-fct9h.jpg'
          };
        });
        break;
    }
  }

  componentDidMount() {
    this.getImages();
  }

  render() {
    return <ProductList bg={this.state.bg} myProduct={this.state.myProduct} />;
  }
}