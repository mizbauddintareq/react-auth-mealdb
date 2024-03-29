import React from "react";
import "./NotFound.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="page_404">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1 mx-auto">
              <div className="four_zero_four_bg mx-auto">
                <h1 className="text-center text-danger ">404</h1>
              </div>

              <div className="contant_box_404 text-center text-danger">
                <h3 className="h2">Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

                <Button
                  as={Link}
                  to="/"
                  type="button"
                  className="btn btn-success"
                >
                  Back To Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
