function Quote({ myQuote, quoteAuthor }) {
  return (
    <>
      <span className="text-2xl">"</span>
      <span className="text-2xl italic text-zinc-800">
        {myQuote}
      </span>
      <span className="text-2xl">"</span>
      <p className="font-bold">-{quoteAuthor}</p>
    </>
  );
}
export default Quote;