import React from "react";

function ButtonIncrement(props) {
  
    return (
      <button style={{ marginLeft: '.5rem'}} onClick={props.onClickFunc}>
      <img src='/plus.png' width={14} height={14} />
      </button>
    )
 }
 export default ButtonIncrement;