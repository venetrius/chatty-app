import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {

  constructor(){
    super();
    this.state = {
      username : '',
      messages : [],
      usercount : 0 
    };
    this.createNewMessage = this.createNewMessage.bind(this);
    this.updateUserName = this.updateUserName.bind(this);
    this.connection = null;
  }
  
  // opens a websocket connection
  componentDidMount() {
    this.connect();
  }

  updateUserName(newName){
    const oldName = this.state.username ? this.state.username : 'Anonymus';
    if(newName && newName !== oldName){
      const notification = {
        content: oldName + ' has changed their name to ' + newName + '.',
        type: 'postNotification'
      };
      this.connection.send(JSON.stringify(notification));
      this.setState({username : newName});
    }
  }

  createNewMessage(username, content){
    const newMessage = {
      username: this.state.username ? this.state.username : 'Anonymus',
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
          <a href="/" className="navbar-brand">Chatty</a> <span className='user-count'> {this.state.usercount} user online </span>
        </nav>
        <MessageList messageList={this.state.messages}/>
        <ChatBar username={this.state.username} updateUserName={this.updateUserName} onNewMessage={this.createNewMessage}/>
      </div>
    );
  }

  connect() {
    const serverUrl = 'ws://localhost:3003/';  
    this.connection = new WebSocket(serverUrl, 'json');
    const App = this;

    this.connection.onmessage = function (event) {
      var newMessage = JSON.parse(event.data);
      if(newMessage.type === 'userCountNotification'){
        App.setState({usercount : newMessage.content});
      }else{
        const messages = App.state.messages.concat([newMessage]);
        App.setState({messages: messages});
      }
    }
  }

}
export default App;


/*

*/