import {
    FaMoon,
    FaSun,
  } from 'react-icons/fa';

import useDarkMode from '../hooks/useDarkMode';  

  const TopNav = () => {
    return (
      <div className='top-navigation'>
        <Title />
        <ThemeIcon />
      </div>
    );
  };
  
  const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <span onClick={handleMode}>
        {darkTheme ? (
          <FaSun size='24' className='top-navigation-icon' />
        ) : (
          <FaMoon size='24' className='top-navigation-icon' />
        )}
      </span>
    );
  };

  const Title = () => <h5 className='title-text'>Manisha - tailwind-css -demo </h5>;
  
  export default TopNav;