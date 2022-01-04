import React from 'react';
import { Message } from 'semantic-ui-react';

const MessageSearchOrder = ({ data }) => (
  <Message
    success
    header="Datos de la compra:"
    content={data}
    style={{ textAlign: 'center' }}
  />
);
export default MessageSearchOrder;
