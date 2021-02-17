import CardImages from "./CardImages";
import { Standard52Card, standard52DeckOfCards, PlainJoker, FancyJoker } from "./standard52CardsAndJokers";

export interface Standard52CardWithImage extends Standard52Card {
  image: string;
}

export const standard52DeckOfCardsWithImages: () => Standard52CardWithImage[] = () =>
  standard52DeckOfCards.map((card) => {
    let { name } = card;
    const image = CardImages[name.toLowerCase().replace(" ", "_")];
    return { ...card, image };
  });

export const PlainJokerWithImage: Standard52CardWithImage = { ...PlainJoker, image: CardImages.joker_plain };

export const FancyJokerWithImage: Standard52CardWithImage = { ...FancyJoker, image: CardImages.joker_fancy };

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
