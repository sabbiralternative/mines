import { useOrderMutation } from "../../redux/features/events/events";
import { generateRoundId } from "../../utils/generateRoundId";
import { placeGemSound } from "../../utils/sound";

const Boxes = ({ isBetPlaced, boxes, setBoxes, activeBoxCount }) => {
  const [addOrder] = useOrderMutation();
  const handleBoxClick = async (box) => {
    if (isBetPlaced) {
      placeGemSound();
      const round_id = generateRoundId();
      const payload = {
        round_id,
        type: "select_box",
        box_id: box?.id,
        box_count: activeBoxCount,
      };

      const updatedBoxes = boxes?.map((boxObj) =>
        box?.name === boxObj.name
          ? { ...boxObj, isBlue: true, showStar: true }
          : boxObj
      );
      setBoxes(updatedBoxes);

      // Hide the star after 1 seconds
      setTimeout(() => {
        const updatedAfterTimeout = updatedBoxes.map((boxObj) =>
          box?.name === boxObj.name ? { ...boxObj, showStar: false } : boxObj
        );
        setBoxes(updatedAfterTimeout);
      }, 1000);

      await addOrder(payload).unwrap();
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
            className={`w-full aspect-square relative flex items-center animate__animated justify-center rounded-sm   ${
              box.isBlue
                ? "bg-sky-500/30 pointer-events-none"
                : "bg-zinc-700 cursor-pointer"
            } ${box?.isBlue && box?.dark ? "opacity-50" : "opacity-100"}`}
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
                {/* <img
                  className={`w-[40px] lg:w-[50px] h-[40px] lg:h-[50px] transform transition-transform duration-300 ${
                    box.isBlue ? "scale-100" : "scale-0"
                  }`}
                  src={images.diamond}
                  alt=""
                /> */}

                <svg
                  className={` w-[40px] lg:w-[50px] h-[40px] lg:h-[50px]  transform transition-transform duration-300 ${
                    box.isBlue ? "scale-100" : "scale-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width={140}
                  height={137}
                  fill="none"
                  viewBox="0 0 140 137"
                >
                  <path fill="#91D8F0" d="M0 46h140l-70 91z" />
                  <path fill="#6CA1B3" d="M140 46H99.5L70 137z" />
                  <path fill="#86C8DE" d="M0 46h40.5L70 137z" />
                  <path fill="#A8DEF0" d="m0 46 33-23h73.5L140 46z" />
                  <path fill="#B4E1F0" d="m0 46 33-23h23L40.5 46z" />
                  <path fill="#7BB8CC" d="m140 46-33-23H84l15.5 23z" />

                  <path
                    className={`  delay-200 ${
                      box.isBlue && box?.showStar ? "scale-100" : "scale-0"
                    } `}
                    fill="#fff"
                    d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                  />
                </svg>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Boxes;
