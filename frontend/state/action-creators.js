/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios"
import { useEffect } from "react"
import { connect } from "react-redux"

export const MOVE_CLOCKWISE = 'MOVE_CLOCKWISE'
export const MOVE_COUNTERCLOCKWISE = 'MOVE_COUNTERCLOCKWISE'
export const SET_QUIZ_INTO_STATE = 'SET_QUIZ_INTO_STATE'
export const SET_SELECTED_ANSWER = 'SET_SELECTED_ANSWER'
export const SET_INFO_MESSAGE = 'SET_INFO_MESSAGE'
export const INPUT_CHANGE = 'INPUT_CHANGE'
export const RESET_FORM = 'RESET_FORM'
export const UPDAT_QUIZ = 'UPDAT_QUIZ'
export const SET_ANSWER_STATE = 'SET_ANSWER_STATE'
export const SUBMIT = 'SUBMIT'
export const TEST_PASSED = 'TEST_PASSED'
export const TURN_OFF = 'TURN_OFF'
export const TURN_OFF2 = 'TURN_OFF2'
export const SUBMIT_ON = 'SUBMIT_ON'

// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise() {
  return ({ type: MOVE_CLOCKWISE})
 }

export function moveCounterClockwise() {
  return ({ type: MOVE_COUNTERCLOCKWISE})
 }

export function selectAnswer(ID) { 
  return ({ type: SET_SELECTED_ANSWER, payload: id })
}

export function setMessage(message) {
  return ({ type: SET_INFO_MESSAGE, payload: message })
 }

export function setQuiz() {
  return ({ type: SET_QUIZ_INTO_STATE})
 }

export function inputChange(input, id, newTrueAnswer, newQuestion, newFalseAnswer ) {
  return ({ type: INPUT_CHANGE, payload: input, payload2: id, payload3: newTrueAvswer, payload4: newQuestion, payload5: newFalseAnswer })
 }

export const resetForm = (newQuestion, newTrueAnswer, newFalseAnswer) => dispatch => {
  axios.post("http://localhost:9000/api/quiz/new", { "question_text": newQuestion, "true_answer_text": newTrueAnswer, "false_answer_text": newFalseAnswer })
  .then((res) => {
    const  message = `Congrats: "${res.data.question}" is a great question!`
    dispatch(setMessage(message))
  })
  .catch(err => console.log(err))
  dispatch(reset())
  const set = () => {return ({ type: RESET_FORM })}
 }
  
 export const buttonOff = () => {
  return ({ type: BUTTON_OFF })
 }

 
 

// ❗ Async action creators
export const fetchQuiz = () => dispatch => {
  dispatch(setQuiz())
  axios.get("http://localhost:9000/api/quiz/next")
  .then(res => { dispatch(updateQuiz(res.data.answers[0].text, res.data.answers[1].text, res.data.question, res.data.answers[0].answer_id, res.data.answers[1].answer_id, res.data.quiz_id)) })
  .catch(err => console.log(err))
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }

  export const updateQuiz = (answer1, answer2, question, answer1id, answer2id, quizid) => {
    return ({ type: UPDATE_QUIZ, payload: answer1, payload2: answer2, payload3: question, payload4: answer1id, payload5: answer2id, payload6: quizid })
  }

export const postAnswer = (initialSelectedAnswerStatea, initialSelectedAnswerStateb, quizid, answerid, answerid2) => dispatch => {
    if (initialSelectedAnswerStatea === "SELECTED") {
      axios.post("http://localhost:9000/api/quiz/answer", { "quiz_id": quizid, "answer_id": answerid })
      .then(res => {
        const message = `Congrats: "${res.data.question}" is a great question!`
        dispatch(setMessage(res.data.message));
        dispatch(addtodata(message))
      })
      .catch(err => console.log(err))
    }
    if (initialSelectedAnswerStateb === "SELECTED") {
      axios.post("http://localhost:9000/api/quiz/answer", { "quiz_id": quizid, "answer_id": answerid2 })
      .then(res => {
        const message2 = `Congrats: "${res.data.question}" is a great question!`
        dispatch(setMessage(res.data.message));
        dispatch(addtodata(message2))
      })
      .catch(err => console.log(err))
    }
} 
  
const addtodata = (res) => {
  return ({ type: TEST_PASSED, payload: res })
}

export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state

export const submitButton = () => {
  return ({ type: SUBMIT })
}

export const turnoffthemessage = () => {
  return ({ type: TURN_OFF})
}

export const turnoffthemessage2 = () => {
  return ({ type: TURN_OFF2 })
}

export function submitO () {
  return ({ type: SUBMIT_ON })
}