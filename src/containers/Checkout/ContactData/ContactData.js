import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Saddam",
        address: {
          street: "TestStreet 1",
          zipcode: "010 57866727",
          country: "Uzbekistan",
        },

        email: "test@gmail.com",
      },

      deliveryMethod: "fastest",
    };

    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        <form>
          <input
            className={classes.input}
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            className={classes.input}
            type="email"
            name="email"
            placeholder="Your email"
          />
          <input
            className={classes.input}
            type="text"
            name="street"
            placeholder="Street"
          />
          <input
            className={classes.input}
            type="text"
            name="name"
            placeholder="Postal code"
          />
          <Button btnType="Success" clicked={this.orderHandler}>
            ORDER
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
