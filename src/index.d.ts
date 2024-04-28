export type CardRankArray = number[];

export interface Card {
  name: string;
}

export interface Standard52Card extends Card {
  numberRank: number;
  nameRank: string;
  initial: string;
  suit: "Clubs" | "Hearts" | "Spades" | "Diamonds" | "Joker";
}
