import React from 'react';
import { Button, Card, Icon } from 'semantic-ui-react';
import { formatPrice } from '../helpers';

const Item = props => {
  const { charge, amount, desc } = props.expense;
  return (
    <Card>
      <Card.Content>
        <Card.Header>{charge}</Card.Header>
        <Card.Meta>{formatPrice(amount)}</Card.Meta>
        <Card.Description>{desc}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            <Icon name="edit" size="small" />
            Edit
          </Button>
          <Button basic color="red">
            <Icon name="delete" size="small" />
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default Item;
