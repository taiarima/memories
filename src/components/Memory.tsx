import React from "react";

type Props = {
  memory: {
    categoryEmoji: string;
    entryText: string;
    date: string;
  };
};

export default function Memory({ memory }: Props) {
  return (
    <div className="m-4 flex cursor-pointer flex-col justify-between border border-l-customCream bg-customTeal p-2 text-center font-title">
      <span className="m-2 text-2xl">{memory.categoryEmoji}</span>
      <h1 className="m-4 text-2xl text-customGray">{memory.entryText}</h1>
      <span>{memory.date}</span>
    </div>
  );
}
