import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = (params) => {

  const [formValues, setFormValues] = useState({});
  const history = useHistory();

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e, values) => {
    const { username, password } = formValues;
    e.preventDefault()

    const response = await axios.post('http://127.0.0.1:8081/login', {
      username,
      password
    })
    console.log({ response })
    if (response.status === 200) {
      history.push('/home')
    }

  }
  return (
    <div className="d-flex justify-content-center align-items-center login bg-light text-center">
      <form onSubmit={handleSubmit}>
        <h5 className="mb-4">Login Form</h5>
        <div>
          <input
            type="text"
            className="form-control py-4"
            name="username"
            placeholder="username"
            onChange={handleInputChange}
            autocomplete="off"
            required
          />
        </div>
        <div>
          <input
            className="form-control py-4"
            type="password"
            name="password"
            placeholder="password"
            onChange={handleInputChange}
            autocomplete="off"
            required
          />
        </div>
        <input
          type="submit"
          value="login"
          className="btn btn-success w-100"
        />
      </form>

    </div>
  )
}

export default Login