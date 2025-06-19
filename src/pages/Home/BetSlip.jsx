import images from "../../assets/images";
import Boxes from "./Boxes";
import NumberOfMines from "./NumberOfMines";
import { playGemSound } from "../../utils/sound";
import { useOrderMutation } from "../../redux/features/events/events";

const BetSlip = ({
  isBetPlaced,
  number,
  setNumber,
  setIsBetPlaced,
  boxes,
  setBoxes,
}) => {
  const [addOrder] = useOrderMutation();

  const isOneBoxActive = boxes.some((box) => box.isBlue);
  const activeBoxCount = boxes.filter((box) => box.isBlue).length;

  const pickRandom = async () => {
    const grayBoxesId = boxes.filter((box) => !box.isBlue).map((box) => box.id);

    const randomIndex = Math.floor(Math.random() * grayBoxesId.length);
    const randomId = grayBoxesId[randomIndex];
    if (randomId) {
      playGemSound();
      const round_id = sessionStorage.getItem("round_id");
      const payload = [
        {
          round_id: Number(round_id),
          type: "select_box",
          box_id: randomId,
          box_count: activeBoxCount,
          eventId: 20002,
        },
      ];
      const updatedBoxes = boxes?.map((boxObj) =>
        boxObj?.id === randomId
          ? { ...boxObj, isBlue: true, showStar: true }
          : boxObj
      );
      setBoxes(updatedBoxes);

      await addOrder(payload).unwrap();
    }
  };

  return (
    <div className="lg:w-[60%] w-full lg:h-full flex transition-all xl:max-h-[800px] duration-300 flex-col items-center justify-center lg:py-2 lg:pl-0 px-2 py-1">
      <div
        id="game-container"
        className="relative flex flex-col items-center justify-end w-full h-full overflow-hidden rounded-2xl bg-zinc-800"
        style={{
          pointerEvents: "auto",
          backgroundImage: `url(${images.mines_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="z-50 rounded-b px-2 absolute top-0 left-1/2 -translate-x-1/2 text-[8px] text-zinc-700">
          @member502
        </div>
        <div className="flex flex-col items-center justify-between w-full max-w-xl gap-2 lg:flex-grow">
          <div className="flex flex-col items-center justify-center w-full h-full p-2">
            <Boxes
              activeBoxCount={activeBoxCount}
              boxes={boxes}
              setBoxes={setBoxes}
              isBetPlaced={isBetPlaced}
            />
          </div>
          <NumberOfMines
            activeBoxCount={activeBoxCount}
            setIsBetPlaced={setIsBetPlaced}
            number={number}
            setNumber={setNumber}
            isOneBoxActive={isOneBoxActive}
            pickRandom={pickRandom}
            isBetPlaced={isBetPlaced}
            boxes={boxes}
            setBoxes={setBoxes}
          />
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
