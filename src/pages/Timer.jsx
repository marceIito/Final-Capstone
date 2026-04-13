import Button from './Components/Button.jsx';
import Quote from './Components/Quote.jsx';
function Timer() {
  return (
  <>
  <div className="font-bold text-2xl">SOBRIETY TIMER</div>
 <div className= "mt-5 text-black text-xl mx-3 "> [user] you have been sober for ___ amount of days
 </div>
 <div className="text-xs">
 <Button  button="Change time" color="blue" />
 <p>(both are place holder for now/\ \/)
   </p>
 </div>
 <div className="text-3xl">3 Years
 <p> 8 Months</p>
 <p> 14 days</p>
 <p>30 Minutes</p>
 <p>and</p>
 <p>19 seconds</p>
</div>  
<div className="text-xl mb-20 mt-20">
          <Quote
            myQuote="Success can only be seen as such by those aware of the struggle"
            quoteAuthor="Melo"
          />
        </div>
 </>
  );
}
  
export default Timer;