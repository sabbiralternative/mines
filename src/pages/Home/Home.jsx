import { useEffect, useRef, useState } from "react";
import useCloseModalClickOutside from "../../hooks/closeModal";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { useOrderMutation } from "../../redux/features/events/events";
import { playWinSound } from "../../utils/sound";
import { setBalance } from "../../redux/features/auth/authSlice";
import Navbar from "./Navbar";
import BetSlip from "./BetSlip";
import Sidebar from "./Sidebar";

const Home = () => {
  const dispatch = useDispatch();
  const recentResult = localStorage.getItem("recentResult");
  const parseRecentResult = recentResult ? JSON.parse(recentResult) : [];
  const [toss, setToss] = useState(null);
  const [addOrder] = useOrderMutation();
  const { token, username, balance } = useSelector((state) => state.auth);
  const { mutate: handleAuth } = useAuth();
  const [stake, setStake] = useState(0);
  const [placeBet, setPlaceBet] = useState(false);
  const [headsTailTab, setHeadsTailTab] = useState("H");
  const [totalWin, setTotalWin] = useState(null);
  const myBetRef = useRef();
  const navigate = useNavigate();
  const [myBet, setMyBet] = useState(false);
  useCloseModalClickOutside(myBetRef, () => {
    setMyBet(false);
  });

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
      setPlaceBet(true);
      const payload = [
        {
          eventId: 20001,
          eventName: "Coin Toss",
          isback: 0,
          price: 1.98,
          runner_name: headsTailTab,
          stake,
        },
      ];

      const res = await addOrder(payload).unwrap();

      if (res?.success) {
        const toss = res?.toss;

        setTimeout(() => {
          if (toss === headsTailTab) {
            playWinSound();
            const winAmount = 1.98 * stake;
            setTotalWin(winAmount);
            dispatch(setBalance(winAmount + balance));
          } else {
            const lossAmount = balance - stake;
            dispatch(setBalance(lossAmount));
          }
          let recentResult = [];
          const recentStoredResult = localStorage.getItem("recentResult");
          if (recentStoredResult) {
            recentResult = JSON.parse(recentStoredResult);
          }

          if (toss) {
            recentResult.unshift(toss);
          }

          localStorage.setItem("recentResult", JSON.stringify(recentResult));
          setToss(toss);
          setPlaceBet(false);
        }, 500);
      } else {
        toast.error(res?.error?.status?.[0]?.description);
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
            <BetSlip />
            <Sidebar
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
