import React, { useState } from "react";
import Button from "../button/Button";
import Dropdown from "../dropdown/Dropdown";
import Input from "../input/Input";
import constants from "../../constants";
import { generateAmortizationPeriodOptions } from "../../utils/generateAmortization";

type FormProps = {
  monthlyPayment: number | string;
  setMonthlyPayment: (value: number | string) => void;
};
export default function Form(props: FormProps) {
  const [price, setPrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [amortizationPeriod, setAmortizationPeriod] = useState(5);
  const [paymentSchedule, setPaymentSchedule] = useState(
    constants.ACCELERATED.value
  );
  const [annualInterestRate, setAnnualInterestRate] = useState(0);

  const amortizationPeriodOptions = generateAmortizationPeriodOptions();

  const handleCalculate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price,
          downPayment,
          amortizationPeriod,
          paymentSchedule,
          annualInterestRate: annualInterestRate / 100,
        }),
      });

      const data: { error: string } | { monthlyPayment: number } =
        await response.json();
      if ("error" in data) props.setMonthlyPayment(data.error);
      else props.setMonthlyPayment(data.monthlyPayment);
    } catch {
      props.setMonthlyPayment("Unable to connect to server");
    }
  };

  return (
    <form>
      <div className="flex justify-center items-center mb-8">
        <div className="w-3/5 gap-1 flex flex-wrap flex-row items-center justify-center">
          <Input
            onChange={(e) => setPrice(parseFloat(e.currentTarget.value))}
            value={price}
            max={1000000000000}
            min={0}
            step={1000}
            label="Price ($)"
          />
          <Input
            onChange={(e) => setDownPayment(parseFloat(e.currentTarget.value))}
            value={downPayment}
            max={1000000000000}
            min={0}
            step={1000}
            label="Down Payment ($)"
          />
          <Dropdown
            onChange={(e) =>
              setAmortizationPeriod(parseFloat(e.currentTarget.value))
            }
            label="Amortization Period"
            options={amortizationPeriodOptions}
          />
          <Dropdown
            onChange={(e) =>
              setPaymentSchedule(parseFloat(e.currentTarget.value))
            }
            label="Payment Schedule"
            options={[
              constants.ACCELERATED,
              constants.BIWEEKLY,
              constants.MONTHLY,
            ]}
          />
          <Input
            onChange={(e) =>
              setAnnualInterestRate(parseFloat(e.currentTarget.value))
            }
            value={annualInterestRate}
            max={99.9}
            min={0.01}
            step={0.01}
            label="Annual Interest Rate (%)"
          />
        </div>
      </div>
      <Button onClick={handleCalculate} />
    </form>
  );
}
