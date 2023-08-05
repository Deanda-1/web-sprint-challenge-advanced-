/* eslint-disable no-unused-vars */
import axios from "axios"
import {SET_QUIZ_INTO_STATE, SET_INFO_MESSAGE, SET_SELECTED_ANSWER,MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, INPUT_CHANGE, RESET_FORM } from "./action-types"
// You don't need to add extra action creators to achieve MVP
export function moveClockwise(clockwise) {
  return ({type: MOVE_CLOCKWISE, payload: clockwise})
 }

export function moveCounterClockwise(counterClockwise) {
  return ({type: MOVE_COUNTERCLOCKWISE, payload: counterClockwise})
 }

export function selectAnswer(answer) {
  return({type:SET_SELECTED_ANSWER, payload: answer})
 }

export function setMessage(message) {
  return ({ type:SET_INFO_MESSAGE, payload: message })
 }

export function setQuiz(quiz) { 
  return ({type: SET_QUIZ_INTO_STATE, payload: quiz})
}

export function inputChange(question) {
  return ({type: INPUT_CHANGE, payload: question})
 }

export function resetForm() {
  return ({type: RESET_FORM})
 }

// Async action creators
export function fetchQuiz() {
  return function(dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    //  Dispatch an action to send the obtained quiz to its state
    dispatch(setQuiz(null))
    axios.get('http://localhost:9000/api/quiz/next')
      .then(res => {
        dispatch(setQuiz(res.data))
      })
      .catch(err => {
        const errToDisplay = err.response ? err.response.data.message : err.message
        dispatch(setMessage(errToDisplay))
      })
  }
}
export function postAnswer(answer) {
  return function (dispatch) {
    // On successful POST:
    //  Dispatch an action to reset the selected answer state
    //  Dispatch an action to set the server message to state
    //  Dispatch the fetching of the next quiz
    axios.post('http://localhost:9000/api/quiz/answer', answer)
    .then(({data}) => dispatch({type:SET_INFO_MESSAGE, payload:data.message}))
  }
}
export function postQuiz(quiz) {
  console.log(quiz);
  return function (dispatch) {
    // On successful POST:
    //  Dispatch the correct message to the appropriate state
    //  Dispatch the resetting of the form
    axios.post('http://localhost:9000/api/quiz/new', quiz)
    .then(({data}) => dispatch({type: SET_INFO_MESSAGE, payload: `Congrats: "${quiz.question_text}: is a great question!`}))
    .catch(err => dispatch({type: SET_INFO_MESSAGE, payload: 'ERROR POSTING NEW QUIZ'}))
  }
}
// On promise rejections, use log statements or breakpoints, and put an appropriate error message in state