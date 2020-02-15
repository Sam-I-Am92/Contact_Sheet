import React from 'react';
import Axios from 'axios';
import ContactInfo from './ContactInfo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: '',
      mode: 'form',
      id: 0,
      firstName: '',
      lastName: '',
      phoneNumber: '',
      contactInfo: []
    };

    // bind keyword this to functions
    this.connectServer = this.connectServer.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAdmin = this.handleAdmin.bind(this);
    this.handleForm = this.handleForm.bind(this);

  }

  // get dummy response from server
  connectServer() {
    Axios.get('/api/time')
      .then((res) => {
        // console log server response
        console.log('Server Response: ', res.data);
        // set state to server response
        this.setState({
          response: res.data
        });
      })
      // console log new state
      .then(() => {
        console.log('New State: ', this.state.response);
      });
  }

  // function to store entered strings in state
  handleChange(event) {
    const target = event.target;
    const name = target.name; // name of field
    const value = target.value; // text entered into field
    this.setState({ [name]: value }); // [name] evaluates to target.name; value is value of field
  }

  // function to submit info from form
  handleSubmit(event) {
    event.preventDefault();
    // post request
    Axios.post('/contact', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber
    })
      .then((res) => {
        console.log('Post Response: ', res.data);
      });
  }

  handleAdmin() {
    this.setState({ mode: 'admin'});
    console.log('New Mode: ', this.state.mode);
    Axios.get('/admin')
      .then((res) => {
        this.setState({
          contactInfo: res.data
        });
      });
  }

  handleForm() {
    this.setState({
      mode: 'form'
    });
  }

  // call connectServer on rendering app
  componentDidMount() {
    this.connectServer();
  }

  render() {
    if (this.state.mode === 'form') {
      return (
        <div>
          <button onClick={this.handleAdmin}>Admin</button>
          <h1>Enter Your Information!</h1>
          <form>
            <div>
              <label>
                First Name:
                <input 
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <br/>
            <div>
              <label>
                Last Name: 
                <input 
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <br/>
            <div>
              <label>
                Phone Number: 
                <input 
                  name="phoneNumber"
                  value={this.state.phoneNumber}
                  onChange={this.handleChange}
                />
              </label>
            </div>
            <br/>
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.handleForm}>Form</button>
          <ContactInfo contacts={this.state.contactInfo} />
        </div>
      );
    }
  }
}
      
export default App;