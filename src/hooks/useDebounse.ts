import { useCallback, useRef } from 'react';

const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
  const timer: any = useRef();

  const debouncedCallback = useCallback(
    (...args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debouncedCallback;
};

export default useDebounce;
