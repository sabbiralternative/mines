import { useOrderMutation } from "../../redux/features/events/events";
import { generateRoundId } from "../../utils/generateRoundId";
import { playSoundMine } from "../../utils/sound";

const Boxes = ({ isBetPlaced, boxes, setBoxes, activeBoxCount }) => {
  const [addOrder] = useOrderMutation();
  const handleBoxClick = async (box) => {
    if (isBetPlaced) {
      playSoundMine();
      const round_id = generateRoundId();
      const payload = {
        round_id,
        type: "select_box",
        box_id: box?.id,
        box_count: activeBoxCount,
        eventId: 20002,
      };

      const updatedBoxes = boxes?.map((boxObj) =>
        box?.name === boxObj.name
          ? { ...boxObj, isBlue: true, showStar: true }
          : boxObj
      );
      setBoxes(updatedBoxes);

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
                {/* <img
                  className={`w-[40px] lg:w-[50px] h-[40px] lg:h-[50px] transform transition-transform duration-300 ${
                    box.isBlue ? "scale-100" : "scale-0"
                  }`}
                  src={images.diamond}
                  alt=""
                /> */}
                {box?.bomb ? (
                  <svg
                    className="w-[45px] lg:w-[55px] h-[45px] lg:h-[55px] animate__animated animate__zoomIn animate__faster"
                    xmlns="http://www.w3.org/2000/svg"
                    width="137"
                    height="122"
                    fill="none"
                    viewBox="0 0 137 122"
                  >
                    <path
                      fill="url(#paint0_linear_365_220)"
                      d="M84.903 105.102c-17.073 19.917-47.4 21.932-67.736 4.499-20.337-17.432-22.983-47.71-5.91-67.628s47.4-21.932 67.737-4.5c20.337 17.433 22.982 47.711 5.91 67.629"
                    ></path>
                    <path
                      fill="#627079"
                      d="m58.82 24.132 37.11 31.81-8.477 13.15-.379-.002c-20.176-.062-37.278-14.86-40.24-34.817z"
                    ></path>
                    <path
                      fill="#495258"
                      d="M95.929 55.942c-3.954 4.612-15.487 1.212-25.76-7.594S54.771 28.664 58.726 24.052c3.954-4.613 15.487-1.213 25.76 7.593S99.883 51.329 95.93 55.942"
                    ></path>
                    <path
                      fill="#373E43"
                      d="M85.718 46.53c-1.977 2.307-7.488.825-12.31-3.308-4.823-4.133-7.13-9.354-5.152-11.66s7.488-.825 12.31 3.308c4.823 4.134 7.13 9.354 5.152 11.66"
                    ></path>
                    <path
                      stroke="url(#paint1_linear_365_220)"
                      strokeLinecap="round"
                      strokeWidth="13"
                      d="m80 36.657 2.3-2.882a7.12 7.12 0 0 1 9.545-1.465v0a8.416 8.416 0 0 0 11.644-2.222l2.274-3.316"
                    ></path>
                    <g filter="url(#filter0_d_365_220)">
                      <path
                        fill="url(#paint2_radial_365_220)"
                        d="m90 11 5.267 2.633a24 24 0 0 0 21.466 0L122 11l-2.994 8.484a24 24 0 0 0 .348 16.901L122 43l-5.267-2.633a24 24 0 0 0-21.466 0L90 43l2.84-7.573a24 24 0 0 0 0-16.854z"
                      ></path>
                    </g>
                    <circle cx="111.5" cy="4.5" r="2.5" fill="#FCFCCF"></circle>
                    <circle
                      cx="107.5"
                      cy="50.5"
                      r="1.5"
                      fill="#FFFFD1"
                    ></circle>
                    <circle cx="80" cy="19" r="2" fill="#F6F6AD"></circle>
                    <defs>
                      <linearGradient
                        id="paint0_linear_365_220"
                        x1="95.617"
                        x2="16.694"
                        y1="81.337"
                        y2="70.751"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#495258"></stop>
                        <stop offset="1" stopColor="#8497A4"></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_365_220"
                        x1="95.5"
                        x2="76"
                        y1="29"
                        y2="23"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFFF50"></stop>
                        <stop offset="1" stopColor="#EFEF93"></stop>
                      </linearGradient>
                      <radialGradient
                        id="paint2_radial_365_220"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="matrix(0 16 -16 0 106 27)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff"></stop>
                        <stop offset="1" stopColor="#FFFF42"></stop>
                      </radialGradient>
                      <filter
                        id="filter0_d_365_220"
                        width="61.6"
                        height="61.6"
                        x="75.2"
                        y="0.2"
                        filterUnits="userSpaceOnUse"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        ></feColorMatrix>
                        <feOffset dy="4"></feOffset>
                        <feGaussianBlur stdDeviation="7.4"></feGaussianBlur>
                        <feComposite
                          in2="hardAlpha"
                          operator="out"
                        ></feComposite>
                        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0.258824 0 0 0 1 0"></feColorMatrix>
                        <feBlend
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_365_220"
                        ></feBlend>
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow_365_220"
                          result="shape"
                        ></feBlend>
                      </filter>
                    </defs>
                  </svg>
                ) : (
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
                      className={`${box.isBlue ? "animate-star-burst" : ""}`}
                      fill="#fff"
                      d="M104.048 2.955c.298-.924 1.606-.924 1.904 0l5.861 18.199a1 1 0 0 0 .655.648l18.462 5.743c.938.292.938 1.618 0 1.91l-18.462 5.743a1 1 0 0 0-.655.648l-5.861 18.199c-.298.924-1.606.924-1.904 0l-5.86-18.199a1 1 0 0 0-.656-.648L79.07 29.455c-.937-.292-.937-1.618 0-1.91l18.462-5.743a1 1 0 0 0 .655-.648zM32.049 72.93c.3-.922 1.603-.922 1.902 0l3.697 11.388a1 1 0 0 0 .656.647l11.6 3.58c.94.29.94 1.62 0 1.91l-11.6 3.58a1 1 0 0 0-.656.647l-3.697 11.388c-.3.922-1.603.922-1.902 0l-3.697-11.388a1 1 0 0 0-.656-.647l-11.6-3.58c-.94-.29-.94-1.62 0-1.91l11.6-3.58a1 1 0 0 0 .656-.647z"
                    />
                  </svg>
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
