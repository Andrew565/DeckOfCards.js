import { standard52DeckOfCards } from "./standard52CardsAndJokers";

/** @template {{name: string}} Card */

export class DeckOfCards {
  /** @type {Card[]} */
  drawPile;
  /** @type {Card[]} */
  discardPile;

  /** @param {Card[]} cards */
  constructor(cards) {
    this.drawPile = [...cards];
    this.discardPile = [];

    this.shuffle();
  }

  /**
   * @description This shuffle algorithm is an implementation of the Fisher-Yates algorithm
   */
  shuffle() {
    for (let currentPosition = this.drawPile.length - 1; currentPosition > 0; currentPosition--) {
      const newPosition = Math.floor(Math.random() * (currentPosition + 1));
      [this.drawPile[currentPosition], this.drawPile[newPosition]] = [this.drawPile[newPosition], this.drawPile[currentPosition]];
    }
  }

  /** @param {Card[]} cards */
  addToBottomOfDiscardPile(cards) {
    this.discardPile.push(...cards);
  }

  /** @param {Card[]} cards */
  addToDiscardPile(cards) {
    this.addToTopOfDiscardPile(cards);
  }

  /** @param {Card[]} cards */
  addToTopOfDiscardPile(cards) {
    this.discardPile.unshift(...cards);
  }

  /**
   * @param {number} quantity
   * @returns {Card[]}
   */
  drawFromDiscardPile(quantity) {
    return this.discardPile.splice(0, quantity);
  }

  /** @param {Card[]} cards */
  addToBottomOfDrawPile(cards) {
    this.drawPile.push(...cards);
  }

  // Convenience alias
  /** @param {Card[]} cards */
  addToDrawPile(cards) {
    this.addToBottomOfDrawPile(cards);
  }

  /** @param {Card[]} cards */
  addToTopOfDrawPile(cards) {
    this.drawPile.unshift(...cards);
  }

  /**
   * @param {number} quantity
   * @returns {Card[]}
   */
  drawFromDrawPile(quantity) {
    return this.drawPile.splice(0, quantity);
  }
}

export const baseDeck = new DeckOfCards(standard52DeckOfCards);
