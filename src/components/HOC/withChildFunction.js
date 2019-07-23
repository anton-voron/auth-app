import React from 'react';

const withChildFunction = (Wrapperd, fn) => {
  return (props) => {

    return(
      <Wrapperd {...props}>
        {fn}
      </Wrapperd>
    )
  }
};

export default withChildFunction;