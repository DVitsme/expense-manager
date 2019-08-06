import React from 'react';
import Item from './Item';

const List = ({ expenses }) => {
  return (
    <div>
      hi from List
      <ul>
        {expenses.map(expense => (
          <Item key={expense.id} expense={expense} />
        ))}
      </ul>
    </div>
  );
};

export default List;
