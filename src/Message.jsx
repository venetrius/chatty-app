import React from 'react';

function  Message({props, index}) {
  let content;
  if(props.type === 'incomingMessage'){
    content =  
      <div className="message">
        <span className="message-username">{props.username}</span>
        <span className="message-content">{props.content}</span>
      </div>
  }else{
    content = 
      <div className="message system">
         {props.content}
     </div>
  }
  return (
   <div>{content}</div>
    
    
  );
}
export default Message;
