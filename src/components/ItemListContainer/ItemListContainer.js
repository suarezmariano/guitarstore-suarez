import { Card, Image } from "semantic-ui-react";
import "./ItemListContainer.css";

const ItemListContainer = ({ img, model, price, description }) => (
  <div className="ItemListContainer">
    <Card>
      <Image src={img} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{model}</Card.Header>
        <Card.Meta>
          <span className="date">{price}</span>
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  </div>
);

export default ItemListContainer;
