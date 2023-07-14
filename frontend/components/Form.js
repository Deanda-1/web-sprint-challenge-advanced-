/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import { SUBMIT_ON, turnoffthemessage2, buttonOff, inputChange, resetForm, } from '../state/action-creators'
import axios from 'axios'

function Form(props) {
  const {submitOn, showmessage, turnoffthemessage2, buttonOff, clickButton, newQuestion, newTrueAnswer, newFalseAnswer, inputChange, resetForm } = props
  useEffect(() => {
    turnoffthemessage2()
  },[])
  const handlenewquestion = (e) => {
    e.preventDefault()
    inputChange(e.target.value, e.target.id)
    turnOn()
  }
  function turnOn() {
    if(newTrueAnswer.length === 1 && newQuestion.length === 1 && newFalseAnswer === 1) {
      submitOn()
    }
  }
  const handleonSubmit = (evt) => {
    evt.preventDefault()
    resetForm(newQuestion, newTrueAnswer, newFalseAnswer)
  }
  function valid(newFalseAnswer, newTrueAnswer, newQuestion) {
    if (newFalseAnswer.trimLeft().trimRight().length >=1 && newTrueAnswer.trimLeft().trimRight().length >=1 && newQuestion.trimLeft().trimRight().length >=1 ) {
      console.log("fired")
      return false
    } else {
      return true
    }
  }
  let answer = valid(newFalseAnswer, newTrueAnswer, newQuestion)
  console.log(answer)
  return (
    <form id="form" onSubmit={handleonSubmit}>
      <h2>Create New Quiz</h2>
      <input value={newQuestion} maxLength={50} onChange={handlenewquestion} id="newQuestion" placeholder="Enter question" />
      <input value={newTrueAnswer} maxLength={50} onChange={handlenewquestion} id="newTrueAnswer" placeholder="Enter true answer" />
      <input value={newFalseAnswer} maxLength={50} onChange={handlenewquestion} id="newFalseAnswer" placeholder="Enter false answer" />
      <button disabled={answer} id="suvmitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}
const mapStateToProps = (state) => {
  return {
    newQuestion: state.form.newQuestion, 
    newTrueAnswer: state.form.newTrueAnswer,
    newFalseAnswer: state.form.newFalseAnswer,
    clickButton: state.form.clickButton,
    showmessage: state.correctAnswer.showmessage,
    clickButton: state.submitOn.clickButton
  }
}



export default connect(mapStateToProps, { submitOn, turnoffthemessage2, inputChange, resetForm, buttonOff}) (Form)
