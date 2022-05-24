import React, { useEffect, useState } from 'react'

const Todos = () => {
    const [newTodo,setNewTodo] = useState("");
    const [todos,setTodos] = useState([])

   const saveInfo = ()=>{

    fetch("http://localhost:3004/todos",{
        method:"POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify({
            value : newTodo,
            isCompleted : false,
        })
    })
    .then((res)=>res.json())
    .then((data)=>{
   
    setTodos([...todos,data])
    console.log(todos)
    setNewTodo("")
    })


   }
  /// delete data from server

//   const deleteInfo = ()=>{

//     fetch("http://localhost:3004/todos/posts/1",{
//         method:"POST",
//         headers:{
//             "content-type": "application/json"
//         },
//         body: JSON.stringify({
//             value : newTodo,
//             isCompleted : false,
//         })
//     })
//     .then((res)=>res.json())
//     .then((data)=>{
   
//     setTodos([...todos,data])
//     console.log(todos)
//     setNewTodo("")
//     })

//   }


    useEffect(()=>{

        fetch("http://localhost:3004/todos?_page=1&_limit=4")
        .then((res)=>res.json())
        .then((data)=>{
        //   console.log(data)
        setTodos(data)
        })

    },[])

   
   
  return (
      <>
    <div>
      <input type="text" value= {newTodo} onChange={(e)=>setNewTodo(e.target.value)} />
      <button onClick={saveInfo}>ADD</button>
      {/* <button onClick={deleteInfo}>Delete data from server</button> */}

      {todos.map((el)=>(
         <div key={el.id}>{el.value}</div>
      ))}
    </div>
    <button onClick={()=> setTodos([])}>clear</button>
    </>
  )
}

export default Todos
