import Quote from './Components/Quote.jsx';
import Button from './Components/Button.jsx';


function Home() {
  return (
    <>
      {/* <div className="bg-yellow-100"> */}
        <div className="font-bold text-black italic text-5xl mb-20 mt-10">
          What will it be today?
        </div>

        <div className="m-8 text-3xl text-black ">
          <Button button="Bitesize" />
        </div>
        <div className="text-3xl text-black">
          
          <Button button="Long Prompt" color="orange" />
        </div>
        <div className="mb-20 mt-35">
          <Quote
            myQuote=" Every day above ground is a good day"
            quoteAuthor="Scarface"
          />
        </div>
      {/* </div> */}
    </>
  );
}

export default Home;
