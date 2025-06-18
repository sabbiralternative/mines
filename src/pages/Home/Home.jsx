import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useOrderMutation } from "../../redux/features/events/events";
import Navbar from "./Navbar";
import BetSlip from "./BetSlip";
import Sidebar from "./Sidebar";
import { placeBetSound } from "../../utils/sound";
import { generateRoundId } from "../../utils/generateRoundId";

const Home = () => {
  // const recentResult = localStorage.getItem("recentResult");
  // const parseRecentResult = recentResult ? JSON.parse(recentResult) : [];
  const [number, setNumber] = useState(4);
  const [addOrder] = useOrderMutation();
  const [stake, setStake] = useState(0);
  const [totalWin, setTotalWin] = useState(null);
  const [isBetPlaced, setIsBetPlaced] = useState(false);

  const handleDecreaseAmount = () => {
    const decreaseAmount = stake / 2;
    if (decreaseAmount < 50) {
      return toast.error("Minimum amount is 50");
    } else {
      setStake(stake / 2);
    }
  };
  const handleIncreaseAmount = () => {
    const decreaseAmount = stake * 2;
    if (decreaseAmount > 10000) {
      return toast.error("Maximum amount is 10000");
    } else {
      setStake(stake * 2);
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (totalWin) {
        setTotalWin(null);
      }
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [totalWin]);

  const handlePlaceBet = async () => {
    if (stake) {
      placeBetSound();

      const round_id = generateRoundId();
      const payload = [
        {
          eventId: 20002,
          eventName: "Mines",
          isback: 0,
          stake,
          type: "bet",
          mines_count: number,
          round_id,
        },
      ];

      const res = await addOrder(payload).unwrap();
      if (res?.success) {
        setIsBetPlaced(true);
        setTimeout(() => {
          let recentResult = [];
          const recentStoredResult = localStorage.getItem("recentResult");
          if (recentStoredResult) {
            recentResult = JSON.parse(recentStoredResult);
          }
          //push
          localStorage.setItem("recentResult", JSON.stringify(recentResult));
        }, 500);
      } else {
        setIsBetPlaced(true);
        toast.error(res?.Message);
      }
    } else {
      toast.error("Amount is required");
    }
  };

  return (
    <main className="w-full h-full max-w-xl mx-auto lg:max-w-[1600px] lg:my-auto">
      <main className="w-full overflow-y-auto h-dvh min-h-dvh">
        <div className="flex flex-col w-full h-full min-h-min xl:justify-center xl:items-center">
          <Navbar />
          <div className="flex flex-col flex-grow w-full lg:flex-row-reverse xl:max-h-[900px]">
            <BetSlip
              setIsBetPlaced={setIsBetPlaced}
              number={number}
              setNumber={setNumber}
              isBetPlaced={isBetPlaced}
            />
            <Sidebar
              isBetPlaced={isBetPlaced}
              handlePlaceBet={handlePlaceBet}
              handleDecreaseAmount={handleDecreaseAmount}
              handleIncreaseAmount={handleIncreaseAmount}
              stake={stake}
              setStake={setStake}
            />
          </div>
        </div>
      </main>
    </main>
  );
};

export default Home;
