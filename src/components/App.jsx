import React from "react";
import Feedback from "./Feedback";



export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
<Feedback initialvalue={0}/>


    </div>
  );
};



