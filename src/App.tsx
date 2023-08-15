import React from "react";
import "./App.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PageProvider from "./context/usePage";
import { Questionnaire } from "./pages/Questionnaire";

function App() {
  return (
    <PageProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Questionnaire />
      </LocalizationProvider>
    </PageProvider>
  );
}

export default App;
