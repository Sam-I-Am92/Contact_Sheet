import React from 'react';

const Contact = (props) => {
  return (
    <li>
      {props.contact.firstName}
      <br/>
      {props.contact.lastName}
      <br/>
      {props.contact.phoneNumber}
      <br/>
      {props.contact.date}
      <br/>
    </li>
  );
};

export default Contact;