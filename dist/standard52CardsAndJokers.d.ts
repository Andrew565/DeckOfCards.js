export interface Standard52Card {
    numberRank: number;
    nameRank: string;
    initial: string;
    suit: "Clubs" | "Hearts" | "Spades" | "Diamonds" | "Joker";
    name: string;
}
export declare const standard52DeckOfCards: Standard52Card[];
export declare const PlainJoker: Standard52Card;
export declare const FancyJoker: Standard52Card;
export declare const standard52DeckOfCardsWithJokers: Standard52Card[];
//# sourceMappingURL=standard52CardsAndJokers.d.ts.map