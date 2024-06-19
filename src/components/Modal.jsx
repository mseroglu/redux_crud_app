import { useRef } from "react"
import { useDispatch } from "react-redux"
import { actionTodoGuncelle } from "../redux/actions"


const Modal = ({ todo, setIsOpen}) => {
    const dispatch = useDispatch()
    const refInput = useRef()
    
    const save = () => {
        
        const newText = refInput.current.value
        
        const updated = {...todo, text: newText}

        dispatch(actionTodoGuncelle(updated))

        setIsOpen(false)
    }
    return (
        <div className="modal d-flex text-dark bg-opacity-50 bg-dark" >
            <div className="modal-dialog modal-dialog-centered w-50">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Todoyu güncelle</h5>
                        <button onClick={() => setIsOpen(false)} type="button" 
                        className="btn-close" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex flex-column">
                        <label htmlFor="input"> Yeni başlık </label>
                        <input ref={refInput} id="input" type="text" 
                        className="form-control shadow mt-2" defaultValue={todo.text}/>
                    </div>
                    <div className="modal-footer">
                        <button onClick={save} type="button" 
                        className="btn btn-primary">Kaydet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
