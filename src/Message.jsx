import React from 'react';

const urlRegExp = /((https:\/\/|http:\/\/)|((https:\/\/|http:\/\/)?www\.)|www\.)..([^ \t\r\n\v\f])*\.([^ \t\r\n\v\f])*\.(jpg|png|gif)/g

const machImgUrl= function (content){
  const res = urlRegExp.exec(content);
  return res ? res[0] : res;
}

const createPost = function(content){
  const imgUrl = machImgUrl(content);
  const img = imgUrl ? <img src={imgUrl} /> : '';
  const text = imgUrl ? content.replace(imgUrl, '') : content;
  return (      
    <div className="message">
      <span className="message-username" style={{color : props.userColor}}>{props.username}</span>
      <span className="message-content">{text} <br/> {img}</span>        
    </div>
  );
}

const isMessage = function (props){
  return props.type === 'incomingMessage';
}

function  Message({props}) {
  let content = isMessage(props) ? createPost(props.content) : (<div className="message system"> {props.content} </div>);
  return (
   <div>{content}</div>
  );
}
export default Message;
