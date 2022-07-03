import React,{useState} from "react";
import ToDoLists from "./ToDoLists";

const App=()=>{
  const[inputList,setinputList]=useState("");
  const[items,setitems]=useState([]);


  const itemEvent=(event)=>{
     setinputList(event.target.value);
  };

  const listofitems=()=>{
     setitems((oldItems)=>{
      return [...oldItems,inputList];
     });
     setinputList('');
  };

  const deleteItems=(id)=>{
    setitems((oldItems)=>{
      return oldItems.filter((arrEle,index)=>{
         return index!==id;
      })
    })
  };
  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>ToDo List</h1>
          <br/>
          <input type="text" placeholder="Add a items" onChange={itemEvent} value={inputList}/>
          <button onClick={listofitems}> + </button>
          <ol>
            {items.map((itemval,index)=>{
               return <ToDoLists key={index} id={index} text={itemval} onSelect={deleteItems}/>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
