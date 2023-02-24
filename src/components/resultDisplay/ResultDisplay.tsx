import { useEffect, useState } from "react";

type ResultDisplayProps = {
    monthlyPayment: number | string;
}
export default function ResultDisplay(props: ResultDisplayProps) {
    const {monthlyPayment} = props;
    const [msg, setMsg] = useState("");

    useEffect(()=>{
        if(typeof monthlyPayment === 'string'){
            if(monthlyPayment !== '') setMsg(`Error: ${monthlyPayment}`)
        }else{
            setMsg(`Monthly Payment: ${monthlyPayment}`)
        }
    }, [monthlyPayment])

    return (
        <div>
            {msg}
        </div>
    )
}