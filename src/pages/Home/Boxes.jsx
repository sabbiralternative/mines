import { useState } from "react";
import images from "../../assets/images";

const Boxes = ({ isBetPlaced }) => {
  const boxArray = Array.from({ length: 25 }, (_, i) => ({
    name: `box${i + 1}`,
    isBlue: false,
  }));
  const [boxes, setBoxes] = useState(boxArray);

  const handleBoxClick = (box) => {
    if (isBetPlaced) {
      const findBoxAndChange = boxes?.map((boxObj) => ({
        ...boxObj,
        isBlue: box?.name === boxObj.name ? true : boxObj?.isBlue,
      }));
      setBoxes(findBoxAndChange);
    }
  };

  return (
    <div
      className={`grid relative items-center transition-all duration-500 bg-zinc-800 justify-center grid-cols-5 gap-0.5 p-0.5 border rounded border-zinc-700  ${
        isBetPlaced ? "border-glow w-[90%] lg:w-4/5" : "w-4/5"
      }`}
    >
      {boxes?.map((box) => {
        return (
          <div
            onClick={() => handleBoxClick(box)}
            key={box.name}
            className={`w-full aspect-square relative flex items-center animate__animated justify-center rounded-sm  opacity-100 ${
              box.isBlue ? "bg-sky-500/30" : "bg-zinc-700"
            }`}
          >
            <div className="w-[150%] h-[150%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div
                className="flex items-center justify-center"
                style={{ width: "100%", height: "100%" }}
              >
                {/* <canvas
                  style={{
                    verticalAlign: "top",
                    width: "91px",
                    height: "91px",
                  }}
                  width={273}
                  height={273}
                /> */}
                {box.isBlue && (
                  <img
                    className="w-[40px] lg:w-[50px] h-[40px] lg:h-[50px]"
                    src={images.diamond}
                    alt=""
                  />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Boxes;
