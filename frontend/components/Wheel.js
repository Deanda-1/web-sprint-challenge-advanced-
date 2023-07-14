import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { turnoffthemessage2, moveClockwise, moveCounterClockwise } from '../state/action-creators'

function Wheel(props) {
  const { turnoffthemessage2, wheelState, moveClockwise, moveCounterClockwise } = props

  useEffect(()=>{
    turnoffthemessage2()
  },[])

  const handleclockwise = () => {
    moveClockwise();
  }

  return (
    <div id="wrapper">
      <div id="wheel">

          {wheelState === 0 ? <div className="cog active" style={{ "--i": 0 }}>B</div>: <div className="cog" style={{ "--i": 0 }}></div>}
          {wheelState === 1 ? <div className="cog active" style={{ "--i": 1 }}>B</div>: <div className="cog" style={{ "--i": 1 }}></div>}
          {wheelState === 2 ? <div className="cog active" style={{ "--i": 2 }}>B</div>: <div className="cog" style={{ "--i": 2 }}></div>}
          {wheelState === 3 ? <div className="cog active" style={{ "--i": 3 }}>B</div>: <div className="cog" style={{ "--i": 3 }}></div>}
          {wheelState === 4 ? <div className="cog active" style={{ "--i": 4 }}>B</div>: <div className="cog" style={{ "--i": 4 }}></div>}
          {wheelState === 5 ? <div className="cog active" style={{ "--i": 5 }}>B</div>: <div className="cog" style={{ "--i": 5 }}></div>}

      </div>
      <div id="keypad">
        <button onClick={handlecounterclock} id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={handleclockwise} id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps=(state) => {
  return {
    wheelState : state.wheel.initialWheelState
  }
}

export default connect(mapStateToProps, {turnoffthemessage2, moveClockwise, moveCounterClockwise})(Wheel)