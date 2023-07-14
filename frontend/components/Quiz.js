import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { turnoffthemessage, postAnswer, submitButton, updateQuiz, fetchQuiz, setQuiz, selectAnswer, setMessage } from '../state/action-creators'
import axios from 'axios'

function Quiz(props) {
  const { turnoffthemessage, postAnswer, submitButton, submitbuttonon, updateQuiz, quizid, answer1id, answer2id, answer1, answer2, question, fetchQuiz, setMessage, initialSelectedAnswerStatea, initialSelectedAnswerStateb, initialQuizState, setQuiz, selectAnswer } = props
  const quizstate = (initialQuizState === false) {
    useEffect(()=>{
      axios.get("http://localhost:9000/api/quiz/next")
      .then(res => {updateQuiz(res.data.answers[0].text, res.data.answers[1].text, res.data.question, res.data.answers[0].answer_id, res.data.answers[1].answer_id, res.data.quiz_id);
      setQuiz();
      turnoffthemessage()})
    ,[]});
  }


const handleclick = (e) => {
  selectAnswer(e.target.id)
  submitButton()
}

const handlesubmit = (e) => {
  e.preventDefault()
  fetchQuiz()
  postAnswer(initialSelectedAnswerStatea, initialSelectedAnswerStateb, quizid, answer1id, answer2id)
  setQuiz()
}
quizstate(initial(QuizState),

return ( 
  <div id="wrapper">
    {
      initialQuizState === true ? (
        <>
        {question.length >= ? <h2>{question}</h2>:<h2>What is a closure?</h2>}
        <div id="quizAnswers">
          <div className={initialSelectedAnswerStatea === "SELECTED" ? "answer selected" : "answer"}>
            `${answer1}`
            <button onClick={handleclick} id="answera">
              {initialSelectedAnswerStatea}
            </button>
          </div>
        </div>
        <button onClickd={handlesubmit} disabled={submitbuttonon} id="submitAnswerBtn">Submit answer</button>
        </>
      ) : 'Loading next quiz...'
    }
  </div>
)
const mapStateToProps = (state) => {
  return {
    initialQuizState: state.quiz.initialQuizState,
    initialSelectedAnswerStatea: state.selectedAnswer.initialSelectedAnswerStatea,
    initialSelectedAnswerStateb: state.selectedAnswer.initialSelectedAnswerStateb,
    answer1: state.updateQuiz.answer1,
    answer2: state.updateQuiz.answer2,
    question: state.updateQuiz.question,
    answer1id: state.updateQuiz.answer1id,
    answer2id: state.updateQuiz.answer2id,
    quizid: state.updateQuiz.quizid,
    submitbuttonon: state.selectedAnswer.submitButtonon
  }
}
export default connect(matStateToProps, {turnoffthemessage, postAnswer, submitButton, updateQuiz, setMessage, setQuiz, selectAnswer, fedtchquiz ) (Quiz)})