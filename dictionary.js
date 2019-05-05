// word list was obtained from https://sourceforge.net/projects/scrabbledict/

// Note: the trie isn't much smaller on bare size, but it's almost half as small when gzipped

// //code that was used to generate the trie from the direct hash lookup, `validWordLookup`
// const validWordTrie = {};
// for (const word in validWordLookup) {
//     let currentSubTrie = validWordTrie;
//     for (const letter of word) {
//         if (!(letter in currentSubTrie)) {
//             currentSubTrie[letter] = {};
//         }
//         currentSubTrie = currentSubTrie[letter];
//     }
//     currentSubTrie[''] = ''; // an empty string key means that the letter keys above this form a valid word
// }
// debugger;