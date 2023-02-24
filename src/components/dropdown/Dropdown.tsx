import React from "react";

type DropdownProps = {
  label: string;
  options: { text: string; value: number }[];
  onChange: (e: React.FormEvent<HTMLSelectElement>) => void;
};

export default function Dropdown(props: DropdownProps) {
  return (
    <div className="p-5 flex-1 basis-1/3">
      <label>
        <div className="text-sm">{props.label}</div>
        <select
          onChange={props.onChange}
          className="w-3/5 text-center text-sm py-2 rounded-md"
        >
          {props.options.map((option, idx) => {
            return (
              <option value={option.value} key={idx}>
                {option.text}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
}
