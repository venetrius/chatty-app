import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  
  constructor(props){
    super();
  }

  render() {
    const messageList = this.props.messageList.map((message) => <Message props={message} key={'message_' + message.id}></Message> );
    return (
      <main key="messageList" className="messages">
        {messageList}
      </main>
      
    );
  }
}
export default MessageList;
