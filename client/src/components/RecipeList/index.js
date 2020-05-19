import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function RecipeList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function RecipeListItem({
  thumbnailImage,
  name,
  shortDescription,
  url
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnailImage || "https://placehold.it/300x300"} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{name}</h3>
            <p>Short Description: {shortDescription}</p>
            <a rel="noreferrer noopener" target="_blank" href={url}>
              Add to Cart!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
