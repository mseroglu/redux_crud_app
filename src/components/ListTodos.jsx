import { useSelector } from "react-redux"
import Card from "./Card";


const ListTodos = () => {
  // store a abobne olma: "store yerine içindeki reducerlara abone oluyoruz"
  const { todos } = useSelector((store) => store.todoReducer);

  console.log(todos)
  return (
    <div>
      <h3 className="text-center">LİST TODOS</h3>
      <div className="d-flex flex-column gap-3">
      {todos.map((todo) => (
        <Card key={todo.id} todo={todo}/>
        //<div key={todo.id}>{todo.text}</div>
        )
        )}
      </div>
    </div>
  )
}

export default ListTodos
