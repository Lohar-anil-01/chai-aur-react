function ColorButton({ color, textColor = "white", setColor }) {
  return (
    <button
      onClick={() => setColor(color)}
      className="outline-none px-4 py-1 rounded-full shadow-lg"
      style={{ backgroundColor: color, color: textColor }}
    >
      {color}
    </button>
  );
}

export default ColorButton;
