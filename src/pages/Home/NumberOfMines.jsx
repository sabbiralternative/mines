import { useState } from "react";
import { generateRoundId } from "../../utils/generateRoundId";
import { useOrderMutation } from "../../redux/features/events/events";
import { placeWinSound } from "../../utils/sound";

const NumberOfMines = ({
  isBetPlaced,
  pickRandom,
  isOneBoxActive,
  number,
  setNumber,
  setIsBetPlaced,
  activeBoxCount,
  boxes,
  setBoxes,
}) => {
  const [addOrder] = useOrderMutation();
  const [chance, setChange] = useState(84);

  const handleChangeNumber = (type) => {
    if (type === "decrease") {
      if (number === 1) {
        return;
      } else {
        setNumber((prev) => prev - 1);
        setChange((prev) => prev + 4);
      }
    }
    if (type === "increase") {
      if (number === 24) {
        return;
      } else {
        setNumber((prev) => prev + 1);
        setChange((prev) => prev - 4);
      }
    }
  };

  const handleCashOut = async () => {
    placeWinSound();
    const round_id = generateRoundId();
    const payload = {
      round_id,
      type: "cashout",
      box_count: activeBoxCount,
    };
    const findBoxAndChange = boxes?.map((boxObj) => ({
      ...boxObj,
      dark: boxObj?.isBlue ? false : true,
      isBlue: true,
    }));
    setBoxes(findBoxAndChange);
    await addOrder(payload).unwrap();
    setIsBetPlaced(false);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto h-fit">
      <div
        className="w-full h-full relative transition-all top-0 left-0 max-w-xl mx-auto"
        style={{
          pointerEvents: "none",
          transform: `translateY(${isBetPlaced ? "80" : "0"}px)`,
          opacity: 1,
          transitionDelay: `${isBetPlaced ? "0s" : "1s"}`,
        }}
      >
        <div
          className="w-full relative transition-all top-0 left-0 flex flex-col gap-2 max-w-xl mx-auto rounded-t-2xl p-2 bg-zinc-700"
          style={{ pointerEvents: "auto" }}
        >
          <div className="flex absolute z-10 top-0 left-0 bg-zinc-700 p-2 rounded-2xl items-center w-full overflow-hidden transition-all duration-300 gap-1 translate-y-2 delay-300 opacity-0">
            <button className="flex items-center justify-center text-zinc-200 text-sm font-semibold w-full rounded-lg p-1 bg-zinc-800 hover:bg-zinc-900 active:scale-95 transition-all">
              1
            </button>
            <button className="flex items-center justify-center text-zinc-200 text-sm font-semibold w-full rounded-lg p-1 bg-zinc-800 hover:bg-zinc-900 active:scale-95 transition-all">
              4
            </button>
            <button className="flex items-center justify-center text-zinc-200 text-sm font-semibold w-full rounded-lg p-1 bg-zinc-800 hover:bg-zinc-900 active:scale-95 transition-all">
              9
            </button>
            <button className="flex items-center justify-center text-zinc-200 text-sm font-semibold w-full rounded-lg p-1 bg-zinc-800 hover:bg-zinc-900 active:scale-95 transition-all">
              16
            </button>
            <button className="flex items-center justify-center text-zinc-200 text-sm font-semibold w-full rounded-lg p-1 bg-zinc-800 hover:bg-zinc-900 active:scale-95 transition-all">
              24
            </button>
          </div>
          <div className="z-50 w-full">
            <div className="flex flex-col border w-full rounded-lg p-1 bg-zinc-800 border-transparent">
              <div className="flex items-center justify-between w-full p-1 pl-2 text-xs">
                <span className="font-semibold text-green-400">
                  Number of Mines
                </span>
                <span className="text-xs font-medium text-zinc-500">
                  Chance {chance}.00%
                </span>
              </div>
              <div className="flex items-center w-full pl-2">
                <input
                  max={24}
                  min={1}
                  placeholder="1 to 24"
                  className="w-full font-semibold bg-transparent outline-none text-zinc-300"
                  type="text"
                  value={number}
                />
                <div className="flex gap-1">
                  <button
                    onClick={() => handleChangeNumber("decrease")}
                    className="flex items-center justify-center w-8 h-8 text-sm font-semibold transition-all rounded bg-zinc-700 text-zinc-400 active:bg-zinc-900 active:scale-95"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-chevron-left"
                    >
                      <path d="M15 6l-6 6l6 6" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleChangeNumber("increase")}
                    className="flex items-center justify-center w-8 h-8 text-sm font-semibold transition-all rounded bg-zinc-700 text-zinc-400 active:bg-zinc-900 active:scale-95"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-chevron-right"
                    >
                      <path d="M9 6l6 6l-6 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isBetPlaced && (
        <div
          className="absolute top-0 left-0 z-50 flex flex-col justify-end w-full h-full gap-1 transition-all"
          style={{
            transform: "translateY(0px)",
            opacity: 1,
            transitionDelay: "0s",
          }}
        >
          <div
            className="flex items-center justify-center  w-full overflow-hidden text-sm font-semibold"
            style={{ opacity: 1 }}
          >
            <div className="flex w-1/3 p-1 items-center justify-center transition-all duration-500 bg-gradient-to-r text-amber-500 ">
              ₹ 0.00
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-amber-500"
            >
              <path d="M7 7l5 5l-5 5" />
              <path d="M13 7l5 5l-5 5" />
            </svg>
            <div className="flex w-1/3 p-1 gap-1 items-center text-zinc-100 justify-center transition-all duration-500 bg-gradient-to-r ">
              ₹ 51.50
            </div>
          </div>
          <div className="flex w-full gap-2 p-2 text-xs rounded-t-2xl bg-zinc-700">
            <button
              onClick={handleCashOut}
              className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 border border-amber-600 transition-all text-white px-4 py-3 rounded-lg active:scale-95 font-bold w-full disabled:opacity-50"
              disabled={!isOneBoxActive}
            >
              CASHOUT
            </button>
            <button
              onClick={pickRandom}
              className="bg-zinc-500 border border-zinc-600 transition-all text-white px-4 py-3 rounded-lg active:scale-95 font-bold w-full disabled:opacity-50"
            >
              PICK RANDOM
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NumberOfMines;
