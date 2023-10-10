const demoData = [
  {
    id: 1,
    categoryEmoji: "🏋️",
    entryText: "Had an intense CrossFit session at GymFlex.",
    date: "30 AUG 2023",
  },
  {
    id: 2,
    categoryEmoji: "🎵",
    entryText:
      "Listened to 'Fly Me to the Moon' by Frank Sinatra while relaxing in the park.",
    date: "29 AUG 2023",
  },
  {
    id: 3,
    categoryEmoji: "🍔",
    entryText: "Tried the new Spicy Deluxe burger at Burger Haven.",
    date: "28 AUG 2023",
  },
];

export async function fetchMemories() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Fetching memories");
  return demoData;
}
