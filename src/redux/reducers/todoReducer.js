import { toast } from "react-toastify";
import ActionTypes from "../actionTypes";

const initialState = {
    todos: [
        {
            "id": "55cecf4e-ef1d-4b25-9952-dd2c375fe865",
            "text": "Python öğren",
            "is_done": true,
            "created_at": "13.06.2024"
        },
        {
            "id": "71855af4-6118-4960-b16d-96d110418425",
            "text": "React öğren",
            "is_done": false,
            "created_at": "13.06.2024"
        },
        {
            "id": "2048ed2f-d539-4c06-b608-0e490d7d49d8",
            "text": "React native öğren",
            "is_done": false,
            "created_at": "13.06.2024"
        }
    ]
}

const todoReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ActionTypes.EKLE:
            newState = {
                todos: state.todos.concat(action.payload)
            }
            toast.success("Todo ekleme Başarılı")
            return newState;

        case ActionTypes.SIL:
            newState = {
                todos: state.todos.filter((item) => action.payload !== item.id)
            }
            toast.warning("Todo silme başarılı")
            return newState;

        case ActionTypes.GUNCELLE:
            newState = {
                todos: state.todos.map((item) => item.id !== action.payload.id ? item : action.payload )
            }
            toast.info("Güncelleme başarılı")
            return newState;


        default:
            return state;
    }
}

export default todoReducer