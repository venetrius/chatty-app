import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {

  constructor(){
    super();
    this.state = {
      messages : [
        {
          type: 'incomingMessage',
          content: 'I won\'t be impressed with technology until I can download food.',
          username: 'Anonymous1'
        },
        {
          type: 'incomingNotification',
          content: 'Anonymous1 changed their name to nomnom',
        } ]
      }
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messageList={this.state.messages}/>
        <ChatBar/>
      </div>
    );
  }
}
export default App;


/*

*/