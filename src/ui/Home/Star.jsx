export default function Star({ position, onSetMousePosition, onSetRating }) {
  return (
    <img
      src="star-inactive.svg"
      className="w-12 cursor-pointer"
      onMouseOver={() => onSetMousePosition(position)}
      onMouseOut={() => onSetMousePosition(0)}
      onClick={() => onSetRating(position)}
    />
  );
}
