export class Deck {
    deck = [];

    constructor() {
      this.deck = [];
      this.initialise();
      this.printDeck();
    }
  
    // Build and shuffle standard deck of 52 cards
    initialise() {
      const SUITS_QUANTITY = 4;
      const SUIT_SIZE = 13;
  
      var suits = [4,3,2,1];
  
      // Build a sorted deck in suits descending order - S,H,C,D
      for(var i = 0; i < SUITS_QUANTITY; i++) {
        for(var j = 0; j < SUIT_SIZE; j++) {
  
          /*
          Objects are passed by reference in JS, therefore duplicating the global variable 'card' and editing it edits ALL deriviatives of card.
          Thus creating a deck of cards that are ALL THE SAME!
          Therefore variable must be instantiated each time.
          CAN YOU TELL I SPENT A LONG TIME WORKING THIS OUT?!?
          */
  
          // Template for each card
          var card = {suit: 0, value: 0, image: ""};
  
          card.suit = suits[i];
          card.value = (j+1);
          // Apply reference to corresponding card image:
          // ../images/cardsjpg/card.image.jpg
          var imageRef = "";
          switch (card.value) {
            case 11:
              imageRef += "J";
              break;
            case 12:
              imageRef += "Q";
              break;
            case 13:
              imageRef += "K";
              break;
            case 1:
              imageRef += "A";
              break;
            default:
              imageRef += String(card.value);
          }
  
          switch (card.suit) {
            case 4:
              imageRef += "S";
              break;
            case 3:
              imageRef += "H";
              break;
            case 2:
              imageRef += "C";
              break;
            case 1:
              imageRef += "D";
              break;
            default:
              imageRef += "HELP I DON'T HAVE A SUIT!"
          }
          card.image = "assets/cardsjpg/" + imageRef + ".jpg";
          this.deck.push(card);
        }
      }
      this.shuffleDeck();
    }
  
    // Could randomly grab a single card from the deck rather than suffle
    // BUT a shuffled deck allows for reusable code in other card games
    shuffleDeck() {
  
      // Shuffles using the Fisher-Yates method, an 'in-place, O(n) algorithm'
      var m = this.deck.length, t, i;
  
      // While there remain elements to shuffle…
      while (m) {
  
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
  
        // And swap it with the current element.
        t = this.deck[m];
        this.deck[m] = this.deck[i];
        this.deck[i] = t;
      }
    }
  
    printDeck() {
        document.querySelector('#deckSize').innerHTML = this.deck.length + '';
    }
  
    getCard() {
      var drawnCard = this.deck.pop();
      this.printDeck()
      return drawnCard;
    }
  }