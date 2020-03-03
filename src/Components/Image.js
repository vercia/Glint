import React from 'react';

const Image = (props) => {
  return (
    <div>
      <img src={props.path} className='pic' />
    </div>
  );
};

export default Image;
