const WinModal = ({ current_multiplier, winMultiplier }) => {
  return (
    <div className="absolute left-1/2 top-12 -translate-x-1/2 z-[1000]">
      <div
        className="relative animate__faster animate__animated w-fit min-w-32  flex flex-col items-center justify-center gap-1 p-2 border-2 rounded-xl border-zinc-700 bg-zinc-800  animate__fadeInUp"
        style={{ zIndex: 1000 }}
      >
        <div className="flex flex-col items-center justify-center w-full gap-1 font-mono">
          <span className="p-2 text-xl font-semibold tracking-tighter text-green-500 md:text-3xl">
            {winMultiplier}x
          </span>
          <span className="w-full px-3 py-2 text-sm font-semibold tracking-tighter text-center rounded text-zinc-400 bg-zinc-700/50 md:text-xl">
            <span className="font-sans text-xs md:text-sm ">₹</span>
            {current_multiplier}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WinModal;
