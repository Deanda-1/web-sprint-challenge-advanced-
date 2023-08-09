/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/action-creators';

import * as yup from 'yup';

const formSchema = yup.object().shape({
  newQuestion: yup.string().min(2).trim().required('Question is required'),
  newTrueAnswer: yup.string().min(2).trim().required('True answer is required'),
  newFalseAnswer: yup.string().min(2).trim().required('False answer is required'),
});

export function Form(props) {
  const { resetForm, inputChange, postQuiz } = props;

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [errors, setErrors] = useState({
    newQuestion: '',
    newTrueAnswer: '',
    newFalseAnswer: '',  
  });

  const validateChange = (evt) => {
    yup.reach(formSchema, evt.target.name)
    .validate(evt.target.value)
    .then((res) => {
      console.log(res);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [evt.target.name]: errors.errors[0],    
      }));
    });
  };

  const onChangeHandle = (evt) => {
    const {id, value} = evt.target
    inputChange({id, value});
    // validateChange(evt);
  };

  const formRequirementsMet = () => {
    if (
      props.form.newQuestion.trim().length > 1 &&
      props.form.newTrueAnswer.trim().length > 1 &&
      props.form.newFalseAnswer.trim().length > 1
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

 

  const isDisabledHandler = () => {
    return Object.values(props.form).some(value => !value.trim().length)
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    resetForm();
    const newQuiz = {
      question_text: props.form.newQuestion,
      true_answer_text: props.form.newTrueAnswer,
      false_answer_text: props.form.newFalseAnswer,
    };
    postQuiz(newQuiz);
  };

  return (
    <form id='form' onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input
      maxLength={50}
      onChange={onChangeHandle}
      name='newQuestion'
      value={props.form.newQuestion}
      id='newQuestion'
      placeholder='Enter question'
      />

      {errors.newQuestion && <p>{errors.newQuestion}</p>}

      <input 
      maxLength={50}
      onChange={onChangeHandle}
      name='newTrueAnswer'
      value={props.form.newTrueAnswer}
      id='newTrueAnswer'
      placeholder='Enter true answer'
      />

      {errors.newTrueAnswer && <p>{errors.newTrueAnswer}</p>}

      <input 
      maxLength={50}
      onChange={onChangeHandle}
      name='newFalseAnswer'
      value={props.form.newFalseAnswer}
      id='newFalseAnswer'
      placeholder='Enter false answer'
      />

      {errors.newFalseAnswer && <p>{errors.newFalseAnswer}</p>}

      <button 
      id='submitNewQuizBtn'
      disabled={isDisabledHandler()}>
        Submit new quiz 
      </button>
    </form>

  );
}

export default connect((state) => state, actionCreators)(Form);