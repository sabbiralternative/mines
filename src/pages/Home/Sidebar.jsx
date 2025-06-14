const Sidebar = ({
  handleIncreaseAmount,
  handleDecreaseAmount,
  handlePlaceBet,
  stake,
  setStake,
}) => {
  return (
    <div className="lg:w-[40%] relative w-full px-2 scrollbar-none lg:overflow-y-auto lg:h-[94dvh]">
      <div className="flex items-center gap-2 px-1 py-2 text-xs font-semibold text-zinc-500">
        <span className="ml-auto">Bet Limits</span>
        <span>50 - 10K</span>
      </div>
      <div className="flex flex-col items-center justify-start w-full text-white rounded-2xl lg:rounded-3xl bg-zinc-800">
        <div className="w-full h-full flex flex-col lg:p-2">
          <div className="flex flex-col gap-2 p-1">
            <div className="grid grid-cols-2 gap-1 lg:grid-cols-1">
              <div className="flex flex-col items-center justify-between w-full gap-[1px]">
                <div className="flex items-center justify-between gap-1 border rounded-t-xl p-1 bg-zinc-900 w-full has-[input:focus]:border-green-400 border-transparent">
                  <button
                    onClick={handleDecreaseAmount}
                    className="flex items-center justify-center w-8 h-6 p-2 text-xs font-medium rounded-lg cursor-pointer lg:w-10 lg:h-10 bg-zinc-800 text-zinc-400 lg:text-base active:scale-95"
                  >
                    1/2
                  </button>
                  <input
                    onChange={(e) => setStake(e.target.value)}
                    placeholder="Amount"
                    className="w-full text-center h-6 bg-transparent outline-none font-semibold"
                    value={stake ? stake : null}
                  />
                  <button
                    onClick={handleIncreaseAmount}
                    className="flex items-center justify-center w-8 h-6 p-2 text-xs font-medium rounded-lg cursor-pointer lg:w-10 lg:h-10 bg-zinc-800 text-zinc-400 lg:text-base active:scale-95"
                  >
                    2x
                  </button>
                </div>
                <div className="flex items-center justify-between w-full gap-1 p-1 border border-transparent rounded-b-xl bg-zinc-900 text-white/50">
                  <button
                    onClick={() => setStake(250)}
                    className="hidden lg:flex items-center justify-center w-full h-6 text-xs font-medium rounded-lg cursor-pointer lg:h-10 lg:text-base bg-zinc-800 text-zinc-400 active:scale-95"
                  >
                    250
                  </button>
                  <button
                    onClick={() => setStake(500)}
                    className="flex items-center justify-center w-full h-6 text-xs font-medium rounded-lg cursor-pointer lg:h-10 lg:text-base bg-zinc-800 text-zinc-400 active:scale-95"
                  >
                    500
                  </button>
                  <button
                    onClick={() => setStake(5000)}
                    className="flex items-center justify-center w-full h-6 text-xs font-medium rounded-lg cursor-pointer lg:h-10 lg:text-base bg-zinc-800 text-zinc-400 active:scale-95"
                  >
                    5K
                  </button>
                  <button
                    onClick={() => setStake(10000)}
                    className="flex items-center justify-center w-full h-6 text-xs font-medium rounded-lg cursor-pointer lg:h-10 lg:text-base bg-zinc-800 text-zinc-400 active:scale-95"
                  >
                    10K
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center w-full h-full gap-1 select-none overflow-hidden">
                <button className="w-full h-full flex-grow p-4 rounded-xl font-bold active:scale-[0.99] cursor-pointer whitespace-nowrap bg-zinc-800 text-zinc-400 hidden lg:flex items-center justify-center border-4 border-zinc-900">
                  ALL IN
                </button>
                <button
                  onClick={handlePlaceBet}
                  className="relative w-full h-full flex-grow p-4 font-bold overflow-hidden rounded-xl active:scale-[0.99] cursor-pointer whitespace-nowrap"
                  style={{
                    background:
                      "linear-gradient(to right,rgb(87, 222, 119),rgb(2, 185, 121),rgb(2, 185, 121))",
                  }}
                >
                  BET
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between w-full p-1 rounded-md">
              <div className="flex items-center justify-start w-1/2 gap-2">
                <div className="relative w-8 h-5 rounded-full cursor-pointer transition-colors duration-200 ease-in-out bg-zinc-700 undefined">
                  <div className="absolute w-4 h-4 rounded-full top-0.5 transition-transform duration-200 ease-in-out translate-x-0.5 bg-zinc-400" />
                </div>
                <span className="text-sm font-medium text-zinc-400">
                  Auto Bet
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 text-white/50">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-zinc-300"
                  >
                    <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                </button>
                <button className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-zinc-300"
                  >
                    <path d="M15 8a5 5 0 0 1 0 8" />
                    <path d="M17.7 5a9 9 0 0 1 0 14" />
                    <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-start rounded-md gap-3 transition-all duration-300 overflow-hidden max-h-0 -mt-2 opacity-0">
              <div className="flex flex-col w-full gap-0.5 font-semibold">
                <span className="px-2 text-sm text-zinc-400 font-medium">
                  Number of rounds
                </span>
                <div className="flex group items-center w-full gap-1 p-1 rounded-xl border bg-zinc-900 has-[input:focus]:border-green-400 border-zinc-800 text-zinc-300">
                  <input
                    min={0}
                    placeholder="∞"
                    className="z-40 w-full p-1 pl-2 bg-transparent border border-transparent focus:outline-none"
                    type="numaric"
                    defaultValue
                  />
                  <button
                    value={0}
                    className="px-4 py-2 h-full text-sm rounded-lg bg-zinc-800 font-medium active:scale-95 text-zinc-400"
                  >
                    ∞
                  </button>
                  <button
                    value={10}
                    className="px-4 py-2 h-full text-sm rounded-lg bg-zinc-800 font-medium active:scale-95 text-zinc-400"
                  >
                    10
                  </button>
                  <button
                    value={100}
                    className="px-4 py-2 h-full text-sm rounded-lg bg-zinc-800 font-medium active:scale-95 text-zinc-400"
                  >
                    100
                  </button>
                </div>
              </div>
              <div className="flex flex-col w-full gap-0.5 font-semibold">
                <div className="flex items-center justify-between font-medium w-full gap-1">
                  <span className="px-2 text-sm text-zinc-400">On lose</span>
                </div>
                <div className="flex w-full gap-0.5">
                  <div className="flex items-center gap-1 p-1 border rounded-xl bg-zinc-900 border-zinc-800">
                    <button
                      value="Reset"
                      className="px-2 h-full text-xs whitespace-nowrap font-medium rounded-lg active:scale-95 bg-zinc-800 text-zinc-300"
                    >
                      Reset
                    </button>
                    <button
                      value="Increase By"
                      className="px-2 h-full text-xs whitespace-nowrap font-medium rounded-lg active:scale-95 text-zinc-500"
                    >
                      Increase By
                    </button>
                  </div>
                  <div className="relative flex items-center w-full text-zinc-300 bg-zinc-900 rounded-xl border border-zinc-800 has-[input:focus]:border-red-400">
                    <input
                      disabled
                      placeholder={0}
                      className="z-40 w-full p-2 pl-3 bg-transparent disabled:text-zinc-600 border border-transparent focus:outline-none opacity-10"
                      type="text"
                      defaultValue
                    />
                    <span className="absolute transform -translate-y-1/2 text-zinc-600 top-1/2 right-2">
                      %
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-0.5 font-semibold">
                <div className="flex items-center justify-between w-full font-medium gap-1">
                  <span className="px-2 text-sm text-zinc-400">On win</span>
                </div>
                <div className="flex w-full gap-0.5">
                  <div className="flex items-center gap-1 p-1 border rounded-xl bg-zinc-900 border-zinc-800">
                    <button
                      value="Reset"
                      className="px-2 h-full text-xs whitespace-nowrap font-medium rounded-lg active:scale-95 bg-zinc-800 text-zinc-300"
                    >
                      Reset
                    </button>
                    <button
                      value="Increase By"
                      className="px-2 h-full text-xs whitespace-nowrap font-medium rounded-lg active:scale-95 text-zinc-500"
                    >
                      Increase By
                    </button>
                  </div>
                  <div className="relative flex items-center w-full text-zinc-300 bg-zinc-900 rounded-xl border border-zinc-800 has-[input:focus]:border-red-400">
                    <input
                      disabled
                      placeholder={0}
                      className="z-40 w-full p-2 pl-3 bg-transparent disabled:text-zinc-600 border border-transparent focus:outline-none opacity-10"
                      type="text"
                      defaultValue
                    />
                    <span className="absolute transform -translate-y-1/2 text-zinc-600 top-1/2 right-2">
                      %
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-0.5 font-semibold">
                <div className="flex items-center justify-between w-full gap-1">
                  <span className="px-2 text-sm text-zinc-400 font-medium">
                    Stop on lose
                  </span>
                </div>
                <div className="relative overflow-hidden flex items-center w-full text-zinc-300 bg-zinc-900 rounded-xl border has-[input:focus]:border-green-400 border-zinc-800">
                  <input
                    placeholder={0}
                    className="z-40 w-full p-2 pl-3 bg-transparent disabled:text-zinc-600 border border-transparent focus:outline-none"
                    type="text"
                    defaultValue
                  />
                  <span
                    className="absolute flex items-center font-mono text-xs transform -translate-y-1/2 text-zinc-600 top-1/2 right-2"
                    style={{ opacity: 0 }}
                  >
                    0/0
                  </span>
                  <div
                    className="absolute bottom-0 left-0 flex items-center justify-center h-1 bg-red-400 autoAnimate"
                    style={{ opacity: 0 }}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full gap-0.5 font-semibold">
                <div className="flex items-center justify-between w-full gap-1">
                  <span className="px-2 text-sm text-zinc-400 font-medium">
                    Stop on win
                  </span>
                </div>
                <div className="relative flex items-center overflow-hidden w-full text-zinc-300 bg-zinc-900 rounded-xl border has-[input:focus]:border-green-400 border-zinc-800">
                  <input
                    placeholder={0}
                    className="z-40 w-full p-2 pl-3 bg-transparent disabled:text-zinc-600 border border-transparent focus:outline-none"
                    type="text"
                    defaultValue
                  />
                  <span
                    className="absolute font-mono text-xs transform -translate-y-1/2 text-zinc-600 top-1/2 right-2"
                    style={{ opacity: 0 }}
                  >
                    0/0
                  </span>
                  <div
                    className="absolute bottom-0 left-0 flex items-center justify-center h-1 bg-green-400 autoAnimate"
                    style={{ opacity: 0 }}
                  />
                </div>
              </div>
              <p className="p-2 text-xs tracking-wider text-justify font-semibold text-zinc-500">
                Use of script is optional and players must take full
                responsibility for any attendant risks.We will not be held
                liable in this regard.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="step-gameParticipants"
        className="relative w-full overflow-hidden min-h-[420px] scrollbar-none h-[420px]"
      >
        <div className="flex items-center justify-between p-2">
          <span className="text-sm font-semibold text-zinc-200">
            Latest bets
          </span>
          <div className="relative flex items-center gap-1 p-1 ml-auto font-medium border rounded-full border-zinc-700/50 bg-zinc-800">
            <button className="flex z-50 items-center justify-between px-4 py-2 text-xs font-medium text-zinc-200 rounded-full">
              All bets
            </button>
            <button className="flex z-50 items-center justify-between px-4 py-2 text-xs font-medium text-zinc-200 rounded-full">
              My bets
            </button>
            <span className="absolute left-0 z-40 transition-all w-1/2 h-full bg-zinc-900/50 rounded-l-full" />
          </div>
        </div>
        <table className="w-full overflow-hidden table-auto rounded-2xl animate__animated animate__fadeIn animate__faster">
          <tbody className>
            <tr className="sticky top-0 w-full h-12 text-xs font-medium text-zinc-300 bg-zinc-800">
              <th className="p-2 pl-4 text-left">User</th>
              <th className="p-2 text-left">Amount</th>
              <th className="p-2 text-left">Multiplier</th>
              <th className="p-2 text-left">Profit</th>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_6***</td>
              <td className="p-2 text-start">₹ 1000.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 1000.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">6394***</td>
              <td className="p-2 text-start">₹ 150.00</td>
              <td className="p-2 text-start text-green-500">x 1.46</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 69.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">Varu***</td>
              <td className="p-2 text-start">₹ 100.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 100.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_8***</td>
              <td className="p-2 text-start">₹ 50.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 50.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">roif***</td>
              <td className="p-2 text-start">₹ 100.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 100.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_7***</td>
              <td className="p-2 text-start">₹ 200.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 200.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_9***</td>
              <td className="p-2 text-start">₹ 50.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 50.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">cont***</td>
              <td className="p-2 text-start">₹ 100.00</td>
              <td className="p-2 text-start text-green-500">x 2.08</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 108.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">Ratn***</td>
              <td className="p-2 text-start">₹ 100.00</td>
              <td className="p-2 text-start text-green-500">x 1.18</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 18.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_6***</td>
              <td className="p-2 text-start">₹ 800.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 800.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">Varu***</td>
              <td className="p-2 text-start">₹ 100.00</td>
              <td className="p-2 text-start text-green-500">x 2.08</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 108.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_7***</td>
              <td className="p-2 text-start">₹ 100.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 100.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_7***</td>
              <td className="p-2 text-start">₹ 50.00</td>
              <td className="p-2 text-start text-green-500">x 1.48</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 24.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_8***</td>
              <td className="p-2 text-start">₹ 50.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 50.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_7***</td>
              <td className="p-2 text-start">₹ 100.00</td>
              <td className="p-2 text-start text-green-500">x 1.18</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 18.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">gaaa***</td>
              <td className="p-2 text-start">₹ 600.00</td>
              <td className="p-2 text-start text-green-500">x 2.08</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 648.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">cont***</td>
              <td className="p-2 text-start">₹ 100.00</td>
              <td className="p-2 text-start text-green-500">x 2.08</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 108.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_9***</td>
              <td className="p-2 text-start">₹ 50.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 50.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_6***</td>
              <td className="p-2 text-start">₹ 800.00</td>
              <td className="p-2 text-start text-green-500">x 1.56</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 448.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_7***</td>
              <td className="p-2 text-start">₹ 50.00</td>
              <td className="p-2 text-start text-green-500">x 1.99</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 49.50
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_8***</td>
              <td className="p-2 text-start">₹ 50.00</td>
              <td className="p-2 text-start text-green-500">x 1.48</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 24.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_7***</td>
              <td className="p-2 text-start">₹ 100.00</td>
              <td className="p-2 text-start text-green-500">x 1.08</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 8.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_6***</td>
              <td className="p-2 text-start">₹ 1000.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 1000.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">Varu***</td>
              <td className="p-2 text-start">₹ 100.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 100.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_9***</td>
              <td className="p-2 text-start">₹ 50.00</td>
              <td className="p-2 text-start text-green-500">x 1.71</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 35.50
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">gaaa***</td>
              <td className="p-2 text-start">₹ 600.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 600.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">roif***</td>
              <td className="p-2 text-start">₹ 100.00</td>
              <td className="p-2 text-start text-green-500">x 1.18</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 18.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_8***</td>
              <td className="p-2 text-start">₹ 50.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 50.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_6***</td>
              <td className="p-2 text-start">₹ 1000.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 1000.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">Varu***</td>
              <td className="p-2 text-start">₹ 100.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 100.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_7***</td>
              <td className="p-2 text-start">₹ 100.00</td>
              <td className="p-2 text-start text-green-500">x 1.42</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 42.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">cont***</td>
              <td className="p-2 text-start">₹ 100.00</td>
              <td className="p-2 text-start text-green-500">x 2.08</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 108.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">gaaa***</td>
              <td className="p-2 text-start">₹ 600.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 600.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_8***</td>
              <td className="p-2 text-start">₹ 50.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 50.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_6***</td>
              <td className="p-2 text-start">₹ 1000.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 1000.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_6***</td>
              <td className="p-2 text-start">₹ 800.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 800.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">Varu***</td>
              <td className="p-2 text-start">₹ 100.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 100.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_8***</td>
              <td className="p-2 text-start">₹ 50.00</td>
              <td className="p-2 text-start text-green-500">x 1.99</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 49.50
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_9***</td>
              <td className="p-2 text-start">₹ 50.00</td>
              <td className="p-2 text-start text-green-500">x 2.57</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 78.50
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">gaaa***</td>
              <td className="p-2 text-start">₹ 600.00</td>
              <td className="p-2 text-start text-green-500">x 1.71</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 426.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_7***</td>
              <td className="p-2 text-start">₹ 50.00</td>
              <td className="p-2 text-start text-green-500">x 2.80</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 90.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_7***</td>
              <td className="p-2 text-start">₹ 100.00</td>
              <td className="p-2 text-start text-green-500">x 1.29</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 29.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_6***</td>
              <td className="p-2 text-start">₹ 1000.00</td>
              <td className="p-2 text-start text-green-500">x 1.71</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 710.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_6***</td>
              <td className="p-2 text-start">₹ 800.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 800.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_6***</td>
              <td className="p-2 text-start">₹ 1000.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 1000.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">sgan***</td>
              <td className="p-2 text-start">₹ 1000.00</td>
              <td className="p-2 text-start text-green-500">x 1.24</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 240.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_7***</td>
              <td className="p-2 text-start">₹ 200.00</td>
              <td className="p-2 text-start text-green-500">x 1.42</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 84.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_6***</td>
              <td className="p-2 text-start">₹ 800.00</td>
              <td className="p-2 text-start text-green-500">x 1.56</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 448.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">Varu***</td>
              <td className="p-2 text-start">₹ 100.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 100.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_9***</td>
              <td className="p-2 text-start">₹ 50.00</td>
              <td className="p-2 text-start text-green-500">x 2.08</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 54.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">cont***</td>
              <td className="p-2 text-start">₹ 100.00</td>
              <td className="p-2 text-start text-green-500">x 2.08</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 108.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_6***</td>
              <td className="p-2 text-start">₹ 1000.00</td>
              <td className="p-2 text-start text-green-500">x 5.27</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 4270.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">Raju***</td>
              <td className="p-2 text-start">₹ 100.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 100.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_7***</td>
              <td className="p-2 text-start">₹ 50.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 50.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">sgan***</td>
              <td className="p-2 text-start">₹ 1000.00</td>
              <td className="p-2 text-start text-green-500">x 1.90</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 900.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_8***</td>
              <td className="p-2 text-start">₹ 50.00</td>
              <td className="p-2 text-start text-green-500">x 1.71</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 35.50
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">gaaa***</td>
              <td className="p-2 text-start">₹ 600.00</td>
              <td className="p-2 text-start text-green-500">x 2.08</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 648.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_7***</td>
              <td className="p-2 text-start">₹ 100.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 100.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">Raju***</td>
              <td className="p-2 text-start">₹ 100.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 100.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_6***</td>
              <td className="p-2 text-start">₹ 800.00</td>
              <td className="p-2 text-start text-green-500">x 1.56</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 448.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_7***</td>
              <td className="p-2 text-start">₹ 50.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 50.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">Varu***</td>
              <td className="p-2 text-start">₹ 100.00</td>
              <td className="p-2 text-start text-green-500">x 6.89</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 589.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">cont***</td>
              <td className="p-2 text-start">₹ 100.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 100.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_6***</td>
              <td className="p-2 text-start">₹ 1000.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 1000.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">pava***</td>
              <td className="p-2 text-start">₹ 50.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 50.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_6***</td>
              <td className="p-2 text-start">₹ 1000.00</td>
              <td className="p-2 text-start text-green-500">x 1.71</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 710.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">sgan***</td>
              <td className="p-2 text-start">₹ 1000.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 1000.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_7***</td>
              <td className="p-2 text-start">₹ 50.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 50.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">Raju***</td>
              <td className="p-2 text-start">₹ 100.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 100.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_9***</td>
              <td className="p-2 text-start">₹ 50.00</td>
              <td className="p-2 text-start text-green-500">x 1.71</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 35.50
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_8***</td>
              <td className="p-2 text-start">₹ 50.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 50.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_6***</td>
              <td className="p-2 text-start">₹ 1000.00</td>
              <td className="p-2 text-start text-green-500">x 5.27</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 4270.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_7***</td>
              <td className="p-2 text-start">₹ 50.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 50.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_8***</td>
              <td className="p-2 text-start">₹ 50.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 50.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">pava***</td>
              <td className="p-2 text-start">₹ 150.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 150.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">gaaa***</td>
              <td className="p-2 text-start">₹ 600.00</td>
              <td className="p-2 text-start text-zinc-500">-</td>
              <td className="p-2 flex items-center gap-1 text-start text-zinc-500">
                ₹ 600.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_6***</td>
              <td className="p-2 text-start">₹ 800.00</td>
              <td className="p-2 text-start text-green-500">x 1.56</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 448.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">sgan***</td>
              <td className="p-2 text-start">₹ 250.00</td>
              <td className="p-2 text-start text-green-500">x 2.25</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 312.50
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">91_9***</td>
              <td className="p-2 text-start">₹ 50.00</td>
              <td className="p-2 text-start text-green-500">x 1.42</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 21.00
              </td>
            </tr>
            <tr className="w-full rounded-lg text-xs text-zinc-400 font-medium odd:bg-zinc-800 even:bg-zinc-800/40">
              <td className="p-2 pl-4 text-start">cont***</td>
              <td className="p-2 text-start">₹ 100.00</td>
              <td className="p-2 text-start text-green-500">x 1.71</td>
              <td className="p-2 flex items-center gap-1 text-start text-green-500">
                ₹ 71.00
              </td>
            </tr>
          </tbody>
        </table>
        <div className="absolute bottom-0 flex items-center justify-center w-full space-x-2 bg-gradient-to-t from-zinc-900 to-transparent">
          <button className="px-4 py-2 text-xs font-medium border rounded-full text-zinc-100 border-zinc-100/10 bg-zinc-800">
            Show All<span className="ml-2 text-zinc-500">80</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
