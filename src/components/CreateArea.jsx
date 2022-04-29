import React,{useState} from "react";

function CreateArea(props){
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


    return(
        <div>
            <form>
                <input name= "title" placeholder="Title" onChange={handleChange} value={input.title}/>
                <input name= "content" placeholder="Take a note..." onChange={handleChange} value={input.content}/>
                <button
                    onClick={btn =>{
                        props.buttonClick(input);   // the input details is passed to addNote function which insert the elements in the array.
                        setInput({
                            title:"",
                            content:""
                        })
                        btn.preventDefault();
                    }}
                    >Add</button>
            </form>
        </div>
    );
}

export default CreateArea;

