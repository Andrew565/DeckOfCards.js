import { Standard52Card, standard52DeckOfCards, PlainJoker, FancyJoker } from "./standard52CardsAndJokers";

export interface Standard52CardWithImage extends Standard52Card {
  image: string;
}

export const standard52DeckOfCardsWithImages: () => Standard52CardWithImage[] = () =>
  standard52DeckOfCards.map((card) => {
    let { nameRank, suit } = card;
    nameRank = nameRank.toLowerCase();
    const lowercaseSuit = suit.toLowerCase();
    const imageFileName = `./CardImages/${nameRank}_of_${lowercaseSuit}.svg`;
    return { ...card, image: imageFileName };
  });

export const PlainJokerWithImage: Standard52CardWithImage = { ...PlainJoker, image: "./CardImages/joker_plain.svg" };

export const FancyJokerWithImage: Standard52CardWithImage = { ...FancyJoker, image: "./CardImages/joker_fancy.svg" };

export const standard52DeckOfCardsWithJokersAndImages = () => {
  const standardDeckWithImages = standard52DeckOfCardsWithImages();
  return [...standardDeckWithImages, PlainJokerWithImage, FancyJokerWithImage];
};

export default {
  FancyJokerWithImage,
  PlainJokerWithImage,
  standard52DeckOfCardsWithImages,
  standard52DeckOfCardsWithJokersAndImages,
};
