import { Standard52Card } from "./standard52CardsAndJokers";
export interface Standard52CardWithImage extends Standard52Card {
    image: string;
}
export declare const standard52DeckOfCardsWithImages: () => Standard52CardWithImage[];
export declare const PlainJokerWithImage: Standard52CardWithImage;
export declare const FancyJokerWithImage: Standard52CardWithImage;
export declare const standard52DeckOfCardsWithJokersAndImages: () => Standard52CardWithImage[];
declare const _default: {
    FancyJokerWithImage: Standard52CardWithImage;
    PlainJokerWithImage: Standard52CardWithImage;
    standard52DeckOfCardsWithImages: () => Standard52CardWithImage[];
    standard52DeckOfCardsWithJokersAndImages: () => Standard52CardWithImage[];
};
export default _default;
//# sourceMappingURL=standardCardsWithImages.d.ts.map