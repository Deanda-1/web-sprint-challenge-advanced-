import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'
export function Quiz(props) {
  useEffect(() => {
    !props.quiz && props.fetchQuiz()
  }, [])
  console.log(props);
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
          <h2>What is a closure</h2>
          
          <div id="quizAnswers">
            <div className="answer selected">
              A function 
              <button>
                SELECTED
              </button>
            </div>

            <div className="answer">
              An elephant
              <button>
                select 
              </button>
            </div>
          </div>

          <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    quiz: state.quiz 
  }
}

export default connect(mapStateToProps, actions)(Quiz)