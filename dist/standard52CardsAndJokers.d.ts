/** @type {Standard52Card[]} */
export const standard52DeckOfCards: Standard52Card[];
/** @type {Standard52Card} */
export const PlainJoker: Standard52Card;
/** @type {Standard52Card} */
export const FancyJoker: Standard52Card;
/** @type {Standard52Card[]} */
export const standard52DeckOfCardsWithJokers: Standard52Card[];
declare namespace _default {
    export { FancyJoker };
    export { PlainJoker };
    export { standard52DeckOfCards };
    export { standard52DeckOfCardsWithJokers };
}
export default _default;
export type Standard52Card = {
    numberRank: number;
    nameRank: string;
    /**
     * // The card's "symbol"
     */
    initial: string;
    suit: "Clubs" | "Hearts" | "Spades" | "Diamonds" | "Joker";
    name: string;
};
//# sourceMappingURL=standard52CardsAndJokers.d.ts.map