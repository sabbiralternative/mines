import sound from "../assets/sound";

export const playBetSound = () => {
  return new Audio(sound.sound_bet).play();
};
export const playGemSound = () => {
  return new Audio(sound.sound_gems).play();
};
export const playWinSound = () => {
  return new Audio(sound.win).play();
};
export const playSoundMine = () => {
  return new Audio(sound.sound_mines).play();
};
