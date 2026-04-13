import Button from './Components/Button.jsx';
function Profile() {
  return( 
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">
        Long Prompt
      </h1>
      <div className="mx-3 text-3xfont-bold text-violet-700">
In a world where the color of your grave is dependant on the life you lived, how much of  a diffrence would being sober make? Do you think dying while under the influence would change the color? Would being sober make the color lighter or change it completely? What color do you hope your grave would be?      </div>
      <input
        type="text"
        placeholder="Self reflection at its finest..."
        className="w-full max-w-md bg-gray-100 border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
      />
       <div className="text-xl text-black mt-40">
          
          <Button button="New Prompt" />
        </div>
    </div>

      );
      
}




export default Profile;
