import React from 'react';
import Contact from './Contact.jsx';

// component for contact input sheet
// enter data for first, last name & phone number
const ContactInfo = (props) => {
  // const contacts = props.contacts;
  // const contactItems = contacts.map((contact) => <li>{contact}</li>);
  return (
    <div>
      {console.log('2 Contact Info: ', props.contacts)}
      <ul>
        {props.contacts.map(contact => <Contact contact={contact} />)}
      </ul>
    </div>
  );
};

// class ContactInfo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: 0,
//       firstName: '',
//       lastName: '',
//       phoneNumber: ''
//     };

//     // bind keyword this to change & submit functions
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);

//   }

//   // function to store entered strings in state
//   handleChange(event) {
//     console.log('Typing first name!', event.target.first);
//     // set firstName state to text entered into field
//     this.setState({
//       firstName: event.target.first
//     });
//   }

//   // function to submit info from form
//   handleSubmit(event) {
//     event.preventDefault();
//     // console log first name when form submitted
//     console.log('First Name: ', this.state.firstName);
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           First Name:
//           <input type="text" first={this.state.firstName} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

export default ContactInfo;

// NOTES
// reconfigure ContactInfo into react class
// add input form for contact info
// console log input data as object