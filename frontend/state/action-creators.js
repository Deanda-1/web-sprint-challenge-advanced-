/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import reducer from "./reducer"
import axios from "axios"

import { MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
  RESET_FORM,  
} from "./action-types"




// ❗ You don't need to add extra action creators to achieve MVP
export const moveClockwise =() => {
  return ({ type: MOVE_CLOCKWISE})
 }

export const moveCounterClockwise = () => {
  return ({ type: MOVE_COUNTERCLOCKWISE})
 }

export const selectAnswer = (answer) => { 
  return ({ type: SET_SELECTED_ANSWER, payload: answer })
}

export function setMessage(message) {
  return ({ type: SET_INFO_MESSAGE, payload: message })
 }

export function setQuiz() {
  return ({ type: SET_QUIZ_INTO_STATE})
 }

export function inputChange(evt) {
  return ({ type: INPUT_CHANGE, payload: evt.target})
 }

export function resetForm()  {
  return ({type: RESET_FORM})
}

export function fetchQuiz() {
  return function (dispatch) {
    dispatch({type: SET_QUIZ_INTO_STATE})
    axios.get('http://localhost:9000/api/quiz/next')
    .then(({data}) => {
      dispatch ({type: SET_QUIZ_INTO_STATE, payload: data})
    })
  }
}

export function postAnswer(answer) {
  return function (dispatch) {
    axios.post('http://localhost:9000/api/quiz/answer', answer)
    .then(({data}) => dispatch({type: SET_INFO_MESSAGE, payload: data.message}))
    .then(res => dispatch({type: SET_QUIZ_INTO_STATE}))
    .catch(err => dispatch({SET_INFO_MESSAGE, payload: err}))
  }
}

export function postQuiz(quiz) {
  return function (dispatch) {
    axios.post('http://localhost:9000/api/quiz/new', quiz)
    .then(({data}) => dispatch({type: SET_INFO_MESSAGE, payload: `Congrats: "${quiz.question_text}" is a great question!` }))
    .catch(err => dispatch({type: SET_INFO_MESSAGE, payload: 'ERROR POSTING NEW QUIZ'}))
  }
}