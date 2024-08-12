
// import React, { useEffect, useState } from 'react';

// const Todo = () => {

//     const [todos, setTodo] = useState('')
// const [addData, setAddData] = useState([])


// useEffect(() => {
//      const storedTodo = localStorage.getItem('todos');
// if(storedTodo){


//      setAddData(JSON.parse(storedTodo))
// }

// },[])
// useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(addData));

// },[addData]) // update

//     const handleChange = (e) => {

//         setTodo(e.target.value)
//     }


//     const addTodo = () => {

//         if(todos.trim() !== ''){

        
//         setAddData([...addData,todos])
        
//         // setAddData(prevData => [...prevData,todos])
//         setTodo('')
//         }

//     }
//     return(
//         <div>

//             <input   type='text' placeholder='enter text here'  value={todos} onChange={handleChange} />
//             <button  onClick={addTodo} >Add Button</button>

//             {/* <h1>{todos}</h1> */}
//             <ul>
//                 {addData.map((data,index) =>(
//                     <li key={index}>{data}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }


// export default Todo;


import React, { useState, useEffect } from 'react';

const Todo = () => {
    const [todo, setTodo] = useState('');
    const [addData, setAddData] = useState([]);

const [editId, setEditId] = useState(null)

    // Load todos from local storage when the component mounts
    // useEffect(() => {
    //     const storedTodos = localStorage.getItem('todos');
    //     if (storedTodos) {
    //         setAddData(JSON.parse(storedTodos));
    //     }
    // }, []);

    // Save todos to local storage whenever addData changes
    // useEffect(() => {
    //     localStorage.setItem('todos', JSON.stringify(addData));
    // }, [addData]);

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const addTodo = () => {

        if(editId !==null){
            
        // const UpdatedData =    addData.map((data,index) => (index === editId ? todo : data))

        // setAddData(UpdatedData)

        setAddData(prev =>prev.map((data,index) => (index === editId ? todo : data)))
        setEditId(null)





        }
        else {

        
        if (todo.trim() !== '') {
            setAddData([...addData, todo]);
           
        }
    }
    setTodo('');
    };


    const deleteTodo = (index) => {

          const myData =   addData.filter((data, id) => id !== index )

          setAddData(myData)
    }

    // const EditTodo =(index) => {

    //     setTodo(todo[index])
    //     setEditId(index)
    // }

    const EditTodo = (index) => {
        setTodo(addData[index]);
        setEditId(index);
    };
    return (
        <div>
            <input
                type='text'
                placeholder='enter text here'
                value={todo}
                onChange={handleChange}
            />
            <button onClick={addTodo}>{editId  !==null ? 'Update' : 'Add'}</button>
            <ul>
                {addData.map((data, index) => (
                    <li key={index}> {data}
                    <button onClick={() =>deleteTodo(index)}>deleteTodo</button>
                    <button onClick={() => EditTodo(index)}> EditId</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
