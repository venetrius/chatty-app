import React, { Component } from 'react';

const urlRegExp = /((https:\/\/|http:\/\/)|((https:\/\/|http:\/\/)?www\.)|www\.)..([^ \t\r\n\v\f])*\.([^ \t\r\n\v\f])*\.(jpg|png|gif)/g

const machImgUrl= function (content){
  const res = urlRegExp.exec(content);
  return res ? res[0] : res;
}

const createPost = function(content, userColor, username){
  const imgUrl = machImgUrl(content);
  const img = imgUrl ? <img src={imgUrl} /> : '';
  const text = imgUrl ? content.replace(imgUrl, '') : content;
  return (      
    <div className="message">
      <span className="message-username" style={{color : userColor}}>{username}</span>
      <span className="message-content">{text} <br/> {img}</span>        
    </div>
  );
}

const isMessage = function (props){
  return props.type === 'incomingMessage';
}



class  Message extends Component{
  constructor(props) {
    super(props);
    this.container = React.createRef();
  }

  // scrolling down on first load
  componentDidMount(){
    this.container.current.scrollIntoView({ behavior: "smooth" });
  }

  render(){
    let props = this.props.props; 
    let content = isMessage(props) ? createPost(props.content, props.userColor, props.username) 
                  : (<div className="message system"> {props.content} </div>);
    return (
    <div ref={this.container}>{content}</div>
    );
  }
}
export default Message;
