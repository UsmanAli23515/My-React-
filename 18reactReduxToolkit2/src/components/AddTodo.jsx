import React, { useEffect } from 'react';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo, clearEditingTodo } from "../redux/slice.js";

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  
  const editingTodo = useSelector(state => state.editingTodo);

  useEffect(() => {
    if (editingTodo) {
      setInput(editingTodo.text);
    } else {
      setInput('');
    }
  }, [editingTodo]);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (editingTodo) {
      dispatch(updateTodo({ id: editingTodo.id, text: input }));
      dispatch(clearEditingTodo());
    } else {
      dispatch(addTodo(input));
    }
    setInput('');
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {editingTodo ? "Update Todo" : "Add Todo"}
      </button>
      {editingTodo && (
        <button
          type="button"
          onClick={() => dispatch(clearEditingTodo())}
          className="text-white bg-gray-500 border-0 py-2 px-4 focus:outline-none hover:bg-gray-600 rounded text-lg ml-2"
        >
          Cancel
        </button>
      )}
    </form>
  );
}

export default AddTodo;
