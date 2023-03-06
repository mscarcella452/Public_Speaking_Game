import React from "react";

export function delay(func, time) {
  return setTimeout(() => {
    func();
  }, time);
}

export function checkIntermission() {
  return !storage.fullVersion && storage.topicCount >= intermisisonTrigger
    ? true
    : false;
}
