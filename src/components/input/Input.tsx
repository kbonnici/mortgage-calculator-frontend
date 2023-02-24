import React from "react";

type InputProps = {
    min: number;
    max: number;
    step: number;
    label: string;
    value: number;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputProps) {
    return (
        <div className="p-5 flex-1 basis-1/3">
            <label> 
                <div className="text-sm">{props.label}</div>
                <input 
                value={props.value}
                onKeyDown={(e)=>{
                    if (e.code === 'Minus') e.preventDefault();
                }} 
                onChange={props.onChange}
                max={props.max} 
                min={props.min} 
                step={props.step} 
                type="number" 
                className="text-center rounded-md py-1">
                </input>
            </label>
        </div>
    )
}