import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Navbar from './components/Navbar';
import { useState, useRef } from 'react';

function App() {
  const [todoInput, setTodoInput] = useState(""); // State to manage the input field
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Track the index of the todo being edited
  const ref = useRef();

  // Function to focus on the input field
  const foc = () => {
    ref.current.focus();
  };

  // Add or edit todo function
  const handleAddOrEdit = () => {
    if (todoInput.trim() !== "") {
      if (editIndex !== null) {
        // If editing, update the todo at the specified index
        const updatedTodos = [...todos];
        updatedTodos[editIndex].textt = todoInput;
        setTodos(updatedTodos);
        setEditIndex(null);
         // Reset edit index after editing
      } else {
        // If not editing, add a new todo
        setTodos([...todos, { textt: todoInput, completed: false }]);
      }
      setTodoInput(""); // Clear input field after adding or editing
    }
  };
  const handleEdit = (index) => {
    setTodoInput(todos[index].textt); // Set input to the selected todo's text
    setEditIndex(index); // Track the index of the todo being edited
    foc(); // Focus on the input field
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
    // If deleting the todo that's currently being edited, reset the edit state
    if (editIndex === index) {
      setTodoInput("");
      setEditIndex(null);
    }
  };

  const handleCheckbox = (index) => {
    setTodos(todos.map((tod, i) =>
      i === index ? { ...tod, completed: !tod.completed } : tod
    ));
  };

  return (
    <>
      <Navbar />
      <div className='container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]'>
        <div onClick={foc} className="addTodo my-3">
          <h2 className="text-lg font-bold my-3">{editIndex !== null ? "Edit Todo" : "Add a Todo"}</h2>
          {/* Controlled Input */}
          <input 
            ref={ref}
            type="text"
            value={todoInput} // Controlled input value
            onChange={(e) => setTodoInput(e.target.value)} // Update state on change
            placeholder='Enter a task'
            className='w-1/2 h-8 px-4 text-xl border rounded-md'
          />
          <button 
            onClick={handleAddOrEdit} 
            className="bg-blue-500 hover:bg-blue-700 font-bold text-sm text-white rounded-lg cursor-pointer py-2 px-4 mx-6"
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>

        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos">
          <ul>
            {todos.map((todoo, index) => (
              <li key={index} className="flex items-center justify-between w-[617px] my-2 px-2 py-1 border-b">
                {/* Checkbox for completed status */}
                <input 
                  type="checkbox"
                  checked={todoo.completed}
                  onChange={() => handleCheckbox(index)}
                  className="mr-3 h-5 w-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                />
                {/* Apply line-through if todo is completed */}
                <span className={`${todoo.completed ? "line-through text-gray-500" : ""} text-lg`}>
                  {todoo.textt}
                </span>
                <div className="buttons flex">
                  <button onClick={() => handleEdit(index)} className="bg-blue-500 hover:bg-blue-700 text-white cursor-pointer font-semibold py-2 px-3 rounded-lg mx-1">
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDelete(index)} className="bg-red-500 hover:bg-red-700 text-white cursor-pointer font-semibold py-2 px-3 rounded-lg">
                    <MdDelete />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
