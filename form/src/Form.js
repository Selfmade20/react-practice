import React from 'react';
import './Form.css';
import useForm from './useForm';

const Form = () => {

  const { handleChange, handleSubmit, values } = useForm(submit)

  function submit() {
    console.log("I got it")
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label>Email</label>
      </div>
      <div>
        <input type="email" onChange={handleChange} name="email" value={values.email} />
      </div>
      <div>
        <label>Password</label>
      </div>
      <div>
        <input type="password" onChange={handleChange} name="password" value={values.password} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
