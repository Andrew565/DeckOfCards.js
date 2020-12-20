"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.standard52DeckOfCardsWithJokersAndImages = exports.FancyJokerWithImage = exports.PlainJokerWithImage = exports.standard52DeckOfCardsWithImages = void 0;
const standard52CardsAndJokers_1 = require("./standard52CardsAndJokers");
exports.standard52DeckOfCardsWithImages = () => standard52CardsAndJokers_1.standard52DeckOfCards.map((card) => {
    let { nameRank, suit } = card;
    nameRank = nameRank.toLowerCase();
    const lowercaseSuit = suit.toLowerCase();
    const imageFileName = `./CardImages/${nameRank}_of_${lowercaseSuit}.svg`;
    return { ...card, image: imageFileName };
});
exports.PlainJokerWithImage = { ...standard52CardsAndJokers_1.PlainJoker, image: "./CardImages/joker_plain.svg" };
exports.FancyJokerWithImage = { ...standard52CardsAndJokers_1.FancyJoker, image: "./CardImages/joker_fancy.svg" };
exports.standard52DeckOfCardsWithJokersAndImages = () => {
    const standardDeckWithImages = exports.standard52DeckOfCardsWithImages();
    return [...standardDeckWithImages, exports.PlainJokerWithImage, exports.FancyJokerWithImage];
};
exports.default = {
    FancyJokerWithImage: exports.FancyJokerWithImage,
    PlainJokerWithImage: exports.PlainJokerWithImage,
    standard52DeckOfCardsWithImages: exports.standard52DeckOfCardsWithImages,
    standard52DeckOfCardsWithJokersAndImages: exports.standard52DeckOfCardsWithJokersAndImages,
};
//# sourceMappingURL=standardCardsWithImages.js.map