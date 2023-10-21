import React, { useState } from "react";
import { categories } from "../constants/categories";

type Props = {};

export default function SelectionSorter({}: Props) {
  const [category, setCategory] = useState("");

  return (
    <div>
      {" "}
      <select
        className="mb-4 w-full rounded border p-2"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Sort by most recent</option>
        <option>Sort by oldest first</option>
        <option disabled>─── Sort by category: ───</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
