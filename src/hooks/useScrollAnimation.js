import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const checkVisibility = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      if (isInView) {
        setIsVisible(true);
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after animation triggers to prevent re-triggering
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -10px 0px'
      }
    );

    if (ref.current) {
      // Check if element is already in view on mount
      const isAlreadyVisible = checkVisibility();
      
      // If not visible, start observing
      if (!isAlreadyVisible) {
        observer.observe(ref.current);
      }
      
      // Check multiple times to catch elements that become visible
      const timeouts = [50, 100, 200, 500, 1000, 2000].map(delay => 
        setTimeout(() => {
          if (ref.current && !isVisible) {
            checkVisibility();
          }
        }, delay)
      );
      
      return () => {
        timeouts.forEach(clearTimeout);
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.rootMargin]);

  return [ref, isVisible];
};
