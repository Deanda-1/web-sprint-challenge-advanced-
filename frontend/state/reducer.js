/* eslint-disable no-unused-vars */
import * as types from "./action-types"
// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux';
import { INPUT_CHANGE, MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_INFO_MESSAGE,SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, RESET_FORM } from "./action-types";

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
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case types.SET_QUIZ_INTO_STATE:
      return action.payload
    default: 
     return state
  }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    case types.SET_SELECTED_ANSWER:
      return action.payload
    default:
      return state  
  }

}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case types.SET_INFO_MESSAGE:
      return action.payload
    default:
      return state  
  }
}

const initialFormState ={
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        [action.payload.id]: action.payload.value
      }
      case RESET_FORM:
        return initialFormState
        default:
          return state 
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form})