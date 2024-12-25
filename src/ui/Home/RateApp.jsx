import { useState } from "react";
import Star from "./Star";

const ratings = Array.from({ length: 5 }, (v, i) => i + 1);
export default function RateApp() {
  const [mousePosition, setMousePosition] = useState(0);
  const [rating, setRating] = useState(null);

  const userRating = Array.from({ length: rating }, (v, i) => i + 1);
  return (
    <div className="call-to-action flex w-full flex-col items-center justify-center gap-4 border-t-2 bg-white px-10 py-10 md:gap-16">
      <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-montserrat text-2xl font-extrabold tracking-wider md:text-3xl">
          RATE US
        </h2>

        <span className="text-base font-semibold text-[#FF6F3C]">
          {mousePosition}
        </span>
        <div className="flex gap-2">
          {!rating &&
            ratings.map((star) => (
              <Star
                key={star}
                position={star}
                onSetMousePosition={setMousePosition}
                onSetRating={setRating}
              />
            ))}

          {rating &&
            userRating.map((star, i) => (
              <>
                <img
                  src="star-active.svg"
                  className="w-12 cursor-pointer"
                  key={i}
                />
              </>
            ))}
        </div>
        <p className="text-sm font-semibold md:text-base">
          Thanks for your feedback.
        </p>
      </div>
    </div>
  );
}
