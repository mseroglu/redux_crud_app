import Modal from "./Modal"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { actionTodoGuncelle, actionTodoSil } from "../redux/actions"

const Card = ({ todo }) => {
    const [isOpen, setIsOpen] = useState(false)

    const dispatch = useDispatch()

    const handleDelete = () => {
        if (confirm(`'${todo.text}' isimli todoyu silmek istediğinize eğin misiniz?`)) {
            dispatch(actionTodoSil(todo.id))
        }
    }

    const handleStatus = () => {
        const updated = { ...todo, is_done: !todo.is_done }
        dispatch(actionTodoGuncelle(updated))
    }

    return (
        <div className="border rounded p-3 shadow-lg">
            <h5 className={`${todo.is_done ? "bg-secondary text-light" : "bg-warning text-dark"} rounded p-1`}>{todo.text}</h5>
            <h6 className={`${todo.is_done ? "text-success" : "text-warning"}`}>{todo.is_done ? "Tamamlandı" : "Devam ediyor"} </h6>
            <p>{todo.created_at}</p>

            <div className="d-flex gap-2">
                <button onClick={() => setIsOpen(true)} className="btn btn-primary" data-bs-target="#exampleModal" >Düzenle</button>
                <button onClick={handleStatus} className={`btn ${todo.is_done ? "btn-warning" : "btn-success"}`}>{todo.is_done ? "Geri Al" : "Tamamla"}</button>
                <button onClick={handleDelete} className="btn btn-danger">Sil</button>
            </div>

            {isOpen && <Modal todo={todo} setIsOpen={setIsOpen} />}
        </div>
    )
}

export default Card
