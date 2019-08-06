import React from 'react';
import { MdSend } from 'react-icons/md';

const Form = () => {
  return (
    <form>
      <div>
        <label htmlFor="expense">Product Name</label>
        <input
          type="text"
          id="expense"
          name="expense"
          placeholder="e.g. Food"
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input type="text" id="price" name="price" placeholder="e.g. $15" />
      </div>
      <button type="submit">
        Submit <MdSend />
      </button>
    </form>
  );
};

export default Form;
