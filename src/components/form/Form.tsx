import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import Dropdown from "../dropdown/Dropdown";
import Input from "../input/Input";
import constants from "../../constants";
import generateAmortization, { generateAmortizationPeriodOptions } from "../../utils/generateAmortization";


export default function Form()  {
    const [price, setPrice] = useState(0);
    const [downPayment, setDownPayment] = useState(0)
    const [amortizationPeriod, setAmortizationPeriod] = useState(5)
    const [paymentSchedule, setPaymentSchedule] = useState(constants.ACCELERATED.value)
    const [annualInterestRate, setAnnualInterestRate] = useState(0)

    const amortizationPeriodOptions = generateAmortizationPeriodOptions();

    return (
        <form>
            <div className="flex justify-center items-center mb-8">

                <div className="w-3/5 gap-1 flex flex-wrap flex-row items-center justify-center">
                    <Input 
                        onChange={(e)=> setPrice(parseFloat(e.currentTarget.value))} 
                        value={price} 
                        max={1000000000000} 
                        min={0} 
                        step={1000} 
                        label="Price ($)"
                    />
                    <Input 
                        onChange={(e)=> setDownPayment(parseFloat(e.currentTarget.value))} 
                        value={downPayment} 
                        max={1000000000000} 
                        min={0} 
                        step={1000} 
                        label="Down Payment ($)"
                    />
                    <Dropdown 
                        onChange={(e)=> setAmortizationPeriod(parseFloat(e.currentTarget.value))} 
                        label="Amortization Period" 
                        options={amortizationPeriodOptions}
                    />
                    <Dropdown 
                        onChange={(e)=> setPaymentSchedule(parseFloat(e.currentTarget.value))} 
                        label="Payment Schedule" 
                        options={[
                            constants.ACCELERATED,
                            constants.BIWEEKLY,
                            constants.MONTHLY
                        ]}
                    />
                    <Input 
                        onChange={(e)=> setAnnualInterestRate(parseFloat(e.currentTarget.value))} 
                        value={annualInterestRate} 
                        max={99.9} 
                        min={0.01} 
                        step={0.01} 
                        label="Annual Interest Rate (%)"
                    />
                </div>
            </div>
            <Button onClick={(e)=> {e.preventDefault();}}/>
        </form>
    )
}