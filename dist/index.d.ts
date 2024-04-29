import { DeckOfCards } from "./DeckOfCards";

export type CardRankArray = number[];

export const cardRankArray: CardRankArray;

export interface Card {
  name: string;
}

export interface Standard52Card extends Card {
  numberRank: number;
  nameRank: string;
  initial: string;
  suit: "Clubs" | "Hearts" | "Spades" | "Diamonds" | "Joker";
}

declare class DeckOfCards {
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
  drawFromDrawPile(quantity: number): void;
}

export const baseDeck: DeckOfCards<Standard52Card>;

export namespace StandardCards {
  const FancyJoker: Standard52Card;
  const PlainJoker: Standard52Card;
  const standard52DeckOfCards: Standard52Card[];
  const standard52DeckOfCardsWithJokers: Standard52Card[];
}
