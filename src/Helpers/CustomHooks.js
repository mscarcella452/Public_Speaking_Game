import React, { useState, useEffect, useRef } from "react";

export function useToggle(initialValue) {
  const [state, setState] = useState(initialValue);

  const toggleState = () => setState(state => !state);
  return [state, toggleState];
}

// export const useDidMountEffect = (func, deps) => {
//   const didMount = useRef(false);

//   useEffect(() => {
//     if (didMount.current) {
//       func();
//     } else {
//       didMount.current = true;
//     }
//   }, deps);
// };

export function useTimeout(callback, delay) {
  // Creating a ref
  const savedCallback = useRef();

  // To remember the latest callback .
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Setting and clearing up a timeout
  useEffect(() => {
    const func = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      let id = setTimeout(func, delay);
      return () => clearTimeout(id);
    }
  }, [delay]);
}
export function useInterval(callback, delay) {
  // Creating a ref
  const savedCallback = useRef();

  // To remember the latest callback .
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // combining the setInterval and
  //clearInterval methods based on delay.
  useEffect(() => {
    const func = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      let id = setInterval(func, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
