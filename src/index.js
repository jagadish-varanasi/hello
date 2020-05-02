import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
// identify the portion that will be duplicated and make it a sepate component
//we cannot use { } while showing components.. always treat components as tags
// Here App is parent component and CommentDetail is child component...props sysytem is a sysytem in react for 
//passing data from parent to child component..goal is to customize and configure child component...communicate data from p to c...props means properties...
//parent provides info and child consumes this info to display that particular propertiy value

const App=()=>{
  return (
   <div className="ui container comments">
   <CommentDetail author="sam" />
   <CommentDetail author="Bob"/>
   <CommentDetail author="Alice"/>
   </div>


  );
};

ReactDOM.render(
  <App/>,
  document.querySelector('#root')

)