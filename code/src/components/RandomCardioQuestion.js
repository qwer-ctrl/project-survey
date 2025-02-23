import React from 'react'

const RandomCardioQuestion = ({
  random,
  onRandomChange,
  onStepChange,
  goPrograms,
}) => {

  const presentButton = () => {
    if (random === 'no') {
      return (
        <button className="button" onClick={onStepChange}>
          Next question
        </button>
      )
    } else {
      return (
        <button className="button" onClick={goPrograms}>
          Check your cardio!
        </button>
      );
    }
  };

  return (
    <form className="form radio">
      <label tabindex='0'>
      Do you want pick a random cardio?
        <span className="radio-input">
          <input
            type="radio"
            value="no"
            onChange={() => onRandomChange('no')}
            checked={random === 'no'}
          />
          <span className="radio-text">No</span>
        </span>
      </label>
      <label>
        <span className="radio-input">
          <input
            type="radio"
            value="yes"
            onChange={() => onRandomChange('yes')}
            checked={random === 'yes'}
          />
          <span className="radio-text">Yes</span>
        </span>
      </label>
      {presentButton()}
    </form>
  )
}

export default RandomCardioQuestion;