import React from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const Header = ({ theme, setTheme }) => {
  return (
    <div className='header'>
      <h1>TODO</h1>
      {theme === 'light' ? (
        <BsMoonFill
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setTheme('dark');
          }}
          size={26}
        />
      ) : (
        <BsSunFill
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setTheme('light');
          }}
          size={26}
        />
      )}
    </div>
  );
};

export default Header;
