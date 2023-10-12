import React from "react";
import { useState } from "react";
import Button from "./Button";

const categories = [
  "🏋️ Fitness",
  "🎵 Music",
  "🍔 Food",
  "🌅 Scenery",
  "📖 Reading",
  "🚴 Cycling",
  "🎥 Movies",
  "🚶 Walking",
  "🏞️ Beach",
  "🎨 Art/Creativity",
  "🐶 Animals",
  "🍕 Pizza",
  "🌌 Drive",
  "🎤 Singing",
  "🌺 Natural Beauty",
  "🎁 Gift",
  "🪅 Party",
  "🍹 Drinks",
  "🛒 Shopping",
  "🎮 Gaming",
  "📊 Productivity",
  "🙏 Gratitude",
  "🗣️ Socializing",
];

type Props = {
  closeModal: () => void;
  handleAddMemory: () => void;
};

function AddMemModal({ closeModal, handleAddMemory }: Props) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));

  const handleTextChange = (e) => {
    if (e.target.value.length <= 200) {
      setText(e.target.value);
    }
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleSubmit = () => {
    console.log(category.toString().type);
    const newMemory = {
      categoryEmoji: String.fromCodePoint(category.codePointAt(0)),
      entryText: text,
      date: date,
    };
    handleAddMemory(newMemory);
    console.log("Submitting new memory");
    // show memory saved message
    closeModal();
  };

  return (
    <div
      className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackgroundClick}
    >
      <div className="rounded-lg bg-white p-8">
        <div className="relative">
          <button
            onClick={closeModal}
            className="absolute right-0 -mt-4 text-2xl"
          >
            &times;
          </button>
        </div>

        <h1 className="mb-4 text-2xl">Add Memory</h1>

        <textarea
          className="mb-4 w-full resize-none rounded border p-2"
          placeholder="Write here..."
          value={text}
          onChange={handleTextChange}
        />

        <select
          className="mb-4 w-full rounded border p-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          type="date"
          className="mb-4 w-full rounded border p-2"
          value={date}
          max={new Date().toISOString().substr(0, 10)}
          onChange={(e) => setDate(e.target.value)}
        />

        {/* <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button> */}
        <div className="flex justify-center">
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </div>
  );
}

export default AddMemModal;
