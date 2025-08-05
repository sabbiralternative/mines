import { useRef } from "react";
import useCloseModalClickOutside from "../../hooks/closeModal";

const RuleModal = ({ setShowRule }) => {
  const ref = useRef();
  const closeModal = () => {
    setShowRule(false);
  };
  useCloseModalClickOutside(ref, () => {
    closeModal();
  });

  return (
    <div
      className="fixed top-0 left-0 flex flex-col items-center  w-full p-2 h-dvh bg-black/70 backdrop-blur-sm justify-center"
      style={{ zIndex: 1000 }}
    >
      <div
        ref={ref}
        className="flex flex-col w-full max-h-full max-w-lg p-2 border rounded-lg bg-zinc-900 border-zinc-800 scrollbar-thin scrollbar-track-white/30 scrollbar-thumb-white/10 modal-slide-up h-full"
      >
        <div className="flex items-center w-full max-w-lg mb-2 text-white ">
          <button
            onClick={closeModal}
            className="flex items-center gap-1 text-sm font-medium"
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
              className="w-4 h-4"
            >
              <path d="M15 6l-6 6l6 6" />
            </svg>
            Back
          </button>
        </div>
        <div className="flex-grow overflow-y-auto">
          <div className="flex flex-col gap-2 py-3 px-2">
            <h1 className="text-xl font-semibold text-zinc-200">Mines</h1>
            <div className="grid grid-cols-2 gap-1 mt-2">
              <div className="flex items-center justify-between px-2 py-1 font-medium rounded bg-zinc-800 ">
                <span className="flex flex-col justify-between text-sm text-zinc-300">
                  <span className="text-[10px] text-zinc-500">RTP</span>98.98%
                </span>
              </div>
              <div className="flex items-center justify-between px-2 py-1 font-medium rounded bg-zinc-800 ">
                <span className="flex flex-col justify-between text-sm text-zinc-300">
                  <span className="text-[10px] text-zinc-500">
                    Stake Limits
                  </span>
                  50 - 10000 INR
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              Discover Mines, an unrivaled cryptographically-based gambling
              game. Uncover gems strategically, avoid hidden mines, and watch
              the payout multiplier soar. With provable fairness and engaging
              gameplay, Mines offers a thrilling casino experience. Bet
              responsibly and embark on a journey of risk and reward today!
            </p>
            <div className="markdown">
              <h2>Game Rules</h2>
              <ol>
                <li>
                  Select the number of mines you wish to place for the round.
                </li>
                <li>Press BET button to start the round.</li>
                <li>Each gem revealed will increase the payout multiplier.</li>
                <li>
                  Cash out at any point to win at the last multiplier displayed.
                </li>
                <li>
                  If a mine is revealed, the game ends and your wager is lost.
                </li>
              </ol>
              <h2>Tips</h2>
              <ul>
                <li>
                  You may set more mines to increase multipliers on each gem
                  revealed.
                </li>
                <li>
                  Cash out before revealing a mine to secure your winnings!
                </li>
              </ul>
              <h2>Payout</h2>
              <ul>
                <li>Multiplier increases with each safe tile.</li>
              </ul>
              <p>Play safe and win big!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RuleModal;
