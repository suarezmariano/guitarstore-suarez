import React from 'react';
import { Message } from 'semantic-ui-react';

const MessageSuccess = ({ msg }) => (
  <Message
    success
    header="Compra finalizada, su número de orden es:"
    content={msg.id}
    style={{ textAlign: 'center' }}
  />
);
export default MessageSuccess;
