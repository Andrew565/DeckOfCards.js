import { standard52DeckOfCardsWithJokers } from "../standard52CardsAndJokers";

const images: { [x: string]: string } = {};
standard52DeckOfCardsWithJokers.forEach(async (card) => {
  const imageName = card.name.toLowerCase().replace(" ", "_");
  images[imageName] = `./${imageName}.svg`;
});

export default images;
