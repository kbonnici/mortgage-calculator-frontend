import "./App.css";
import { useState } from "react";
import Form from "./components/form/Form";
import Heading from "./components/header/Header";
import ResultDisplay from "./components/resultDisplay/ResultDisplay";

function App() {
  const [monthlyPayment, setMonthlyPayment] = useState<number | string>("");

  return (
    <>
      <Heading />
      <Form
        monthlyPayment={monthlyPayment}
        setMonthlyPayment={setMonthlyPayment}
      />
      <ResultDisplay monthlyPayment={monthlyPayment} />
    </>
  );
}

export default App;
