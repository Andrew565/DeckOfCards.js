# DeckOfCards.js

_A virtual deck of cards as an extensible utility library._

DeckOfCards.js is a library for working with a deck of cards, be they the standard 52-card deck used the world over, or a deck of Magic the Gathering cards, or a custom deck of tic-tac-toe cards featuring corgis. Whatever kind of cards you want to work with, DeckOfCards.js provides the tools to create and manipulate the cards and deck you want to work with.

_DeckOfCards.js is proudly written using TypeScript, and transpiled to JavaScript._ The .js extension tends to get more recognition than the .ts one, so that is why I chose it.

DeckOfCards.js comprises three components: `cardRankArray.ts`, `standard52CardsAndJokers.ts`, and `DeckOfCards.ts` - the main "deck" class. Below is a more detailed explanation of the files, their contents, and their APIs (where appropriate).

## cardRankArray.ts

`export type CardRankArray = number[];`

`export const cardRankArray: CardRankArray;`

cardRankArray.ts has two exports: a basic type, and an array of numbers. The basic type is there to allow for easy modification later, if so desired by an end user.

The array of numbers starts at 0, goes through 12 in increments of 1 (0, 1, 2, etc.), and then ends with 99. Users can use these numbers to represent the ranks of standard 52 cards. Starting with cardRankArray[0] === "Two", through to cardRankArray[12] === "Ace" (more card games place Aces High than low), and then cardRank[13] === `99` === "Joker". I chose 99 to represent Jokers because it's a two-digit number that will not be mistook for any other ranks. This allows users to create more ranks - if so desired - without fear of collision.

## standard52CardsAndJokers.ts

```typescript
export interface Standard52Card {
  numberRank: number;
  nameRank: string;
  initial: string;
  suit: "Clubs" | "Hearts" | "Spades" | "Diamonds" | "Joker";
  name: string;
}
```

`export const standard52DeckOfCards: Standard52Card[]`

`export const PlainJoker: Standard52Card`

`export const FancyJoker: Standard52Card`

`export const standard52DeckOfCardsWithJokers: Standard52Card[]`

This file contains the base pieces of cards that users can use to make a DeckOfCards (see below).

### `Standard52Card`

The definition of what a Standard52Card is. This interface includes two rank types: `numberRank` which is a `number`, and `nameRank` which is a `string`. This allows for developers to use the `numberRank` for determining how much greater or lower a card's "value" is (e.g. a `numberRank` of `9` beats a `numberRank` of `3`), while leaving the nameRank for descriptions (e.g. "Queen"). The `initial` property is a 1-2 character representation of a card (e.g. "A" to represent an Ace). The suit corresponds with one of the four standard suits, plus the added suit of "Joker" for Joker cards since they do not naturally have a suit of their own. The `name` property provides for a "human-readable" version of a card's name or description; e.g. "Two of Hearts".

### `standard52DeckOfCards`

This is an array that has been pre-filled with all the cards found in a standard 52-card pack. It does not include the Jokers, but `standard52DeckOfCardsWithJokers` does. This array has not had its prototype changed in any way, so all the standard array methods and properties work as usual, but there are no extra 'bells or whistles'.

### `PlainJoker` and `FancyJoker`

These are single Card objects, setup with the properties of a 'plain' and 'fancy' Joker, respectively. I chose to differentiate between a 'plain' Joker and a 'fancy' Joker because some developers may wish to use two different images for the Jokers, and some games use one Joker or the other, or both separately.

### `standard52DeckOfCardsWithJokers`

Same as `standard52DeckOfCards` with the PlainJoker and FancyJoker objects added.

## `DeckOfCards.ts`

```typescript
export class DeckOfCards<Card> {
  drawPile: Card[];
  discardPile: Card[];
  shuffle(times: number) => void;
  addToBottomOfDiscardPile(cards: Card[]) => void;
  addToDiscardPile(cards: Card[]) => void;
  addToTopOfDiscardPile(cards: Card[]) => void;
  drawFromDiscardPile(quantity: number) => Card[];
  addToBottomOfDrawPile(cards: Card[]) => void;
  addToDrawPile(cards: Card[]) => void;
  addToTopOfDrawPile(cards: Card[]) => void;
  drawFromDrawPile(quantity: number) => Card[];
}
```

`export const baseDeck: DeckOfCards<Standard52Card>`

This file presents the crux of this whole package, the DeckOfCards class. If you're not familiar with TypeScript generics, the `<Card>` in `DeckOfCards<Card>` allows us to pass in what _type_ of Cards we want the deck to handle. This allows for the class to get extended with different validations and/or card handling functions.

### `drawPile` and `discardPile`

These two piles represent two of the three places where a card could be: in the draw pile, the discard pile, or 'somewhere else'. In TypeScript these arrays initially hold Card objects, but users may override this behavior if they want to. For instance, you might hold Die objects, or Token objects of some kind.

### `shuffle`

`() => void`

This function will go through the contents of the draw pile and randomly rearrange them. It does this using an algorithm called the Fisher-Yates shuffle that loops through the cards in the deck and creates a random number between 0 and the number of cards, then swaps the current card with the random number's position.

### `addToBottomOf`, `addTo`, and `addToTopOf`

`(cards: Card[]) => void`

The `addTo` functions all take an array of Card objects, and then they use the spread operator (...) to add those Cards to the specified pile. `addToDrawPile` is an alias for `addToBottomOfDrawPile`, and `addToDiscardPile` is an alias for `addToTopOfDiscardPile`; I did this because I saw those actions as being the most common "default action" for those piles.

### `drawFromDiscardPile` and `drawFromDrawPile`

`(quantity: number) => Card[]`

The `draw` functions both take a quantity variable representing the number of Cards to draw from the selected pile. Whether the user chooses a quantity of 0, 1, or anything greater than 1, the result will always be an array. This will make programming simpler, as the user will not have to have 'extra' logic for checking if the return value was null, a single Card, or an array of Cards.

### `baseDeck`

The `baseDeck` is a pre-instantiated DeckOfCards setup with the `standard52DeckOfCards` object from `standard52CardsAndJokers.ts`. This allows users - should they desire - to start using a standard deck in their project without any extra setup.
