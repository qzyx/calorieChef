import { ReactNode } from "react";

export default function InputBox({
  children,
  valueMin,
  valueMax,
  onMinChange,
  onMaxChange,
  textColor = "text-primary",
}: {
  children: ReactNode;
  valueMin: number;
  valueMax: number;
  onMinChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMaxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textColor: string;
}) {
  return (
    <div className="flex justify-between">
      <label className={`text-background font-joti ${textColor}`}>
        {children}
      </label>
      <div className="flex gap-15 mx-10">
        <input
          value={valueMin ? valueMin : ""}
          onChange={(e) => onMinChange(e)}
          type="number"
          placeholder="Min"
          className="text-background  font-joti rounded-md w-16 text-center focus:outline-none p-2 bg-secondary"
        ></input>
        <input
          value={valueMax ? valueMax : ""}
          onChange={(e) => onMaxChange(e)}
          type="number"
          placeholder="Max"
          className="text-background  font-joti rounded-md w-16 text-center focus:outline-none p-2 bg-secondary"
        ></input>
      </div>
    </div>
  );
}
