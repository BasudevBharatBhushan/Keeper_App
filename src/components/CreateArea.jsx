import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props){

    const[isExpanded , setExpanded] = useState(false);

    const[input , setInput] = useState({
        title:"",
        content:""
    });

    function handleChange(event){
        const{name , value} = event.target;
        setInput(prevItems =>{
            return{
                ...prevItems,
                [name]:value           //will assign value to the respective input, title or value
            };
        });
    }
    function expand(){
        setExpanded(true);
    }

    return(
        <div>
            <form className="create-note">
                {isExpanded && (
                    <input name= "title" placeholder="Title" onChange={handleChange} value={input.title}/>
                )}
                
                <textarea name= "content" 
                placeholder="Take a note..." 
                onChange={handleChange} 
                value={input.content}
                rows={isExpanded?3:1}    
                onClick={expand}
                />
                <Zoom in={isExpanded}>
                <Fab
                    onClick={btn =>{
                        props.buttonClick(input);   // the input details is passed to addNote function which insert the elements in the array.
                        setInput({
                            title:"",
                            content:""
                        })
                        btn.preventDefault();
                    }}
                    ><AddIcon/></Fab>
                    </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;

