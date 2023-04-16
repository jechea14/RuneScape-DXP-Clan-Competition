export const skillIcons = [
  "/images/icons/Overall-icon.webp", //Overall
  "/images/icons/Attack-icon.webp", //Attack
  "/images/icons/Defence-icon.webp", //Defence
  "/images/icons/Strength-icon.webp", //Strength
  "/images/icons/Constitution-icon.webp", //Constitution
  "/images/icons/Ranged-icon.webp", //Ranged
  "/images/icons/Prayer-icon.webp", //Prayer
  "/images/icons/Magic-icon.webp", //Magic
  "/images/icons/Cooking-icon.webp", //Cooking
  "/images/icons/Woodcutting-icon.webp", //Woodcutting
  "/images/icons/Fletching-icon.webp", //Fletching
  "/images/icons/Fishing-icon.webp", //Fishing
  "/images/icons/Firemaking-icon.webp", //Firemaking
  "/images/icons/Crafting-icon.webp", //Crafting
  "/images/icons/Smithing-icon.webp", //Smithing
  "/images/icons/Mining-icon.webp", //Mining
  "/images/icons/Herblore-icon.webp", //Herblore
  "/images/icons/Agility-icon.webp", //Agility
  "/images/icons/Thieving-icon.webp", //Thieving
  "/images/icons/Slayer-icon.webp", //Slayer
  "/images/icons/Farming-icon.webp", //Farming
  "/images/icons/Runecrafting-icon.webp", //Runecrafting
  "/images/icons/Hunter-icon.webp", //Hunter
  "/images/icons/Construction-icon.webp", //Construction
  "/images/icons/Summoning-icon.webp", //Summoning
  "/images/icons/Dungeoneering-icon.webp", //Dungeoneering
  "/images/icons/Divination-icon.webp", //Divination
  "/images/icons/Invention-icon.webp", //Invention
  "/images/icons/Archaeology-icon.webp", //Archaeology
];

export const skillModifiers = [
  0.5, //Attack
  0.5, //Defence
  0.5, //Strength
  0.5, //Constitution
  0.5, //Ranged
  2, //Prayer
  0.5, //Magic
  2, //Cooking
  3, //Woodcutting
  1, //Fletching
  3, //Fishing
  2, //Firemaking
  1, //Crafting
  2, //Smithing
  3, //Mining
  0.5, //Herblore
  3, //Agility
  1, //Thieving
  2, //Slayer
  0.5, //Farming
  3, //Runecrafting
  2, //Hunter
  2, //Construction
  0.5, //Summoning
  0.5, //Dungeoneering
  3, //Divination
  0.5, //Invention
  0.5, //Archaeology
];

export const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};
