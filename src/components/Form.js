import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const expenseForm = ({
  expense,
  desc,
  price,
  handlePrice,
  handleExpense,
  handleDesc,
  handleSubmit
}) => {
  return (
    <Form size="large" onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          icon="shopping cart"
          iconPosition="left"
          type="text"
          id="expense"
          name="expense"
          placeholder="e.g. Food"
          label="Product Name"
          value={expense}
          onChange={handleExpense}
        />
        <Form.Input
          fluid
          icon="dollar sign"
          iconPosition="left"
          type="text"
          id="price"
          name="price"
          placeholder="e.g. $15"
          label="Product Price"
          value={price}
          onChange={handlePrice}
        />
      </Form.Group>
      <Form.Input
        fluid
        icon="pencil"
        iconPosition="left"
        type="text"
        id="desc"
        name="desc"
        placeholder="About the purchase"
        label="Description"
        value={desc}
        onChange={handleDesc}
      />

      <Button type="submit" color="teal" fluid size="large">
        Submit
      </Button>
    </Form>
  );
};

export default expenseForm;
