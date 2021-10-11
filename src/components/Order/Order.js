import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Order = () => {
  return (
    <div className="row g-0 my-5 text-center">
      <div className="card col-md-6 mx-auto text-success">
        <div className="card-header">Thank You</div>
        <div className="card-body">
          <h5 className="card-title">Your order has been taken.</h5>
          <p className="card-text">
            You will receive your order within 30 minutes
          </p>
          <Button as={Link} to="/" variant="success">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Order;
