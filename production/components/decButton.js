import React from "react";

function ButtonDecrement(props) {
  
    return (
      <button style={{ marginRight: '.5rem'}} onClick={props.onClickFunc}>
      <img src='/minus.png' width={14} height={14} />
      </button>
    )
  }
  export default ButtonDecrement;