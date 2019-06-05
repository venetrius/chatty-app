import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {

  constructor(){
    super();
    this.state = {
      username : 'Bob',
      messages : []
    };
    this.createNewMessage = this.createNewMessage.bind(this);
    this.updateUserName = this.updateUserName.bind(this);
    this.connection = null;
  }

  componentDidMount() {
    this.connect();
  }

  updateUserName(newName){
    const oldName = this.state.username;
    if(newName && newName !== oldName){
      this.setState({username : newName});
    }
  }

  createNewMessage(username, content){
    const newMessage = {
      username: username,
      content: content,
      type: 'postMessage'
    };
    this.connection.send(JSON.stringify(newMessage));
  }

  showNewMessage(newMessage){
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
        <ChatBar username={this.state.username} updateUserName={this.updateUserName} onNewMessage={this.createNewMessage}/>
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
  
    const App = this;
    const showNewMessage = function (event) {
      var newMessage = JSON.parse(event.data);
      const messages = App.state.messages.concat([newMessage]);
      App.setState({messages: messages});
    }

    this.connection.onmessage = showNewMessage;

    console.log("***CREATED ONMESSAGE");
  }

}
export default App;


/*

*/