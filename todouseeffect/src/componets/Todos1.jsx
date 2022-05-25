import React, { useEffect, useState } from "react";
import "./App.css";
// import Todos from "./componets/Todos";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const [totoalCount, setTotalCount] = useState(0);
  const [limit ,setLimit] = useState(5)

  useEffect(() => {
    const getTodo = async () => {
      let res = await axios.get(
        `http://localhost:3000/todos?_page=${page}&_limit=${limit}`
      );

      console.log(res);
      setTodos(res.data);
      setTotalCount(Number(res.headers["x-total-count"]));
    };
    getTodo();
  }, [page,limit]);

  return (
    <>
    
      <div className="App">
      <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
          {"<"}
        </button>
        <button
          disabled={totoalCount <= page * limit}
          onClick={() => setPage(page + 1)}
        >
          {">"}
        </button>

        <select onChange={(e)=>setLimit(Number(e.target.value))} >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
       
        {todos.map((el, index) => {
          return (
            <div key={el.id}>
              {el.id} :{el.value}
            </div>
          );
        })}
        App
        {/* <Todos/> */}
      
      </div>
    </>
  );
}

export default App;
