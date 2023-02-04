import React, { useState, useEffect, useRef } from "react";

export function useToggle(initialValue) {
  const [state, setState] = useState(initialValue);

  const toggleState = () => setState(state => !state);
  return [state, toggleState];
}

export const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      func();
    } else {
      didMount.current = true;
    }
  }, deps);
};
