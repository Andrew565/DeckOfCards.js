/**
 * @typedef {Object} Standard52Card
 * @prop {number} numberRank
 * @prop {string} nameRank
 * @prop {string} initial // The card's "symbol"
 * @prop {"Clubs" | "Hearts" | "Spades" | "Diamonds" | "Joker"} suit
 * @prop {string} name
 */

const suits = ["Clubs", "Hearts", "Spades", "Diamonds"];
const ranks = [
  { numberRank: 0, nameRank: "Two", initial: "2" },
  { numberRank: 1, nameRank: "Three", initial: "3" },
  { numberRank: 2, nameRank: "Four", initial: "4" },
  { numberRank: 3, nameRank: "Five", initial: "5" },
  { numberRank: 4, nameRank: "Six", initial: "6" },
  { numberRank: 5, nameRank: "Seven", initial: "7" },
  { numberRank: 6, nameRank: "Eight", initial: "8" },
  { numberRank: 7, nameRank: "Nine", initial: "9" },
  { numberRank: 8, nameRank: "Ten", initial: "10" },
  { numberRank: 9, nameRank: "Jack", initial: "J" },
  { numberRank: 10, nameRank: "Queen", initial: "Q" },
  { numberRank: 11, nameRank: "King", initial: "K" },
  { numberRank: 12, nameRank: "Ace", initial: "A" },
];

/** @type {Standard52Card[]} */
export const standard52DeckOfCards = suits.flatMap((suit) =>
  ranks.map((rank) => ({
    ...rank,
    suit,
    name: `${rank.nameRank} of ${suit}`,
  }))
);

/** @type {Standard52Card} */
export const PlainJoker = {
  numberRank: 99,
  nameRank: "Joker",
  initial: "JO",
  suit: "Joker",
  name: "Joker (Plain)",
};

/** @type {Standard52Card} */
export const FancyJoker = {
  numberRank: 99,
  nameRank: "Joker",
  initial: "JO",
  suit: "Joker",
  name: "Joker (Fancy)",
};

/** @type {Standard52Card[]} */
export const standard52DeckOfCardsWithJokers = [...standard52DeckOfCards, PlainJoker, FancyJoker];

export default {
  FancyJoker,
  PlainJoker,
  standard52DeckOfCards,
  standard52DeckOfCardsWithJokers,
};
