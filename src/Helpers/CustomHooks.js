import { useState, useEffect, useRef } from "react";

export function useToggle(initialValue) {
  const [state, setState] = useState(initialValue);

  const toggleState = () => setState(state => !state);
  return [state, toggleState];
}
// ------------------------------------------------
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

// ------------------------------------------------
export function useGenerateText(initialValue, array) {
  const [usedIndex, setUsedIndex] = useState(initialValue);
  const [text, setText] = useState("");
  array.length < 10 && console.log(array);
  const textGenerator = () => {
    let filteredTexts = array.filter(
      (text, index) => !usedIndex.includes(index)
    );

    const randomIndex = Math.floor(Math.random() * filteredTexts.length);

    filteredTexts.length > 1
      ? array.map(
          (text, index) =>
            text === filteredTexts[randomIndex] &&
            setUsedIndex([...usedIndex, index])
        )
      : setUsedIndex([]);

    setText(filteredTexts[randomIndex]);
  };
  return [text, textGenerator, usedIndex];
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

// export function useTimeout(callback, delay) {
//   // Creating a ref
//   const savedCallback = useRef();

//   // To remember the latest callback .
//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   // Setting and clearing up a timeout
//   useEffect(() => {
//     const func = () => {
//       savedCallback.current();
//     };
//     if (delay !== null) {
//       let id = setTimeout(func, delay);
//       return () => clearTimeout(id);
//     }
//   }, [delay]);
// }
