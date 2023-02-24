import React from "react";

type ButtonProps = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function Button(props: ButtonProps) {
      return <button onClick={props.onClick} className='bg-green-600 rounded-lg py-3 px-5 hover:bg-green-800'>Calculate</button>
}