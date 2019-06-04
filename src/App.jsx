import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {

  constructor(){
    super();
    this.state = {
      username : 'Bob',
      messages : [
        {
          id : 1,
          type: 'incomingMessage',
          content: 'I won\'t be impressed with technology until I can download food.',
          username: 'Anonymous1'
        },
        {
          id : 2,
          type: 'incomingNotification',
          content: 'Anonymous1 changed their name to nomnom',
        } 
      ]
    };
    this.createNewMessage = this.createNewMessage.bind(this);
    this.connection = null;
  }

  componentDidMount() {
    this.connect();
  }

  createNewMessage(username, content){
    const newMessage = {
      id: this.state.messages.length + 1,
      username: username,
      content: content,
      type: 'incomingMessage'
    };
    const messages = this.state.messages.concat([newMessage]);
    this.setState({messages: messages});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messageList={this.state.messages}/>
        <ChatBar username={this.state.username} onNewMessage={this.createNewMessage}/>
      </div>
    );
  }

  connect() {
    const serverUrl = 'ws://localhost:3001/';  
    this.connection = new WebSocket(serverUrl, 'json');
    console.log('***CREATED WEBSOCKET');
  
    this.connection.onopen = function(evt) {

    };
    console.log("***CREATED ONOPEN");
  
    this.connection.onmessage = function(evt) {
      var msg = JSON.parse(evt.data);
      console.log("Message received: ");
      console.log(msg);
      var time = new Date(msg.date);
      var timeStr = time.toLocaleTimeString();
    };
    console.log("***CREATED ONMESSAGE");
  }

}
export default App;


/*

*/