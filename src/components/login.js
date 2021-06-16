import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Login extends Component {

  constructor() {
    super()
    this.state = {
      formValues: {}
    }
  }

  handleInputChange = (e) => {
    const { formValues } = this.state;

    this.setState({
      formValues: { ...formValues, [e.target.name]: e.target.value }
    })
  }


  handleSubmit = async (e) => {
    e.preventDefault();
    const { formValues } = this.state;
    console.log({ formValues })

    const response = await axios.post('http://127.0.0.1:8081/login', {
      formValues
    })
    console.log(response)

    if (response.status === 200) {
      this.props.history.push('/home')
    }
  }


  render() {
    return (
      <div className="d-flex justify-content-center align-items-center login bg-light text-center">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <h5 className="mb-4">Login Form</h5>
          <div>
            <input
              type="text"
              className="form-control py-2"
              name="username"
              placeholder="username"
              onChange={this.handleInputChange}
              autocomplete="off"
              required
            />
          </div>
          <div>
            <input
              className="form-control py-2"
              type="password"
              name="password"
              placeholder="password"
              onChange={this.handleInputChange}
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
}



// } = (params) => {

//   const [formValues, setFormValues] = useState({});
//   const history = useHistory();

//   const handleInputChange = (e) => {
//     setFormValues({
//       ...formValues,
//       [e.target.name]: e.target.value
//     })
//   }

//   const handleSubmit = async (e, values) => {
//     const { username, password } = formValues;
//     e.preventDefault();
//     const response = await axios.post('http://127.0.0.1:8081/login', {
//       username,
//       password
//     })

//     if (response.status === 200) {
//       history.push('/home')
//     }
//   }

// }

export default withRouter(Login);