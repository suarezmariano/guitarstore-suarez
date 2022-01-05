import React from 'react';

const MessageSearchOrder = ({ msg }) => (
  <div class="ui success message">
    <div class="content">
      <div class="header">El total de la compra fue: u$s {msg.total}</div>
    </div>
  </div>
);
export default MessageSearchOrder;
