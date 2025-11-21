/** @template {{name: string}} Card */
export class DeckOfCards<Card extends {
    name: string;
}> {
    /** @param {Card[]} cards */
    constructor(cards: Card[]);
    /** @type {Card[]} */
    drawPile: Card[];
    /** @type {Card[]} */
    discardPile: Card[];
    /**
     * @description This shuffle algorithm is an implementation of the Fisher-Yates algorithm
     */
    shuffle(): void;
    /** @param {Card[]} cards */
    addToBottomOfDiscardPile(cards: Card[]): void;
    /** @param {Card[]} cards */
    addToDiscardPile(cards: Card[]): void;
    /** @param {Card[]} cards */
    addToTopOfDiscardPile(cards: Card[]): void;
    /**
     * @param {number} quantity
     * @returns {Card[]}
     */
    drawFromDiscardPile(quantity: number): Card[];
    /** @param {Card[]} cards */
    addToBottomOfDrawPile(cards: Card[]): void;
    /** @param {Card[]} cards */
    addToDrawPile(cards: Card[]): void;
    /** @param {Card[]} cards */
    addToTopOfDrawPile(cards: Card[]): void;
    /**
     * @param {number} quantity
     * @returns {Card[]}
     */
    drawFromDrawPile(quantity: number): Card[];
}
export const baseDeck: DeckOfCards<import("./standard52CardsAndJokers").Standard52Card>;
//# sourceMappingURL=DeckOfCards.d.ts.map