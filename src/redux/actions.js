import ActionTypes from "./actionTypes"

export const actionTodoEkle = (payload) => ({ type: ActionTypes.EKLE, payload })

export const actionTodoSil = (payload) => ({ type: ActionTypes.SIL, payload })

export const actionTodoGuncelle = (payload => ({ type: ActionTypes.GUNCELLE, payload }))

