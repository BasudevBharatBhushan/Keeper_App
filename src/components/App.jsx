import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";



function App(){
    const [notes , setNotes]=useState([]);

    function addNote(newNote){
        setNotes( prevNotes =>{
            return [...prevNotes , newNote];    //New note has been added
        })
    }

    function deleteNote(id){
        setNotes(prevNotes=>
            prevNotes.filter((noteItem, index)=>
            index!==id 
            )
        );
    }
    return(
        <div>
            <Header/>
            <CreateArea buttonClick={addNote}/>
            {notes.map((noteItem, index)=>{
                return(
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />
                );
            })}

            <Footer/>
        </div>
    );
}

export default App;