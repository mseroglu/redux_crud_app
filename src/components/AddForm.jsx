import { useDispatch } from "react-redux"
import { v4 as uuidv4 } from "uuid"
import { actionTodoEkle } from "../redux/actions"
import { toast } from "react-toastify"

const AddForm = () => {
  const dispatch = useDispatch()
  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault()

    const text = e.target[0].value.trim()
    if (!text) return toast.error("Todo boş olmamalı", {autoClose: 2000, position: "top-left",})
    // yeni todo oluştur
    const newTodo = {
      id: uuidv4(),
      text,
      is_done: false,
      created_at: new Date().toLocaleDateString()
    }
    // reducer a haber vermek
    dispatch(actionTodoEkle(newTodo))
    // formu sıfırla
    e.target.reset()
  }
  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input type="text" className="form-control" />
      <button className="btn btn-warning">Gönder</button>
    </form>
  )
}

export default AddForm
