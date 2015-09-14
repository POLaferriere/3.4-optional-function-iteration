/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a, b){
    "use strict";
    if (a > b) {
      return a;
    } else {
      return b;
    }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c){
    "use strict";
    if (a > b) {
      if (b > c) {
        return b;
        } else {
        return c;
        }
      } else {
      if (a > c) {
        return a;
      } else {
        return c;
      }
    }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    //...
    var vowels = ['a', 'e', 'i', 'o', 'u'];
      if (vowels.indexOf(char) > -1) {
        return true;
      } else {
        return false;
      }
}

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    //...
    var splitPhrase = phrase.split("");
    splitPhrase.forEach(function (el, ind) {
      if (isVowel(el) === false && el != ' ') {
        splitPhrase[ind] = el + "o" + el;
      }
    });
    splitPhrase = splitPhrase.join('');
    return splitPhrase;
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(arr){
    "use strict";
    //...
    var sumTotal = arr.reduce(function(first, second) {
      return Number(first + second);
    });
    return sumTotal;
}

function multiply(arr){
    "use strict";
    //...
    var multiplyTotal = arr.reduce(function(first, second) {
      return Number(first * second);
    });
    return multiplyTotal;
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
    "use strict";
    //...
    var splitPhrase = string.split('');
    var reversePhrase = [];
    for (var i = 0; i < splitPhrase.length; i++) {
      reversePhrase[i] = splitPhrase[splitPhrase.length-i-1];
    }
    reversePhrase = reversePhrase.join('');
    return reversePhrase;
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    //...
    var longestWord = words.reduce(function(firstWord, secondWord) {
      if (firstWord.length > secondWord.length) {
        return firstWord;
      } else {
        return secondWord;
      }
    });
    return longestWord.length;
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    //...
    var filteredWords = words.filter(function(el, ind) {
      if (words[ind].length > i) {
        return true;
      } else {
        return false;
      }
    });
    return filteredWords;
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
    var newObj = {};
    var newArray = string.split('');
    newArray.forEach(function(el) {
      if (!newObj.hasOwnProperty(el)) {
        var i = 0;
        newObj[el] = i;
        newArray.forEach(function(ele) {
          if (ele === el) {
            i++;
          }
        newObj[el] = i;
      });
      }
    });
    return newObj;
}
