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
  return ({ type:  })
 }

export function moveCounterClockwise() {
  return ({ type: })
 }

export function selectAnswer() { 
  return ({ type: })
}

export function setMessage() {
  return ({ type: })
 }

export function setQuiz() {
  return ({ type: })
 }

export function inputChange() {
  return ({ type: })
 }

export const resetForm() {
  return ({ type: })
 }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
