import { useContext,createContext } from "react";
export const TodoContext = createContext({
    todos: [
        { 
            id: 1,
            todo: "todo msg",
            completed: false,
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo: (todo)=>{},
    toggleComplete: (id)=>{}


}
)
 export const useTodo= ()=>{
    return useContext(TodoContext)
 }
 export const TodoProvider=TodoContext.Provider