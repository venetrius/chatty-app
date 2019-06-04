import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  
  constructor(props){
    super();
    this.messageList = props.messageList;
  }

  render() {
    const messageList = this.messageList.map((message, index) => <Message props={message} key={'message_' + index}></Message> );
    return (
      <main key="messageList" className="messages">
        {messageList}
      </main>
      
    );
  }
}
export default MessageList;
