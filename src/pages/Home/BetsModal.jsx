import { useRef, useState } from "react";
import useCloseModalClickOutside from "../../hooks/closeModal";

const BetsModal = ({ setShowBetsModal }) => {
  const ref = useRef();
  const [tab, setTab] = useState(1);
  const toggleTab = (t) => {
    if (t === tab) {
      setTab(null);
    } else {
      setTab(t);
    }
  };

  useCloseModalClickOutside(ref, () => {
    setShowBetsModal(false);
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
        <div className="flex items-center w-full max-w-lg mb-2 text-white " />
        <div className="flex-grow overflow-y-auto">
          <div className="relative flex flex-col h-full gap-2">
            <div className="z-50 flex items-center justify-between w-full max-w-2xl gap-1 mx-auto font-semibold text-zinc-300">
              <button
                onClick={() => setShowBetsModal(false)}
                className="flex items-center gap-1 text-sm"
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
              <div className="relative ml-auto">
                <button className="flex items-center justify-between w-full gap-2 py-2 pl-3 pr-2 text-xs font-medium transition-colors border rounded-full text-zinc-100 border-zinc-100/10 bg-zinc-800 hover:bg-zinc-700/50">
                  <span>10 per page</span>
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
                    className="w-4 h-4 transition-transform duration-200 "
                  >
                    <path d="M6 9l6 6l6 -6" />
                  </svg>
                </button>
              </div>
              <button className="flex items-center gap-1 text-xs p-2 font-medium border rounded-full text-zinc-100 border-zinc-100/10 bg-zinc-800 ">
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
                  className="w-4 h-4 "
                >
                  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                </svg>
              </button>
            </div>
            <div
              className="flex flex-col items-center flex-grow w-full gap-4 pt-12 -mt-12 overflow-y-auto scroll-smooth scrollbar-none"
              style={{
                maskImage:
                  "linear-gradient(transparent, black, black, black, black, black, black, black, black, black, black, black, transparent)",
              }}
            >
              <div className="relative w-full flex text-zinc-100 text-sm pt-4 flex-col bg-zinc-800/50 rounded-lg cursor-pointer">
                <div className="flex flex-col font-medium items-center">
                  <span className="flex text-lg font-semibold tracking-wider items-center gap-1 text-green-500">
                    ₹ 21.00{" "}
                    <span className="text-xs font-medium text-zinc-500">
                      WON
                    </span>
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-1 p-1 ">
                  <div className="flex flex-col items-center px-2 py-1 text-sm font-medium rounded bg-zinc-800 ">
                    <span className="text-[10px] text-zinc-500">
                      Bet Amount
                    </span>
                    <span className="text-zinc-300">₹ 21.00</span>
                  </div>
                  <div className="flex flex-col items-center px-2 py-1 text-sm font-medium rounded bg-zinc-800 ">
                    <span className="text-[10px] text-zinc-500">Payout</span>
                    <span className="text-zinc-300">2.00 x</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 rounded-r-full bg-zinc-900" />
                  <div className="w-full border-b-2 border-dashed border-zinc-900" />
                  <div className="w-4 h-4 rounded-l-full bg-zinc-900" />
                </div>
                <div className="flex flex-col font-medium items-center p-1">
                  <div className="flex items-center w-full gap-1 px-2 py-1 text-xs font-medium">
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
                      className="w-4 h-4 text-green-500"
                    >
                      <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                    </svg>
                    <span className="text-zinc-500">Bet ID</span>
                    <span className="ml-auto text-zinc-300">
                      6852534387fd1fd6c588b925
                    </span>
                    <span className="rounded-full cursor-pointer text-zinc-500 active:text-green-500">
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
                        <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
                        <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex items-center w-full gap-1 px-2 py-1 text-xs font-medium">
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
                      className="w-4 h-4 text-zinc-500"
                    >
                      <path d="M5 9l14 0" />
                      <path d="M5 15l14 0" />
                      <path d="M11 4l-4 16" />
                      <path d="M17 4l-4 16" />
                    </svg>
                    <span className="text-zinc-500">Round ID</span>
                    <span className="ml-auto text-zinc-300">153055527</span>
                    <span className="rounded-full cursor-pointer text-zinc-500 active:text-green-500">
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
                        <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
                        <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex items-center w-full gap-1 px-2 py-1 text-xs font-medium">
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
                      className="w-4 h-4 text-zinc-500"
                    >
                      <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                      <path d="M16 3v4" />
                      <path d="M8 3v4" />
                      <path d="M4 11h16" />
                      <path d="M11 15h1" />
                      <path d="M12 15v3" />
                    </svg>
                    <span className="text-zinc-500">Date &amp; Time</span>
                    <span className="ml-auto text-zinc-300">
                      Jun 18, 2025, 11:18 AM
                    </span>
                  </div>
                </div>
                <div className="p-1">
                  <div className="flex flex-col items-center px-2 py-1 text-sm font-medium rounded bg-zinc-800 ">
                    <div
                      onClick={() => toggleTab(1)}
                      className="flex items-center justify-between w-full gap-1 p-2"
                    >
                      <span className="text-zinc-500">Round Details</span>
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
                        className={`w-6 h-6 text-zinc-500 transition-transform duration-300  ${
                          tab === 1 ? "rotate-180" : "rotate-[360deg]"
                        }`}
                      >
                        <path d="M6 9l6 6l6 -6" />
                      </svg>
                    </div>
                    <div
                      className={` grid-cols-5 gap-0.5 w-3/4 border border-zinc-700 rounded p-0.5  ${
                        tab === 1 ? "grid" : "hidden"
                      }`}
                    >
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-amber-600 
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700/50
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
                          xmlns="http://www.w3.org/2000/svg"
                          width={137}
                          height={122}
                          fill="none"
                          viewBox="0 0 137 122"
                        >
                          <path
                            fill="url(#paint0_linear_365_220)"
                            d="M84.903 105.102c-17.073 19.917-47.4 21.932-67.736 4.499-20.337-17.432-22.983-47.71-5.91-67.628s47.4-21.932 67.737-4.5c20.337 17.433 22.982 47.711 5.91 67.629"
                          />
                          <path
                            fill="#627079"
                            d="m58.82 24.132 37.11 31.81-8.477 13.15-.379-.002c-20.176-.062-37.278-14.86-40.24-34.817z"
                          />
                          <path
                            fill="#495258"
                            d="M95.929 55.942c-3.954 4.612-15.487 1.212-25.76-7.594S54.771 28.664 58.726 24.052c3.954-4.613 15.487-1.213 25.76 7.593S99.883 51.329 95.93 55.942"
                          />
                          <path
                            fill="#373E43"
                            d="M85.718 46.53c-1.977 2.307-7.488.825-12.31-3.308-4.823-4.133-7.13-9.354-5.152-11.66s7.488-.825 12.31 3.308c4.823 4.134 7.13 9.354 5.152 11.66"
                          />
                          <path
                            stroke="url(#paint1_linear_365_220)"
                            strokeLinecap="round"
                            strokeWidth={13}
                            d="m80 36.657 2.3-2.882a7.12 7.12 0 0 1 9.545-1.465v0a8.416 8.416 0 0 0 11.644-2.222l2.274-3.316"
                          />
                          <g filter="url(#filter0_d_365_220)">
                            <path
                              fill="url(#paint2_radial_365_220)"
                              d="m90 11 5.267 2.633a24 24 0 0 0 21.466 0L122 11l-2.994 8.484a24 24 0 0 0 .348 16.901L122 43l-5.267-2.633a24 24 0 0 0-21.466 0L90 43l2.84-7.573a24 24 0 0 0 0-16.854z"
                            />
                          </g>
                          <circle cx="111.5" cy="4.5" r="2.5" fill="#FCFCCF" />
                          <circle cx="107.5" cy="50.5" r="1.5" fill="#FFFFD1" />
                          <circle cx={80} cy={19} r={2} fill="#F6F6AD" />
                          <defs>
                            <linearGradient
                              id="paint0_linear_365_220"
                              x1="95.617"
                              x2="16.694"
                              y1="81.337"
                              y2="70.751"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#495258" />
                              <stop offset={1} stopColor="#8497A4" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_365_220"
                              x1="95.5"
                              x2={76}
                              y1={29}
                              y2={23}
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FFFF50" />
                              <stop offset={1} stopColor="#EFEF93" />
                            </linearGradient>
                            <radialGradient
                              id="paint2_radial_365_220"
                              cx={0}
                              cy={0}
                              r={1}
                              gradientTransform="matrix(0 16 -16 0 106 27)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff" />
                              <stop offset={1} stopColor="#FFFF42" />
                            </radialGradient>
                            <filter
                              id="filter0_d_365_220"
                              width="61.6"
                              height="61.6"
                              x="75.2"
                              y="0.2"
                              colorInterpolationFilters="sRGB"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                floodOpacity={0}
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset dy={4} />
                              <feGaussianBlur stdDeviation="7.4" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0.258824 0 0 0 1 0" />
                              <feBlend
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_365_220"
                              />
                              <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_365_220"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700/50
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
                          xmlns="http://www.w3.org/2000/svg"
                          width={137}
                          height={122}
                          fill="none"
                          viewBox="0 0 137 122"
                        >
                          <path
                            fill="url(#paint0_linear_365_220)"
                            d="M84.903 105.102c-17.073 19.917-47.4 21.932-67.736 4.499-20.337-17.432-22.983-47.71-5.91-67.628s47.4-21.932 67.737-4.5c20.337 17.433 22.982 47.711 5.91 67.629"
                          />
                          <path
                            fill="#627079"
                            d="m58.82 24.132 37.11 31.81-8.477 13.15-.379-.002c-20.176-.062-37.278-14.86-40.24-34.817z"
                          />
                          <path
                            fill="#495258"
                            d="M95.929 55.942c-3.954 4.612-15.487 1.212-25.76-7.594S54.771 28.664 58.726 24.052c3.954-4.613 15.487-1.213 25.76 7.593S99.883 51.329 95.93 55.942"
                          />
                          <path
                            fill="#373E43"
                            d="M85.718 46.53c-1.977 2.307-7.488.825-12.31-3.308-4.823-4.133-7.13-9.354-5.152-11.66s7.488-.825 12.31 3.308c4.823 4.134 7.13 9.354 5.152 11.66"
                          />
                          <path
                            stroke="url(#paint1_linear_365_220)"
                            strokeLinecap="round"
                            strokeWidth={13}
                            d="m80 36.657 2.3-2.882a7.12 7.12 0 0 1 9.545-1.465v0a8.416 8.416 0 0 0 11.644-2.222l2.274-3.316"
                          />
                          <g filter="url(#filter0_d_365_220)">
                            <path
                              fill="url(#paint2_radial_365_220)"
                              d="m90 11 5.267 2.633a24 24 0 0 0 21.466 0L122 11l-2.994 8.484a24 24 0 0 0 .348 16.901L122 43l-5.267-2.633a24 24 0 0 0-21.466 0L90 43l2.84-7.573a24 24 0 0 0 0-16.854z"
                            />
                          </g>
                          <circle cx="111.5" cy="4.5" r="2.5" fill="#FCFCCF" />
                          <circle cx="107.5" cy="50.5" r="1.5" fill="#FFFFD1" />
                          <circle cx={80} cy={19} r={2} fill="#F6F6AD" />
                          <defs>
                            <linearGradient
                              id="paint0_linear_365_220"
                              x1="95.617"
                              x2="16.694"
                              y1="81.337"
                              y2="70.751"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#495258" />
                              <stop offset={1} stopColor="#8497A4" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_365_220"
                              x1="95.5"
                              x2={76}
                              y1={29}
                              y2={23}
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FFFF50" />
                              <stop offset={1} stopColor="#EFEF93" />
                            </linearGradient>
                            <radialGradient
                              id="paint2_radial_365_220"
                              cx={0}
                              cy={0}
                              r={1}
                              gradientTransform="matrix(0 16 -16 0 106 27)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff" />
                              <stop offset={1} stopColor="#FFFF42" />
                            </radialGradient>
                            <filter
                              id="filter0_d_365_220"
                              width="61.6"
                              height="61.6"
                              x="75.2"
                              y="0.2"
                              colorInterpolationFilters="sRGB"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                floodOpacity={0}
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset dy={4} />
                              <feGaussianBlur stdDeviation="7.4" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0.258824 0 0 0 1 0" />
                              <feBlend
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_365_220"
                              />
                              <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_365_220"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700/50
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
                          xmlns="http://www.w3.org/2000/svg"
                          width={137}
                          height={122}
                          fill="none"
                          viewBox="0 0 137 122"
                        >
                          <path
                            fill="url(#paint0_linear_365_220)"
                            d="M84.903 105.102c-17.073 19.917-47.4 21.932-67.736 4.499-20.337-17.432-22.983-47.71-5.91-67.628s47.4-21.932 67.737-4.5c20.337 17.433 22.982 47.711 5.91 67.629"
                          />
                          <path
                            fill="#627079"
                            d="m58.82 24.132 37.11 31.81-8.477 13.15-.379-.002c-20.176-.062-37.278-14.86-40.24-34.817z"
                          />
                          <path
                            fill="#495258"
                            d="M95.929 55.942c-3.954 4.612-15.487 1.212-25.76-7.594S54.771 28.664 58.726 24.052c3.954-4.613 15.487-1.213 25.76 7.593S99.883 51.329 95.93 55.942"
                          />
                          <path
                            fill="#373E43"
                            d="M85.718 46.53c-1.977 2.307-7.488.825-12.31-3.308-4.823-4.133-7.13-9.354-5.152-11.66s7.488-.825 12.31 3.308c4.823 4.134 7.13 9.354 5.152 11.66"
                          />
                          <path
                            stroke="url(#paint1_linear_365_220)"
                            strokeLinecap="round"
                            strokeWidth={13}
                            d="m80 36.657 2.3-2.882a7.12 7.12 0 0 1 9.545-1.465v0a8.416 8.416 0 0 0 11.644-2.222l2.274-3.316"
                          />
                          <g filter="url(#filter0_d_365_220)">
                            <path
                              fill="url(#paint2_radial_365_220)"
                              d="m90 11 5.267 2.633a24 24 0 0 0 21.466 0L122 11l-2.994 8.484a24 24 0 0 0 .348 16.901L122 43l-5.267-2.633a24 24 0 0 0-21.466 0L90 43l2.84-7.573a24 24 0 0 0 0-16.854z"
                            />
                          </g>
                          <circle cx="111.5" cy="4.5" r="2.5" fill="#FCFCCF" />
                          <circle cx="107.5" cy="50.5" r="1.5" fill="#FFFFD1" />
                          <circle cx={80} cy={19} r={2} fill="#F6F6AD" />
                          <defs>
                            <linearGradient
                              id="paint0_linear_365_220"
                              x1="95.617"
                              x2="16.694"
                              y1="81.337"
                              y2="70.751"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#495258" />
                              <stop offset={1} stopColor="#8497A4" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_365_220"
                              x1="95.5"
                              x2={76}
                              y1={29}
                              y2={23}
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FFFF50" />
                              <stop offset={1} stopColor="#EFEF93" />
                            </linearGradient>
                            <radialGradient
                              id="paint2_radial_365_220"
                              cx={0}
                              cy={0}
                              r={1}
                              gradientTransform="matrix(0 16 -16 0 106 27)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff" />
                              <stop offset={1} stopColor="#FFFF42" />
                            </radialGradient>
                            <filter
                              id="filter0_d_365_220"
                              width="61.6"
                              height="61.6"
                              x="75.2"
                              y="0.2"
                              colorInterpolationFilters="sRGB"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                floodOpacity={0}
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset dy={4} />
                              <feGaussianBlur stdDeviation="7.4" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0.258824 0 0 0 1 0" />
                              <feBlend
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_365_220"
                              />
                              <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_365_220"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-amber-600 
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700/50
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
                          xmlns="http://www.w3.org/2000/svg"
                          width={137}
                          height={122}
                          fill="none"
                          viewBox="0 0 137 122"
                        >
                          <path
                            fill="url(#paint0_linear_365_220)"
                            d="M84.903 105.102c-17.073 19.917-47.4 21.932-67.736 4.499-20.337-17.432-22.983-47.71-5.91-67.628s47.4-21.932 67.737-4.5c20.337 17.433 22.982 47.711 5.91 67.629"
                          />
                          <path
                            fill="#627079"
                            d="m58.82 24.132 37.11 31.81-8.477 13.15-.379-.002c-20.176-.062-37.278-14.86-40.24-34.817z"
                          />
                          <path
                            fill="#495258"
                            d="M95.929 55.942c-3.954 4.612-15.487 1.212-25.76-7.594S54.771 28.664 58.726 24.052c3.954-4.613 15.487-1.213 25.76 7.593S99.883 51.329 95.93 55.942"
                          />
                          <path
                            fill="#373E43"
                            d="M85.718 46.53c-1.977 2.307-7.488.825-12.31-3.308-4.823-4.133-7.13-9.354-5.152-11.66s7.488-.825 12.31 3.308c4.823 4.134 7.13 9.354 5.152 11.66"
                          />
                          <path
                            stroke="url(#paint1_linear_365_220)"
                            strokeLinecap="round"
                            strokeWidth={13}
                            d="m80 36.657 2.3-2.882a7.12 7.12 0 0 1 9.545-1.465v0a8.416 8.416 0 0 0 11.644-2.222l2.274-3.316"
                          />
                          <g filter="url(#filter0_d_365_220)">
                            <path
                              fill="url(#paint2_radial_365_220)"
                              d="m90 11 5.267 2.633a24 24 0 0 0 21.466 0L122 11l-2.994 8.484a24 24 0 0 0 .348 16.901L122 43l-5.267-2.633a24 24 0 0 0-21.466 0L90 43l2.84-7.573a24 24 0 0 0 0-16.854z"
                            />
                          </g>
                          <circle cx="111.5" cy="4.5" r="2.5" fill="#FCFCCF" />
                          <circle cx="107.5" cy="50.5" r="1.5" fill="#FFFFD1" />
                          <circle cx={80} cy={19} r={2} fill="#F6F6AD" />
                          <defs>
                            <linearGradient
                              id="paint0_linear_365_220"
                              x1="95.617"
                              x2="16.694"
                              y1="81.337"
                              y2="70.751"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#495258" />
                              <stop offset={1} stopColor="#8497A4" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_365_220"
                              x1="95.5"
                              x2={76}
                              y1={29}
                              y2={23}
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FFFF50" />
                              <stop offset={1} stopColor="#EFEF93" />
                            </linearGradient>
                            <radialGradient
                              id="paint2_radial_365_220"
                              cx={0}
                              cy={0}
                              r={1}
                              gradientTransform="matrix(0 16 -16 0 106 27)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff" />
                              <stop offset={1} stopColor="#FFFF42" />
                            </radialGradient>
                            <filter
                              id="filter0_d_365_220"
                              width="61.6"
                              height="61.6"
                              x="75.2"
                              y="0.2"
                              colorInterpolationFilters="sRGB"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                floodOpacity={0}
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset dy={4} />
                              <feGaussianBlur stdDeviation="7.4" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0.258824 0 0 0 1 0" />
                              <feBlend
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_365_220"
                              />
                              <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_365_220"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative w-full flex text-zinc-100 text-sm pt-4 flex-col bg-zinc-800/50 rounded-lg cursor-pointer">
                <div className="flex flex-col font-medium items-center">
                  <span className="flex text-lg font-semibold tracking-wider items-center gap-1 text-rose-500">
                    ₹ -50.00{" "}
                    <span className="text-xs font-medium text-zinc-500">
                      LOST
                    </span>
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-1 p-1 ">
                  <div className="flex flex-col items-center px-2 py-1 text-sm font-medium rounded bg-zinc-800 ">
                    <span className="text-[10px] text-zinc-500">
                      Bet Amount
                    </span>
                    <span className="text-zinc-300">₹ -50.00</span>
                  </div>
                  <div className="flex flex-col items-center px-2 py-1 text-sm font-medium rounded bg-zinc-800 ">
                    <span className="text-[10px] text-zinc-500">Payout</span>
                    <span className="text-zinc-300">0.00 x</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 rounded-r-full bg-zinc-900" />
                  <div className="w-full border-b-2 border-dashed border-zinc-900" />
                  <div className="w-4 h-4 rounded-l-full bg-zinc-900" />
                </div>
                <div className="flex flex-col font-medium items-center p-1">
                  <div className="flex items-center w-full gap-1 px-2 py-1 text-xs font-medium">
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
                      className="w-4 h-4 text-green-500"
                    >
                      <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                    </svg>
                    <span className="text-zinc-500">Bet ID</span>
                    <span className="ml-auto text-zinc-300">
                      68525060c4268e7a5ee98b73
                    </span>
                    <span className="rounded-full cursor-pointer text-zinc-500 active:text-green-500">
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
                        <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
                        <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex items-center w-full gap-1 px-2 py-1 text-xs font-medium">
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
                      className="w-4 h-4 text-zinc-500"
                    >
                      <path d="M5 9l14 0" />
                      <path d="M5 15l14 0" />
                      <path d="M11 4l-4 16" />
                      <path d="M17 4l-4 16" />
                    </svg>
                    <span className="text-zinc-500">Round ID</span>
                    <span className="ml-auto text-zinc-300">153053517</span>
                    <span className="rounded-full cursor-pointer text-zinc-500 active:text-green-500">
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
                        <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
                        <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex items-center w-full gap-1 px-2 py-1 text-xs font-medium">
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
                      className="w-4 h-4 text-zinc-500"
                    >
                      <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                      <path d="M16 3v4" />
                      <path d="M8 3v4" />
                      <path d="M4 11h16" />
                      <path d="M11 15h1" />
                      <path d="M12 15v3" />
                    </svg>
                    <span className="text-zinc-500">Date &amp; Time</span>
                    <span className="ml-auto text-zinc-300">
                      Jun 18, 2025, 11:06 AM
                    </span>
                  </div>
                </div>
                <div className="p-1">
                  <div className="flex flex-col items-center px-2 py-1 text-sm font-medium rounded bg-zinc-800 ">
                    <div
                      onClick={() => toggleTab(2)}
                      className="flex items-center justify-between w-full gap-1 p-2"
                    >
                      <span className="text-zinc-500">Round Details</span>
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
                        className={`w-6 h-6 text-zinc-500 transition-transform duration-300  ${
                          tab === 2 ? "rotate-180" : "rotate-[360deg]"
                        }`}
                      >
                        <path d="M6 9l6 6l6 -6" />
                      </svg>
                    </div>
                    <div
                      className={` grid-cols-5 gap-0.5 w-3/4 border border-zinc-700 rounded p-0.5  ${
                        tab === 2 ? "grid" : "hidden"
                      }`}
                    >
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-amber-600 
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700/50
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
                          xmlns="http://www.w3.org/2000/svg"
                          width={137}
                          height={122}
                          fill="none"
                          viewBox="0 0 137 122"
                        >
                          <path
                            fill="url(#paint0_linear_365_220)"
                            d="M84.903 105.102c-17.073 19.917-47.4 21.932-67.736 4.499-20.337-17.432-22.983-47.71-5.91-67.628s47.4-21.932 67.737-4.5c20.337 17.433 22.982 47.711 5.91 67.629"
                          />
                          <path
                            fill="#627079"
                            d="m58.82 24.132 37.11 31.81-8.477 13.15-.379-.002c-20.176-.062-37.278-14.86-40.24-34.817z"
                          />
                          <path
                            fill="#495258"
                            d="M95.929 55.942c-3.954 4.612-15.487 1.212-25.76-7.594S54.771 28.664 58.726 24.052c3.954-4.613 15.487-1.213 25.76 7.593S99.883 51.329 95.93 55.942"
                          />
                          <path
                            fill="#373E43"
                            d="M85.718 46.53c-1.977 2.307-7.488.825-12.31-3.308-4.823-4.133-7.13-9.354-5.152-11.66s7.488-.825 12.31 3.308c4.823 4.134 7.13 9.354 5.152 11.66"
                          />
                          <path
                            stroke="url(#paint1_linear_365_220)"
                            strokeLinecap="round"
                            strokeWidth={13}
                            d="m80 36.657 2.3-2.882a7.12 7.12 0 0 1 9.545-1.465v0a8.416 8.416 0 0 0 11.644-2.222l2.274-3.316"
                          />
                          <g filter="url(#filter0_d_365_220)">
                            <path
                              fill="url(#paint2_radial_365_220)"
                              d="m90 11 5.267 2.633a24 24 0 0 0 21.466 0L122 11l-2.994 8.484a24 24 0 0 0 .348 16.901L122 43l-5.267-2.633a24 24 0 0 0-21.466 0L90 43l2.84-7.573a24 24 0 0 0 0-16.854z"
                            />
                          </g>
                          <circle cx="111.5" cy="4.5" r="2.5" fill="#FCFCCF" />
                          <circle cx="107.5" cy="50.5" r="1.5" fill="#FFFFD1" />
                          <circle cx={80} cy={19} r={2} fill="#F6F6AD" />
                          <defs>
                            <linearGradient
                              id="paint0_linear_365_220"
                              x1="95.617"
                              x2="16.694"
                              y1="81.337"
                              y2="70.751"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#495258" />
                              <stop offset={1} stopColor="#8497A4" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_365_220"
                              x1="95.5"
                              x2={76}
                              y1={29}
                              y2={23}
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FFFF50" />
                              <stop offset={1} stopColor="#EFEF93" />
                            </linearGradient>
                            <radialGradient
                              id="paint2_radial_365_220"
                              cx={0}
                              cy={0}
                              r={1}
                              gradientTransform="matrix(0 16 -16 0 106 27)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff" />
                              <stop offset={1} stopColor="#FFFF42" />
                            </radialGradient>
                            <filter
                              id="filter0_d_365_220"
                              width="61.6"
                              height="61.6"
                              x="75.2"
                              y="0.2"
                              colorInterpolationFilters="sRGB"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                floodOpacity={0}
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset dy={4} />
                              <feGaussianBlur stdDeviation="7.4" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0.258824 0 0 0 1 0" />
                              <feBlend
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_365_220"
                              />
                              <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_365_220"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700/50
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
                          xmlns="http://www.w3.org/2000/svg"
                          width={137}
                          height={122}
                          fill="none"
                          viewBox="0 0 137 122"
                        >
                          <path
                            fill="url(#paint0_linear_365_220)"
                            d="M84.903 105.102c-17.073 19.917-47.4 21.932-67.736 4.499-20.337-17.432-22.983-47.71-5.91-67.628s47.4-21.932 67.737-4.5c20.337 17.433 22.982 47.711 5.91 67.629"
                          />
                          <path
                            fill="#627079"
                            d="m58.82 24.132 37.11 31.81-8.477 13.15-.379-.002c-20.176-.062-37.278-14.86-40.24-34.817z"
                          />
                          <path
                            fill="#495258"
                            d="M95.929 55.942c-3.954 4.612-15.487 1.212-25.76-7.594S54.771 28.664 58.726 24.052c3.954-4.613 15.487-1.213 25.76 7.593S99.883 51.329 95.93 55.942"
                          />
                          <path
                            fill="#373E43"
                            d="M85.718 46.53c-1.977 2.307-7.488.825-12.31-3.308-4.823-4.133-7.13-9.354-5.152-11.66s7.488-.825 12.31 3.308c4.823 4.134 7.13 9.354 5.152 11.66"
                          />
                          <path
                            stroke="url(#paint1_linear_365_220)"
                            strokeLinecap="round"
                            strokeWidth={13}
                            d="m80 36.657 2.3-2.882a7.12 7.12 0 0 1 9.545-1.465v0a8.416 8.416 0 0 0 11.644-2.222l2.274-3.316"
                          />
                          <g filter="url(#filter0_d_365_220)">
                            <path
                              fill="url(#paint2_radial_365_220)"
                              d="m90 11 5.267 2.633a24 24 0 0 0 21.466 0L122 11l-2.994 8.484a24 24 0 0 0 .348 16.901L122 43l-5.267-2.633a24 24 0 0 0-21.466 0L90 43l2.84-7.573a24 24 0 0 0 0-16.854z"
                            />
                          </g>
                          <circle cx="111.5" cy="4.5" r="2.5" fill="#FCFCCF" />
                          <circle cx="107.5" cy="50.5" r="1.5" fill="#FFFFD1" />
                          <circle cx={80} cy={19} r={2} fill="#F6F6AD" />
                          <defs>
                            <linearGradient
                              id="paint0_linear_365_220"
                              x1="95.617"
                              x2="16.694"
                              y1="81.337"
                              y2="70.751"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#495258" />
                              <stop offset={1} stopColor="#8497A4" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_365_220"
                              x1="95.5"
                              x2={76}
                              y1={29}
                              y2={23}
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FFFF50" />
                              <stop offset={1} stopColor="#EFEF93" />
                            </linearGradient>
                            <radialGradient
                              id="paint2_radial_365_220"
                              cx={0}
                              cy={0}
                              r={1}
                              gradientTransform="matrix(0 16 -16 0 106 27)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff" />
                              <stop offset={1} stopColor="#FFFF42" />
                            </radialGradient>
                            <filter
                              id="filter0_d_365_220"
                              width="61.6"
                              height="61.6"
                              x="75.2"
                              y="0.2"
                              colorInterpolationFilters="sRGB"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                floodOpacity={0}
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset dy={4} />
                              <feGaussianBlur stdDeviation="7.4" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0.258824 0 0 0 1 0" />
                              <feBlend
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_365_220"
                              />
                              <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_365_220"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700/50
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
                          xmlns="http://www.w3.org/2000/svg"
                          width={137}
                          height={122}
                          fill="none"
                          viewBox="0 0 137 122"
                        >
                          <path
                            fill="url(#paint0_linear_365_220)"
                            d="M84.903 105.102c-17.073 19.917-47.4 21.932-67.736 4.499-20.337-17.432-22.983-47.71-5.91-67.628s47.4-21.932 67.737-4.5c20.337 17.433 22.982 47.711 5.91 67.629"
                          />
                          <path
                            fill="#627079"
                            d="m58.82 24.132 37.11 31.81-8.477 13.15-.379-.002c-20.176-.062-37.278-14.86-40.24-34.817z"
                          />
                          <path
                            fill="#495258"
                            d="M95.929 55.942c-3.954 4.612-15.487 1.212-25.76-7.594S54.771 28.664 58.726 24.052c3.954-4.613 15.487-1.213 25.76 7.593S99.883 51.329 95.93 55.942"
                          />
                          <path
                            fill="#373E43"
                            d="M85.718 46.53c-1.977 2.307-7.488.825-12.31-3.308-4.823-4.133-7.13-9.354-5.152-11.66s7.488-.825 12.31 3.308c4.823 4.134 7.13 9.354 5.152 11.66"
                          />
                          <path
                            stroke="url(#paint1_linear_365_220)"
                            strokeLinecap="round"
                            strokeWidth={13}
                            d="m80 36.657 2.3-2.882a7.12 7.12 0 0 1 9.545-1.465v0a8.416 8.416 0 0 0 11.644-2.222l2.274-3.316"
                          />
                          <g filter="url(#filter0_d_365_220)">
                            <path
                              fill="url(#paint2_radial_365_220)"
                              d="m90 11 5.267 2.633a24 24 0 0 0 21.466 0L122 11l-2.994 8.484a24 24 0 0 0 .348 16.901L122 43l-5.267-2.633a24 24 0 0 0-21.466 0L90 43l2.84-7.573a24 24 0 0 0 0-16.854z"
                            />
                          </g>
                          <circle cx="111.5" cy="4.5" r="2.5" fill="#FCFCCF" />
                          <circle cx="107.5" cy="50.5" r="1.5" fill="#FFFFD1" />
                          <circle cx={80} cy={19} r={2} fill="#F6F6AD" />
                          <defs>
                            <linearGradient
                              id="paint0_linear_365_220"
                              x1="95.617"
                              x2="16.694"
                              y1="81.337"
                              y2="70.751"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#495258" />
                              <stop offset={1} stopColor="#8497A4" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_365_220"
                              x1="95.5"
                              x2={76}
                              y1={29}
                              y2={23}
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FFFF50" />
                              <stop offset={1} stopColor="#EFEF93" />
                            </linearGradient>
                            <radialGradient
                              id="paint2_radial_365_220"
                              cx={0}
                              cy={0}
                              r={1}
                              gradientTransform="matrix(0 16 -16 0 106 27)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff" />
                              <stop offset={1} stopColor="#FFFF42" />
                            </radialGradient>
                            <filter
                              id="filter0_d_365_220"
                              width="61.6"
                              height="61.6"
                              x="75.2"
                              y="0.2"
                              colorInterpolationFilters="sRGB"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                floodOpacity={0}
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset dy={4} />
                              <feGaussianBlur stdDeviation="7.4" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0.258824 0 0 0 1 0" />
                              <feBlend
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_365_220"
                              />
                              <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_365_220"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-amber-600 
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700/50
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
                          xmlns="http://www.w3.org/2000/svg"
                          width={137}
                          height={122}
                          fill="none"
                          viewBox="0 0 137 122"
                        >
                          <path
                            fill="url(#paint0_linear_365_220)"
                            d="M84.903 105.102c-17.073 19.917-47.4 21.932-67.736 4.499-20.337-17.432-22.983-47.71-5.91-67.628s47.4-21.932 67.737-4.5c20.337 17.433 22.982 47.711 5.91 67.629"
                          />
                          <path
                            fill="#627079"
                            d="m58.82 24.132 37.11 31.81-8.477 13.15-.379-.002c-20.176-.062-37.278-14.86-40.24-34.817z"
                          />
                          <path
                            fill="#495258"
                            d="M95.929 55.942c-3.954 4.612-15.487 1.212-25.76-7.594S54.771 28.664 58.726 24.052c3.954-4.613 15.487-1.213 25.76 7.593S99.883 51.329 95.93 55.942"
                          />
                          <path
                            fill="#373E43"
                            d="M85.718 46.53c-1.977 2.307-7.488.825-12.31-3.308-4.823-4.133-7.13-9.354-5.152-11.66s7.488-.825 12.31 3.308c4.823 4.134 7.13 9.354 5.152 11.66"
                          />
                          <path
                            stroke="url(#paint1_linear_365_220)"
                            strokeLinecap="round"
                            strokeWidth={13}
                            d="m80 36.657 2.3-2.882a7.12 7.12 0 0 1 9.545-1.465v0a8.416 8.416 0 0 0 11.644-2.222l2.274-3.316"
                          />
                          <g filter="url(#filter0_d_365_220)">
                            <path
                              fill="url(#paint2_radial_365_220)"
                              d="m90 11 5.267 2.633a24 24 0 0 0 21.466 0L122 11l-2.994 8.484a24 24 0 0 0 .348 16.901L122 43l-5.267-2.633a24 24 0 0 0-21.466 0L90 43l2.84-7.573a24 24 0 0 0 0-16.854z"
                            />
                          </g>
                          <circle cx="111.5" cy="4.5" r="2.5" fill="#FCFCCF" />
                          <circle cx="107.5" cy="50.5" r="1.5" fill="#FFFFD1" />
                          <circle cx={80} cy={19} r={2} fill="#F6F6AD" />
                          <defs>
                            <linearGradient
                              id="paint0_linear_365_220"
                              x1="95.617"
                              x2="16.694"
                              y1="81.337"
                              y2="70.751"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#495258" />
                              <stop offset={1} stopColor="#8497A4" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_365_220"
                              x1="95.5"
                              x2={76}
                              y1={29}
                              y2={23}
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FFFF50" />
                              <stop offset={1} stopColor="#EFEF93" />
                            </linearGradient>
                            <radialGradient
                              id="paint2_radial_365_220"
                              cx={0}
                              cy={0}
                              r={1}
                              gradientTransform="matrix(0 16 -16 0 106 27)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff" />
                              <stop offset={1} stopColor="#FFFF42" />
                            </radialGradient>
                            <filter
                              id="filter0_d_365_220"
                              width="61.6"
                              height="61.6"
                              x="75.2"
                              y="0.2"
                              colorInterpolationFilters="sRGB"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                floodOpacity={0}
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset dy={4} />
                              <feGaussianBlur stdDeviation="7.4" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0.258824 0 0 0 1 0" />
                              <feBlend
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_365_220"
                              />
                              <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_365_220"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative w-full flex text-zinc-100 text-sm pt-4 flex-col bg-zinc-800/50 rounded-lg cursor-pointer">
                <div className="flex flex-col font-medium items-center">
                  <span className="flex text-lg font-semibold tracking-wider items-center gap-1 text-green-500">
                    ₹ 1.50{" "}
                    <span className="text-xs font-medium text-zinc-500">
                      WON
                    </span>
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-1 p-1 ">
                  <div className="flex flex-col items-center px-2 py-1 text-sm font-medium rounded bg-zinc-800 ">
                    <span className="text-[10px] text-zinc-500">
                      Bet Amount
                    </span>
                    <span className="text-zinc-300">₹ 1.50</span>
                  </div>
                  <div className="flex flex-col items-center px-2 py-1 text-sm font-medium rounded bg-zinc-800 ">
                    <span className="text-[10px] text-zinc-500">Payout</span>
                    <span className="text-zinc-300">2.00 x</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 rounded-r-full bg-zinc-900" />
                  <div className="w-full border-b-2 border-dashed border-zinc-900" />
                  <div className="w-4 h-4 rounded-l-full bg-zinc-900" />
                </div>
                <div className="flex flex-col font-medium items-center p-1">
                  <div className="flex items-center w-full gap-1 px-2 py-1 text-xs font-medium">
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
                      className="w-4 h-4 text-green-500"
                    >
                      <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                    </svg>
                    <span className="text-zinc-500">Bet ID</span>
                    <span className="ml-auto text-zinc-300">
                      68525011a6899005260db13d
                    </span>
                    <span className="rounded-full cursor-pointer text-zinc-500 active:text-green-500">
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
                        <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
                        <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex items-center w-full gap-1 px-2 py-1 text-xs font-medium">
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
                      className="w-4 h-4 text-zinc-500"
                    >
                      <path d="M5 9l14 0" />
                      <path d="M5 15l14 0" />
                      <path d="M11 4l-4 16" />
                      <path d="M17 4l-4 16" />
                    </svg>
                    <span className="text-zinc-500">Round ID</span>
                    <span className="ml-auto text-zinc-300">153053228</span>
                    <span className="rounded-full cursor-pointer text-zinc-500 active:text-green-500">
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
                        <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
                        <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex items-center w-full gap-1 px-2 py-1 text-xs font-medium">
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
                      className="w-4 h-4 text-zinc-500"
                    >
                      <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                      <path d="M16 3v4" />
                      <path d="M8 3v4" />
                      <path d="M4 11h16" />
                      <path d="M11 15h1" />
                      <path d="M12 15v3" />
                    </svg>
                    <span className="text-zinc-500">Date &amp; Time</span>
                    <span className="ml-auto text-zinc-300">
                      Jun 18, 2025, 11:05 AM
                    </span>
                  </div>
                </div>
                <div className="p-1">
                  <div className="flex flex-col items-center px-2 py-1 text-sm font-medium rounded bg-zinc-800 ">
                    <div
                      onClick={() => toggleTab(3)}
                      className="flex items-center justify-between w-full gap-1 p-2"
                    >
                      <span className="text-zinc-500">Round Details</span>
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
                        className={`w-6 h-6 text-zinc-500 transition-transform duration-300  ${
                          tab === 3 ? "rotate-180" : "rotate-[360deg]"
                        }`}
                      >
                        <path d="M6 9l6 6l6 -6" />
                      </svg>
                    </div>
                    <div
                      className={` grid-cols-5 gap-0.5 w-3/4 border border-zinc-700 rounded p-0.5  ${
                        tab === 3 ? "grid" : "hidden"
                      }`}
                    >
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-amber-600 
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700/50
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
                          xmlns="http://www.w3.org/2000/svg"
                          width={137}
                          height={122}
                          fill="none"
                          viewBox="0 0 137 122"
                        >
                          <path
                            fill="url(#paint0_linear_365_220)"
                            d="M84.903 105.102c-17.073 19.917-47.4 21.932-67.736 4.499-20.337-17.432-22.983-47.71-5.91-67.628s47.4-21.932 67.737-4.5c20.337 17.433 22.982 47.711 5.91 67.629"
                          />
                          <path
                            fill="#627079"
                            d="m58.82 24.132 37.11 31.81-8.477 13.15-.379-.002c-20.176-.062-37.278-14.86-40.24-34.817z"
                          />
                          <path
                            fill="#495258"
                            d="M95.929 55.942c-3.954 4.612-15.487 1.212-25.76-7.594S54.771 28.664 58.726 24.052c3.954-4.613 15.487-1.213 25.76 7.593S99.883 51.329 95.93 55.942"
                          />
                          <path
                            fill="#373E43"
                            d="M85.718 46.53c-1.977 2.307-7.488.825-12.31-3.308-4.823-4.133-7.13-9.354-5.152-11.66s7.488-.825 12.31 3.308c4.823 4.134 7.13 9.354 5.152 11.66"
                          />
                          <path
                            stroke="url(#paint1_linear_365_220)"
                            strokeLinecap="round"
                            strokeWidth={13}
                            d="m80 36.657 2.3-2.882a7.12 7.12 0 0 1 9.545-1.465v0a8.416 8.416 0 0 0 11.644-2.222l2.274-3.316"
                          />
                          <g filter="url(#filter0_d_365_220)">
                            <path
                              fill="url(#paint2_radial_365_220)"
                              d="m90 11 5.267 2.633a24 24 0 0 0 21.466 0L122 11l-2.994 8.484a24 24 0 0 0 .348 16.901L122 43l-5.267-2.633a24 24 0 0 0-21.466 0L90 43l2.84-7.573a24 24 0 0 0 0-16.854z"
                            />
                          </g>
                          <circle cx="111.5" cy="4.5" r="2.5" fill="#FCFCCF" />
                          <circle cx="107.5" cy="50.5" r="1.5" fill="#FFFFD1" />
                          <circle cx={80} cy={19} r={2} fill="#F6F6AD" />
                          <defs>
                            <linearGradient
                              id="paint0_linear_365_220"
                              x1="95.617"
                              x2="16.694"
                              y1="81.337"
                              y2="70.751"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#495258" />
                              <stop offset={1} stopColor="#8497A4" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_365_220"
                              x1="95.5"
                              x2={76}
                              y1={29}
                              y2={23}
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FFFF50" />
                              <stop offset={1} stopColor="#EFEF93" />
                            </linearGradient>
                            <radialGradient
                              id="paint2_radial_365_220"
                              cx={0}
                              cy={0}
                              r={1}
                              gradientTransform="matrix(0 16 -16 0 106 27)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff" />
                              <stop offset={1} stopColor="#FFFF42" />
                            </radialGradient>
                            <filter
                              id="filter0_d_365_220"
                              width="61.6"
                              height="61.6"
                              x="75.2"
                              y="0.2"
                              colorInterpolationFilters="sRGB"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                floodOpacity={0}
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset dy={4} />
                              <feGaussianBlur stdDeviation="7.4" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0.258824 0 0 0 1 0" />
                              <feBlend
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_365_220"
                              />
                              <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_365_220"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700/50
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
                          xmlns="http://www.w3.org/2000/svg"
                          width={137}
                          height={122}
                          fill="none"
                          viewBox="0 0 137 122"
                        >
                          <path
                            fill="url(#paint0_linear_365_220)"
                            d="M84.903 105.102c-17.073 19.917-47.4 21.932-67.736 4.499-20.337-17.432-22.983-47.71-5.91-67.628s47.4-21.932 67.737-4.5c20.337 17.433 22.982 47.711 5.91 67.629"
                          />
                          <path
                            fill="#627079"
                            d="m58.82 24.132 37.11 31.81-8.477 13.15-.379-.002c-20.176-.062-37.278-14.86-40.24-34.817z"
                          />
                          <path
                            fill="#495258"
                            d="M95.929 55.942c-3.954 4.612-15.487 1.212-25.76-7.594S54.771 28.664 58.726 24.052c3.954-4.613 15.487-1.213 25.76 7.593S99.883 51.329 95.93 55.942"
                          />
                          <path
                            fill="#373E43"
                            d="M85.718 46.53c-1.977 2.307-7.488.825-12.31-3.308-4.823-4.133-7.13-9.354-5.152-11.66s7.488-.825 12.31 3.308c4.823 4.134 7.13 9.354 5.152 11.66"
                          />
                          <path
                            stroke="url(#paint1_linear_365_220)"
                            strokeLinecap="round"
                            strokeWidth={13}
                            d="m80 36.657 2.3-2.882a7.12 7.12 0 0 1 9.545-1.465v0a8.416 8.416 0 0 0 11.644-2.222l2.274-3.316"
                          />
                          <g filter="url(#filter0_d_365_220)">
                            <path
                              fill="url(#paint2_radial_365_220)"
                              d="m90 11 5.267 2.633a24 24 0 0 0 21.466 0L122 11l-2.994 8.484a24 24 0 0 0 .348 16.901L122 43l-5.267-2.633a24 24 0 0 0-21.466 0L90 43l2.84-7.573a24 24 0 0 0 0-16.854z"
                            />
                          </g>
                          <circle cx="111.5" cy="4.5" r="2.5" fill="#FCFCCF" />
                          <circle cx="107.5" cy="50.5" r="1.5" fill="#FFFFD1" />
                          <circle cx={80} cy={19} r={2} fill="#F6F6AD" />
                          <defs>
                            <linearGradient
                              id="paint0_linear_365_220"
                              x1="95.617"
                              x2="16.694"
                              y1="81.337"
                              y2="70.751"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#495258" />
                              <stop offset={1} stopColor="#8497A4" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_365_220"
                              x1="95.5"
                              x2={76}
                              y1={29}
                              y2={23}
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FFFF50" />
                              <stop offset={1} stopColor="#EFEF93" />
                            </linearGradient>
                            <radialGradient
                              id="paint2_radial_365_220"
                              cx={0}
                              cy={0}
                              r={1}
                              gradientTransform="matrix(0 16 -16 0 106 27)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff" />
                              <stop offset={1} stopColor="#FFFF42" />
                            </radialGradient>
                            <filter
                              id="filter0_d_365_220"
                              width="61.6"
                              height="61.6"
                              x="75.2"
                              y="0.2"
                              colorInterpolationFilters="sRGB"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                floodOpacity={0}
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset dy={4} />
                              <feGaussianBlur stdDeviation="7.4" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0.258824 0 0 0 1 0" />
                              <feBlend
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_365_220"
                              />
                              <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_365_220"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700/50
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
                          xmlns="http://www.w3.org/2000/svg"
                          width={137}
                          height={122}
                          fill="none"
                          viewBox="0 0 137 122"
                        >
                          <path
                            fill="url(#paint0_linear_365_220)"
                            d="M84.903 105.102c-17.073 19.917-47.4 21.932-67.736 4.499-20.337-17.432-22.983-47.71-5.91-67.628s47.4-21.932 67.737-4.5c20.337 17.433 22.982 47.711 5.91 67.629"
                          />
                          <path
                            fill="#627079"
                            d="m58.82 24.132 37.11 31.81-8.477 13.15-.379-.002c-20.176-.062-37.278-14.86-40.24-34.817z"
                          />
                          <path
                            fill="#495258"
                            d="M95.929 55.942c-3.954 4.612-15.487 1.212-25.76-7.594S54.771 28.664 58.726 24.052c3.954-4.613 15.487-1.213 25.76 7.593S99.883 51.329 95.93 55.942"
                          />
                          <path
                            fill="#373E43"
                            d="M85.718 46.53c-1.977 2.307-7.488.825-12.31-3.308-4.823-4.133-7.13-9.354-5.152-11.66s7.488-.825 12.31 3.308c4.823 4.134 7.13 9.354 5.152 11.66"
                          />
                          <path
                            stroke="url(#paint1_linear_365_220)"
                            strokeLinecap="round"
                            strokeWidth={13}
                            d="m80 36.657 2.3-2.882a7.12 7.12 0 0 1 9.545-1.465v0a8.416 8.416 0 0 0 11.644-2.222l2.274-3.316"
                          />
                          <g filter="url(#filter0_d_365_220)">
                            <path
                              fill="url(#paint2_radial_365_220)"
                              d="m90 11 5.267 2.633a24 24 0 0 0 21.466 0L122 11l-2.994 8.484a24 24 0 0 0 .348 16.901L122 43l-5.267-2.633a24 24 0 0 0-21.466 0L90 43l2.84-7.573a24 24 0 0 0 0-16.854z"
                            />
                          </g>
                          <circle cx="111.5" cy="4.5" r="2.5" fill="#FCFCCF" />
                          <circle cx="107.5" cy="50.5" r="1.5" fill="#FFFFD1" />
                          <circle cx={80} cy={19} r={2} fill="#F6F6AD" />
                          <defs>
                            <linearGradient
                              id="paint0_linear_365_220"
                              x1="95.617"
                              x2="16.694"
                              y1="81.337"
                              y2="70.751"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#495258" />
                              <stop offset={1} stopColor="#8497A4" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_365_220"
                              x1="95.5"
                              x2={76}
                              y1={29}
                              y2={23}
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FFFF50" />
                              <stop offset={1} stopColor="#EFEF93" />
                            </linearGradient>
                            <radialGradient
                              id="paint2_radial_365_220"
                              cx={0}
                              cy={0}
                              r={1}
                              gradientTransform="matrix(0 16 -16 0 106 27)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff" />
                              <stop offset={1} stopColor="#FFFF42" />
                            </radialGradient>
                            <filter
                              id="filter0_d_365_220"
                              width="61.6"
                              height="61.6"
                              x="75.2"
                              y="0.2"
                              colorInterpolationFilters="sRGB"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                floodOpacity={0}
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset dy={4} />
                              <feGaussianBlur stdDeviation="7.4" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0.258824 0 0 0 1 0" />
                              <feBlend
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_365_220"
                              />
                              <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_365_220"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-amber-600 
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700/50
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
                          xmlns="http://www.w3.org/2000/svg"
                          width={137}
                          height={122}
                          fill="none"
                          viewBox="0 0 137 122"
                        >
                          <path
                            fill="url(#paint0_linear_365_220)"
                            d="M84.903 105.102c-17.073 19.917-47.4 21.932-67.736 4.499-20.337-17.432-22.983-47.71-5.91-67.628s47.4-21.932 67.737-4.5c20.337 17.433 22.982 47.711 5.91 67.629"
                          />
                          <path
                            fill="#627079"
                            d="m58.82 24.132 37.11 31.81-8.477 13.15-.379-.002c-20.176-.062-37.278-14.86-40.24-34.817z"
                          />
                          <path
                            fill="#495258"
                            d="M95.929 55.942c-3.954 4.612-15.487 1.212-25.76-7.594S54.771 28.664 58.726 24.052c3.954-4.613 15.487-1.213 25.76 7.593S99.883 51.329 95.93 55.942"
                          />
                          <path
                            fill="#373E43"
                            d="M85.718 46.53c-1.977 2.307-7.488.825-12.31-3.308-4.823-4.133-7.13-9.354-5.152-11.66s7.488-.825 12.31 3.308c4.823 4.134 7.13 9.354 5.152 11.66"
                          />
                          <path
                            stroke="url(#paint1_linear_365_220)"
                            strokeLinecap="round"
                            strokeWidth={13}
                            d="m80 36.657 2.3-2.882a7.12 7.12 0 0 1 9.545-1.465v0a8.416 8.416 0 0 0 11.644-2.222l2.274-3.316"
                          />
                          <g filter="url(#filter0_d_365_220)">
                            <path
                              fill="url(#paint2_radial_365_220)"
                              d="m90 11 5.267 2.633a24 24 0 0 0 21.466 0L122 11l-2.994 8.484a24 24 0 0 0 .348 16.901L122 43l-5.267-2.633a24 24 0 0 0-21.466 0L90 43l2.84-7.573a24 24 0 0 0 0-16.854z"
                            />
                          </g>
                          <circle cx="111.5" cy="4.5" r="2.5" fill="#FCFCCF" />
                          <circle cx="107.5" cy="50.5" r="1.5" fill="#FFFFD1" />
                          <circle cx={80} cy={19} r={2} fill="#F6F6AD" />
                          <defs>
                            <linearGradient
                              id="paint0_linear_365_220"
                              x1="95.617"
                              x2="16.694"
                              y1="81.337"
                              y2="70.751"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#495258" />
                              <stop offset={1} stopColor="#8497A4" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_365_220"
                              x1="95.5"
                              x2={76}
                              y1={29}
                              y2={23}
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FFFF50" />
                              <stop offset={1} stopColor="#EFEF93" />
                            </linearGradient>
                            <radialGradient
                              id="paint2_radial_365_220"
                              cx={0}
                              cy={0}
                              r={1}
                              gradientTransform="matrix(0 16 -16 0 106 27)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#fff" />
                              <stop offset={1} stopColor="#FFFF42" />
                            </radialGradient>
                            <filter
                              id="filter0_d_365_220"
                              width="61.6"
                              height="61.6"
                              x="75.2"
                              y="0.2"
                              colorInterpolationFilters="sRGB"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                floodOpacity={0}
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset dy={4} />
                              <feGaussianBlur stdDeviation="7.4" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0.258824 0 0 0 1 0" />
                              <feBlend
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_365_220"
                              />
                              <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_365_220"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                      <div
                        className="
                              aspect-square w-full border rounded-sm flex items-center justify-center
                              bg-zinc-700
                              border-transparent opacity-50
                              "
                      >
                        <svg
                          className="w-4/5 h-4/5 animate__animated animate__zoomIn animate__faster"
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
                            fill="#fff"
                            d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center w-full gap-1">
              <span className="ml-2 text-xs font-medium text-zinc-400">
                Page 1 of 2
              </span>
              <button
                className="pl-2 pr-3 flex items-center gap-1 py-2 ml-auto text-xs font-medium border rounded-full text-zinc-100 border-zinc-100/10 bg-zinc-800 opacity-50 cursor-not-allowed"
                disabled
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
                Previous
              </button>
              <button className="pl-3 pr-2 flex items-center gap-1 py-2 text-xs font-medium border rounded-full text-zinc-100 border-zinc-100/10 bg-zinc-800 ">
                Next
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
                  <path d="M9 6l6 6l-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetsModal;
