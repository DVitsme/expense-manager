import React from 'react';
import Item from './Item';
import { Button, Card, Icon } from 'semantic-ui-react';

const List = ({ expenses }) => {
  return (
    <div className="my-halfEm">
      <div className="my-oneEm">
        <Card.Group centered>
          {expenses.map(expense => (
            <Item key={expense.id} expense={expense} />
          ))}
        </Card.Group>
      </div>
      {expenses.length > 0 && (
        <Button inverted size="big" color="red">
          Clear Items <Icon name="trash alternate" size="small" />
        </Button>
      )}
    </div>
  );
};

export default List;
