import React from 'react'
import { BsCircle, BsCheck } from 'react-icons/bs';

const Tasks = ({todos}) => {
  return todos.map((todo) => <BsCheck className='icon-tick' />);
}

export default Tasks