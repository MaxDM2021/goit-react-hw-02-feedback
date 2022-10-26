import React from "react";

const Bottoms =({onIncrementGood, onIncrementNeutral, onIncrementBad,}) => (
    <div className="Counter__controls">
    <button type="button" onClick={onIncrementGood}>
      Good
    </button>
    <button type="button" onClick={onIncrementNeutral}>
      Neutral
    </button>
    <button type="button" onClick={onIncrementBad }>
      Bad
    </button>
  </div>
)

export default Bottoms



