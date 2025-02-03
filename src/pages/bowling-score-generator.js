import { element } from 'prop-types'
import React, { useState } from 'react'
import s from 'styled-components'

const BowlingScoreGenerator = () => {
  const [score, setScore] = useState([])
  const [frame, setFrame] = useState(-1)
  const [cumScore, setCumScore] = useState([])

  const generateNewScore = () => {
    setFrame(-1)
    const strikeProb = 0.4
    const spareProb = 0.75
    const spareNumProbs = [
      0.01, 0.02, 0.03, 0.05, 0.075, 0.1, 0.2, 0.33, 0.66, 1
    ]
    let newScore = []
    for (let i = 0; i < 12; i++) {
      const strikePNum = Math.random()
      if (strikePNum < strikeProb) {
        newScore.push(['X'])
        continue
      }
      let spareNum = 0
      const spareFPNum = Math.random()
      for (let j = 0; j < 10; j++) {
        if (spareFPNum < spareNumProbs[j]) {
          spareNum = j 
          break 
        }
      }
      const spareSPNum = Math.random()
      if (spareNum === 0) {
        spareNum = '-'
      }
      if (spareSPNum < spareProb) {
        newScore.push([spareNum, '/'])
      } else {
        newScore.push([spareNum, '-'])
      }
    }

    let lastFrame = []
    const frameTen = newScore[9]
    const frameEleven = newScore[10]
    const frameTwelve = newScore[11]
    let newFrameTen = []
    newScore.pop()
    newScore.pop()
    if (frameTen.length === 2 && frameTen[1] === '-') {
      newFrameTen = frameTen
    } else if (frameTen.length === 2 && frameTen[1] === '/') {
      newFrameTen = [frameTen[0], frameTen[1], frameEleven[0]]
    } else if (frameEleven.length === 2) {
      newFrameTen = [frameTen[0], frameEleven[0], frameEleven[1]]
    } else {
      newFrameTen = [frameTen[0], frameEleven[0], frameTwelve[0]]
    }
    newScore[9] = newFrameTen
    setScore(newScore)
  }

  const showFrame = () => {
    if (frame < 9) {
      setFrame(frame + 1)
    }
  }

  const calculateScore = () => {
    let cumScore = 0
    let rolls = []
    let scoreString = ""
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < score[i].length; j++) {
        scoreString += score[i][j]
      }
    }

    for (let i = 0; i < scoreString.length; i++) {
      const char = scoreString[i];
      if (char === 'X') {
        rolls.push(10);  // Strike is 10 points
      } else if (char === '/') {
        // Spare: calculate remaining pins
        rolls.push(10 - rolls[rolls.length - 1]);
      } else if (char === '-') {
        rolls.push(0);  // Miss is 0 points
      } else {
        rolls.push(parseInt(char));  // Regular number
      }
    }
  
    // Calculate the score
    let frame = 0;
    for (let i = 0; i < 10; i++) {
      if (rolls[frame] === 10) {
        // Strike: add 10 + next two rolls
        cumScore += 10 + rolls[frame + 1] + rolls[frame + 2];
        frame++;  // Move to the next roll (strike takes 1 roll)
      } else if (rolls[frame] + rolls[frame + 1] === 10) {
        // Spare: add 10 + next roll
        cumScore += 10 + rolls[frame + 2];
        frame += 2;  // Move to the next frame
      } else {
        // Regular frame: just add the sum of the two rolls
        cumScore += rolls[frame] + rolls[frame + 1];
        frame += 2;  // Move to the next frame
      }
    }
    setCumScore(cumScore)
  }

  return (
    <div>
      <div>
        {score.map((elem, i) => (
          i <= frame && <p key={i}>{elem}</p>
        ))}
      </div>
      <button onClick={() => generateNewScore()}>Regenerate Score</button>
      <button onClick={() => showFrame()}>Show Frame</button>
      <button onClick={() => calculateScore()}>Calculate Score</button>
      <div>{cumScore}</div>
    </div>
  )
}

export default BowlingScoreGenerator