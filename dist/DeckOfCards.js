import { standard52DeckOfCards } from "./standard52CardsAndJokers";
export class DeckOfCards {
    constructor(cards) {
        this.drawPile = cards;
        this.discardPile = [];
        this.shuffle(7); // Seven shuffles is casino-standard, and only takes a millisecond anyways
    }
    shuffle(times) {
        var cardsLength = this.drawPile.length;
        for (var i = 0; i < times; i++) {
            for (const card of this.drawPile) {
                const currentPosition = this.drawPile.indexOf(card);
                const newPosition = Math.floor(Math.random() * cardsLength);
                this.drawPile[currentPosition] = this.drawPile[newPosition];
                this.drawPile[newPosition] = card;
            }
        }
    }
    addToBottomOfDiscardPile(cards) {
        this.discardPile.push(...cards);
    }
    addToDiscardPile(cards) {
        this.addToTopOfDiscardPile(cards);
    }
    addToTopOfDiscardPile(cards) {
        this.discardPile.unshift(...cards);
    }
    drawFromDiscardPile(quantity) {
        return this.discardPile.splice(0, quantity);
    }
    addToBottomOfDrawPile(cards) {
        this.drawPile.push(...cards);
    }
    // Convenience alias
    addToDrawPile(cards) {
        this.addToBottomOfDrawPile(cards);
    }
    addToTopOfDrawPile(cards) {
        this.drawPile.unshift(...cards);
    }
    drawFromDrawPile(quantity) {
        return this.drawPile.splice(0, quantity);
    }
}
export const baseDeck = new DeckOfCards(standard52DeckOfCards);
