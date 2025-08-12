import type { Dispatch, SetStateAction } from "react";
import { tipOptions } from "../data/db";

type TipPercentageFormProps = {
  setTip: Dispatch<SetStateAction<number>>;
  tip: number;
};

export default function TipPercentageForm({ setTip, tip }: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form action="">
        {tipOptions.map((option) => (
          <div key={option.id} className="flex items-center gap-2">
            <label htmlFor={option.id} className="cursor-pointer">
              {option.label}
            </label>
            <input
              type="radio"
              name="option"
              id={option.id}
              value={option.value}
              className="cursor-pointer"
              onChange={(e) => setTip(+e.target.value)}
              checked={tip === option.value}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
