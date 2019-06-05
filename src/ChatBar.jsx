import React from 'react';

function ChatBar (props) {

  const changeName = function(event) {
    const newName = event.target[0].value;
    event.preventDefault();
    props.updateUserName(newName);
  }

  const keyUp = function(event){
    if (event.key === 'Enter' && event.target.value.length > 0) {
      props.onNewMessage(props.username, event.target.value);
      event.target.value = '';
    }
  };

  // parent should provide a callback to call when username is changed
  let nameInput = props.username ? 
    <input name='name' className="chatbar-username" defaultValue={props.username} /> :
    <input name='name' className="chatbar-username" placeholder="Your Name (Optional)" />;


  return (
    <footer className="chatbar">
      <form onSubmit={changeName}>
        {nameInput}
      </form>
      
      <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyUp={keyUp}/>
    </footer>   
  );
}
export default ChatBar;
