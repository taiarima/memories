import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <div className="m-20 flex h-48 flex-col justify-center rounded-lg font-title">
        <h1 className="text-center text-6xl text-customCream">
          Keep your journal, one memory at a time.
        </h1>
      </div>
    </>
  );
}

export default Home;
