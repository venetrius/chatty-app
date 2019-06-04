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
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!",type: 'incomingMessage'};
      const messages = this.state.messages.concat([newMessage])
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
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
}
export default App;


/*

*/