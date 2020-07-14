import { Standard52Card } from "./standard52CardsAndJokers";
export declare class DeckOfCards<Card> {
    drawPile: Card[];
    discardPile: Card[];
    constructor(cards: Card[]);
    shuffle(times: number): void;
    addToBottomOfDiscardPile(cards: Card[]): void;
    addToDiscardPile(cards: Card[]): void;
    addToTopOfDiscardPile(cards: Card[]): void;
    drawFromDiscardPile(quantity: number): Card[];
    addToBottomOfDrawPile(cards: Card[]): void;
    addToDrawPile(cards: Card[]): void;
    addToTopOfDrawPile(cards: Card[]): void;
    drawFromDrawPile(quantity: number): Card[];
}
export declare const baseDeck: DeckOfCards<Standard52Card>;
//# sourceMappingURL=DeckOfCards.d.ts.map