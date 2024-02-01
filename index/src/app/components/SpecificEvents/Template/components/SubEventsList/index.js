import React, { Component } from "react";


import Entry from "./Entry";



function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      
      title={emojiTerm.title}
      content={emojiTerm.content}
      rulebook={emojiTerm.rulebook}
    />
  );
}

class SubEventsList extends Component {

  render() {

   const {data} = this.props
    return (
      <div className="" style={{marginTop :"10rem", marginBottom:"10rem"}}>
       {data.map(createEntry)}
            
      </div>
    );
  }
}

export default SubEventsList;