import React from 'react';
import { Message } from 'semantic-ui-react';

const MessageSearchOrder = ({ msg }) => (
  <div class="ui success message">
    <div class="content">
      <div class="header">El total de la compra fue: u$s {msg.total}</div>
    </div>
  </div>
);
export default MessageSearchOrder;
