# DeckOfCards.js

_A virtual deck of cards as an extensible utility library._

DeckOfCards.js is a library for working with a deck of cards, be they the standard 52-card deck used the world over, or a deck of Magic the Gathering cards, or a custom deck of tic-tac-toe cards featuring corgis. Whatever kind of cards you want to work with, DeckOfCards.js provides the tools to create and manipulate the cards and deck you want to work with.

*DeckOfCards.js is proudly written using TypeScript, and transpiled to JavaScript.*  The .js extension just gets more recognition than the .ts one.

DeckOfCards.js comprises three components: `cardRankArray.ts`, `standard52CardsAndJokers.ts`, and `DeckOfCards.ts` - the main "deck" class. Below is a more detailed explanation of the files, their contents, and their APIs (where appropriate).

## cardRankArray.ts

`export type CardRankArray = number[];`

`export const cardRankArray: CardRankArray;`

cardRankArray.ts has two exports: a very basic type, and an array of numbers. The basic type is there to allow for easy modification later, if so desired by an end user.

The array of numbers starts at 0, goes through 12 in increments of 1 (0, 1, 2, etc.), and then ends with 99. These numbers can be used to represent the ranks of standard 52 cards. Starting with cardRankArray[0] === "Two" (figuratively, not literally here), through to cardRankArray[12] === "Ace" (more card games place Aces High than low), and finally cardRank[13] === `99` === "Joker". I chose 99 to represent Jokers because it was a two-digit number that was not likely to be mistaken for any other ranks. This allows users to create additional ranks - if so desired - without fear of collision.

## standard52CardsAndJokers.ts

`export interface Standard52Card`

`export const standard52DeckOfCards: Standard52Card[]`

`export const PlainJoker: Standard52Card`

`export const FancyJoker: Standard52Card`

`export const standard52DeckOfCardsWithJokers: Standard52Card[]`

This file contains the base pieces of cards that can be composed into a DeckOfCards (see below).

`Standard52Card`

The definition of what a Standard52Card is. This interface includes two rank types: `numberRank` which is a `number`, and `nameRank` which is a `string`. 
