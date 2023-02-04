import React from "react";

export function delay(func, time) {
  return setTimeout(() => {
    func();
  }, time);
}
