function colorPicker(color) {
  if (color == 'green') return 'bg-green-200';
  if (color == 'orange') return 'bg-orange-200';
  if (color == 'blue') return 'bg-blue-300';
  return 'bg-yellow-200';
}

function Button({ button, color }) {
  const chosenColor = colorPicker(color);
  const buttonClass = `hover:bg-yellow-500 py-2 border w-35 rounded ${chosenColor}`;

  return (
    <>
      <button className={buttonClass}>{button}</button>
    </>
  );
}
export default Button;
