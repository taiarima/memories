import Memory from "../components/Memory";
import NavBar from "../components/NavBar";
import AddMemModal from "../components/AddMemModal";
import { useState } from "react";

function Demo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    {
      id: 4,
      categoryEmoji: "🌅",
      entryText: "Watched the sunset at Crystal Beach with a cup of hot cocoa.",
      date: "27 AUG 2023",
    },
    {
      id: 5,
      categoryEmoji: "📖",
      entryText:
        "Finished reading 'The Great Gatsby' at my favorite coffee shop, Bean Brew.",
      date: "26 AUG 2023",
    },
    {
      id: 6,
      categoryEmoji: "🚴",
      entryText: "Cycled through Pine Ridge Trails, felt the cool breeze.",
      date: "25 AUG 2023",
    },
    {
      id: 7,
      categoryEmoji: "🎥",
      entryText: "Watched 'Inception' at the Starlight Drive-in with friends.",
      date: "24 AUG 2023",
    },
    {
      id: 8,
      categoryEmoji: "🍣",
      entryText: "Dined at Sushi Palace and tried their signature Dragon Roll.",
      date: "23 AUG 2023",
    },
    {
      id: 9,
      categoryEmoji: "🏞️",
      entryText: "Visited the serene Whispering Pines National Park.",
      date: "22 AUG 2023",
    },
    {
      id: 10,
      categoryEmoji: "🎨",
      entryText:
        "Attended an art exhibition at the City Gallery featuring modern sculptures.",
      date: "21 AUG 2023",
    },
    {
      id: 11,
      categoryEmoji: "🐶",
      entryText: "Took my dog, Max, to the local dog park and played fetch.",
      date: "20 AUG 2023",
    },
    {
      id: 12,
      categoryEmoji: "🍕",
      entryText:
        "Had a pizza night with family, trying the new Mediterranean flavor from Pizza Corner.",
      date: "19 AUG 2023",
    },
    {
      id: 13,
      categoryEmoji: "🌌",
      entryText:
        "Stargazed at the observatory and spotted the Orion constellation.",
      date: "18 AUG 2023",
    },
    {
      id: 14,
      categoryEmoji: "🎤",
      entryText: "Went to see Snoop Dogg at the Paramount Theater.",
      date: "17 AUG 2023",
    },
    {
      id: 15,
      categoryEmoji: "🌺",
      entryText: "Received a bouquet of tulips from a secret admirer.",
      date: "16 AUG 2023",
    },
    {
      id: 16,
      categoryEmoji: "🎁",
      entryText:
        "Celebrated my friend, Lisa's, birthday at the rooftop lounge.",
      date: "15 AUG 2023",
    },
  ];

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="">
      <NavBar />
      <h1 className="font-title text-white text-6xl text-center m-8">
        Demo Page
      </h1>
      <div className="relative flex flex-wrap m-4 justify-center bg-customRed bg-opacity-70">
        <button
          className="transform -translate-y-full bg-blue-500 text-white p-2 rounded absolute"
          onClick={() => setIsModalOpen(true)}
        >
          Add Memory
        </button>
        {demoData.map((memory) => (
          <Memory memory={memory} key={memory.id} />
        ))}
      </div>
      {isModalOpen && <AddMemModal closeModal={closeModal} />}
    </div>
  );
}
export default Demo;
