import React from 'react';

const Item = props => {
  const { charge, amount } = props.expense;
  return (
    <li>
      {charge}: ${amount}
    </li>
  );
};

export default Item;
