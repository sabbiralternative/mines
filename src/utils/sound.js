import sound from "../assets/sound";

export const placeBetSound = () => {
  return new Audio(sound.sound_bet).play();
};
export const placeGemSound = () => {
  return new Audio(sound.sound_gems).play();
};
export const placeWinSound = () => {
  return new Audio(sound.win).play();
};
