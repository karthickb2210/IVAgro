import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Get current route path

  useEffect(() => {
    // Scroll to top whenever the path changes
    window.scrollTo(0, 0);
  }, [pathname]); // Runs every time the route changes

  return null;
};

export default ScrollToTop;