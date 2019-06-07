import React from 'react';
import Message from './Message.jsx';

export default function MessageList(props){
    return (
      <main key="messageList" className="messages">
        {props.messageList.map((message) => <Message props={message} key={message.id}></Message> )}
      </main>
      
    );
}