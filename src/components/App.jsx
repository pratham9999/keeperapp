import React, { useState } from "react";
import Header from "./Header";

import Note  from "./Note";
import Createarea from "./createarea";

function App(){
   
  const [notes  , setnotes] = useState([]);

  function addNote(newNote){
          setnotes(prevNotes => {
             
          return [...prevNotes ,newNote];

          });
  }


  function deleteNote(id){
       
    setnotes(prevNotes=> {
      return prevNotes.filter((noteItem , index )=> {
         
        return index!==id

      })
    })

  }
    return ( <div> 
      
      <Header/>
      <Createarea

        onAdd = {addNote}
      />
      
        {notes.map((noteItem , index) =>  {
            
          return <Note 
                key = {index}
                id = {index}
                title = {noteItem.title}
                content = {noteItem.content}
                onDelete = {deleteNote} 
            /> 
        })}

      
     
    </div>
    );
}

export default App;