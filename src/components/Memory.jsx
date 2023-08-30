function Memory({ memory }) {
  return (
    <div className="w-1/5 m-4 p-2 bg-customTeal border border-l-customCream flex flex-col text-center">
      <span className="m-2 text-2xl">{memory.categoryEmoji}</span>
      <h1 className="text-2xl text-customGray m-4">{memory.entryText}</h1>
      <span>{memory.date}</span>
    </div>
  );
}

export default Memory;
