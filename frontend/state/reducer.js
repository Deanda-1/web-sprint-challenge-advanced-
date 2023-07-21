import * as types from "./action-types"
// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case types.MOVE_CLOCKWISE: {
      const nextIndex = state + 1
      return nextIndex > 5 ? 0 : nextIndex
    }
    case types.MOVE_COUNTERCLOCKWISE: {
      const nextIndex = state - 1
      return nextIndex < 0 ? 5 : nextIndex
    }
    default:
      return state
  }
}

const initialQuizState = null
function quiz(state = initialQuizState) {
  return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })