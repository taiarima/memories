import React, { useState } from "react";

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

function AddMemModal() {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));

  const handleTextChange = (e) => {
    if (e.target.value.length <= 200) {
      setText(e.target.value);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black">
      <div className="bg-white p-8 rounded-lg w-1/3">
        <h1 className="text-2xl mb-4">Add Memory</h1>

        <textarea
          className="w-full p-2 border rounded mb-4"
          placeholder="Write here..."
          value={text}
          onChange={handleTextChange}
        />

        <select
          className="w-full p-2 border rounded mb-4"
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
          className="w-full p-2 border rounded mb-4"
          value={date}
          max={new Date().toISOString().substr(0, 10)}
          onChange={(e) => setDate(e.target.value)}
        />

        <button className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </div>
    </div>
  );
}

export default AddMemModal;
