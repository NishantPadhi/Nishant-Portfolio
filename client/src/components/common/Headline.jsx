import React from 'react';
import Divider from './Divider';

const HeadLine = ({title}) => {
  return (
    <h2 className="text-4xl font-bold headLine inline-block">
      {title}
      <Divider />
    </h2>
  );
};

export default HeadLine;
