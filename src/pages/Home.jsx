import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <div className="h-48 m-20 rounded-lg flex flex-col justify-center font-title">
        <h1 className="text-center text-6xl text-customCream">
          Never forget the memories that matter.
        </h1>
      </div>
    </>
  );
}

export default Home;
