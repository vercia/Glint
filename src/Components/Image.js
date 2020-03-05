import React from 'react';

const Image = (props) => {
  return (
    <div>
      <img src={props.path} className='pic' alt='art' />
    </div>
  );
};

export default Image;
