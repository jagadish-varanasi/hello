import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
// identify the portion that will be duplicated and make it a sepate component
//we cannot use { } while showing components.. always treat components as tags
const App=()=>{
  return (
   <div className="ui container comments">
   <CommentDetail/>
   </div>


  );
};

ReactDOM.render(
  <App/>,
  document.querySelector('#root')

)