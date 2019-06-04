import React from 'react';

function ChatBar (props) {
  let nameInput = props.username ? 
    <input name='name' className="chatbar-username" defaultValue={props.username} /> :
    <input className="chatbar-username" placeholder="Your Name (Optional)" />;


  return (
    <footer className="chatbar">
      {nameInput}
      <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
    </footer>   
  );
}
export default ChatBar;
