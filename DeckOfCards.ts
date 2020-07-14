import { standard52DeckOfCards, Standard52Card } from "./standard52CardsAndJokers";

export class DeckOfCards<Card> {
  drawPile: Card[];
  discardPile: Card[];

  constructor(cards: Card[]) {
    this.drawPile = cards;
    this.discardPile = [];

    this.shuffle(7); // Seven shuffles is casino-standard, and only takes a millisecond anyways
  }

  shuffle(times: number): void {
    var cardsLength = this.drawPile.length;
    for (var i = 0; i < times; i++) {
      this.drawPile.forEach(function (card, currentPosition) {
        var newPosition = Math.floor(Math.random() * cardsLength);
        this.drawPile[currentPosition] = this.drawPile[newPosition];
        this.drawPile[newPosition] = card;
      });
    }
  }

  addToBottomOfDiscardPile(cards: Card[]): void {
    this.discardPile.push(...cards);
  }

  addToDiscardPile(cards: Card[]): void {
    this.addToTopOfDiscardPile(cards);
  }

  addToTopOfDiscardPile(cards: Card[]): void {
    this.discardPile.unshift(...cards);
  }

  drawFromDiscardPile(quantity: number): Card[] {
    return this.discardPile.splice(0, quantity);
  }

  addToBottomOfDrawPile(cards: Card[]): void {
    this.drawPile.push(...cards);
  }

  // Convenience alias
  addToDrawPile(cards: Card[]): void {
    this.addToBottomOfDrawPile(cards);
  }

  addToTopOfDrawPile(cards: Card[]): void {
    this.drawPile.unshift(...cards);
  }

  drawFromDrawPile(quantity: number): Card[] {
    return this.drawPile.splice(0, quantity);
  }
}

export const baseDeck = new DeckOfCards<Standard52Card>(standard52DeckOfCards);
