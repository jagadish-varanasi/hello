import React from 'react'
//import faker from 'faker'
//Here we should consume the properties provided by parent component...the property called author
//the aurgument to the component is props...when u console log it u'll get key value pair like {author:'Bob'}....
// to access this value use {props.author} in child component
const CommentDetail=(props)=>{
    console.log(props)
    return(
        <div className="comment">
        <a href="/" className="avatar">
        <img alt="avatar" src={props.imagesrc}/>
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
    <span className="date">{props.timeAgo}</span>
          </div>
    <div className="text">{props.content}</div>

        </div>
     </div>
       
   );
};

export default CommentDetail;