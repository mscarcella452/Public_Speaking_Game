import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function HomePage() {
  const nav = useNavigate();
  return (
    <>
      <div>Public Speaking App</div>
      <Button onClick={() => nav("/Play")}>Play</Button>
      <Button onClick={() => nav("/Rules")}>Rules</Button>
    </>
  );
}
