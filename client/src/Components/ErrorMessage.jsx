import React from 'react';

const ErrorMessage = props => (
  <div className="message-error">
    <p>{props.error}</p>
  </div>
);

export default ErrorMessage;
