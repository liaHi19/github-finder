import React from 'react';
import spinner from './assets/spinner.gif';

const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img width={120} className="mx-auto text-center" src={spinner} alt="Loading" />
    </div>
  )
}

export default Spinner
