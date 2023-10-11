export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center rounded-lg bg-customRed/70 font-title">
        <h1 className="mt-48 bg-customRed/70 text-center text-6xl text-customCream">
          Keep your journal, one memory at a time.
        </h1>
        <div className="m-16 text-center font-title text-white">
          <h2 className="text-4xl">Features</h2>
          <ul className="my-4 space-y-4 text-2xl">
            <li>
              &#x2022; Tons of daily prompts so you never get stumped what to
              write about
            </li>
            <li>
              &#x2022; Keep your journal private or share with friends and
              family
            </li>
            <li>
              &#x2022; All the little memories you want to keep in one
              convenient location
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
