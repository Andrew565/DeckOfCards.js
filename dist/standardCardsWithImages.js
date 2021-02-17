import CardImages from "./CardImages";
import { standard52DeckOfCards, PlainJoker, FancyJoker } from "./standard52CardsAndJokers";
export const standard52DeckOfCardsWithImages = () => standard52DeckOfCards.map((card) => {
    let { name } = card;
    const image = CardImages[name.toLowerCase().replace(" ", "_")];
    return { ...card, image };
});
export const PlainJokerWithImage = { ...PlainJoker, image: CardImages.joker_plain };
export const FancyJokerWithImage = { ...FancyJoker, image: CardImages.joker_fancy };
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
