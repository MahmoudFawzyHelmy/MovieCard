import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class MovieCard extends Component {
  render() {
    const { title, description, img, year, darkMode, onViewDetails } =
      this.props;

    return (
      <div className="col-md-3 mb-3">
        <Card className={darkMode ? "bg-dark text-white" : ""}>
          <Card.Img
            variant="top"
            src={img}
            style={{ height: "300px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>
              {title} ({year})
            </Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button
              variant={darkMode ? "outline-light" : "primary"}
              onClick={onViewDetails}
            >
              View Details
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
