import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function RulesPage() {
  const nav = useNavigate();
  return (
    <>
      <div>RulesPage</div>
      <Button onClick={() => nav(-1)}>Back</Button>
    </>
  );
}
