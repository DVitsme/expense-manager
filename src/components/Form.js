import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const expenseForm = () => {
  return (
    <Form size="large">
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
        />
      </Form.Group>
      <Form.Input
        fluid
        type="text"
        id="desc"
        name="desc"
        placeholder="About the purchase"
        label="Description"
      />

      <Button type="submit" color="teal" fluid size="large">
        Submit
      </Button>
    </Form>
  );
};

export default expenseForm;
