import { useEffect, useState, useCallback } from 'react';

const ScrollProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  // Memoize scroll handler for better performance
  const handleScroll = useCallback(() => {
    const calculateScroll = () => {
      const winScroll = window.pageYOffset || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      // Ensure scroll progress reaches 100% at bottom
      const scrolled = Math.min(100, Math.max(0, (winScroll / height) * 100));
      
      // Round to 2 decimal places for smoother animation
      setScrollWidth(Math.round(scrolled * 100) / 100);
    };

    // Use RAF for optimal performance
    requestAnimationFrame(calculateScroll);
  }, []);

  useEffect(() => {
    // Initial calculation
    handleScroll();
    
    // Throttled scroll listener
    let timeoutId = null;
    const throttledScroll = () => {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 16); // ~60fps
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
      <div 
        className="h-full bg-red-600 transition-[width] duration-150 ease-out"
        style={{ 
          width: `${scrollWidth}%`,
          transform: 'translateZ(0)',
          willChange: 'width',
          backfaceVisibility: 'hidden'
        }}
      />
    </div>
  );
};

export default ScrollProgress;