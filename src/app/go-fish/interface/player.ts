import { Human } from './human';

export class Player {
    id = 0;
    hand = [];
    human: boolean = false;
    sets = [];
    humanController;

    constructor () {}
  
    // Add card to hand
    addCard (card) {
      this.hand.push(card);
      this.sortHand();
      this.checkHand();
    }
  
    // Returns player hand
    getHand () {
      return this.hand;
    }
  
    setHuman () {
      this.human = true;
      this.humanController = new Human(this);
    }
  
    // TAKES array of index values for cards to remove
    // Removes cards from hand by interating from end to beginning
    // This avoids incorrect references after splice
    // RETURN the removed cards
    removeCards (indexArray) {
      var removedCards = [];
      for (var i = (indexArray.length - 1); i >= 0; i--) {
  
        // Capture card in singlecard variable
        var singleCard = this.hand[indexArray[i]];
  
        // Delete card from array
        this.hand.splice(indexArray[i], 1);
  
        // Push singleCard to removedCards array
        removedCards.push(singleCard);
      }
  
      if(this.human) {
        this.humanController.populateCardContainer(this.getHand());
      }
  
      // Checks hand again to ensure there are cards still in hand
      this.checkHand();
      return removedCards;
    }
  
    // If hand empty, get card ELSE call a card
    takeTurn () {
      if(this.human) {
        if(this.hand.length < 1) {
          return 0;
        } else {
          return 2;
        }
  
      } else {
        if(this.hand.length < 1) {
          return 0;
        } else {
          return 1;
        }
      }
    }
  
    // Takes: total number of players from Dealer
    // Returns:
    // A card to find
    // An integer value for the player to 'fish' from
    callCardAndPlayer (playerTot) {
      // Randomly generated values for the player and card value being fished
      do {
        var rand1 = Math.floor(Math.random() * this.hand.length);
        var rand2 = Math.floor(Math.random() * playerTot);
      } while (rand2 === this.id-1);
  
      return [this.hand[rand1], rand2];
    }
  
    // Organise hand S,H,C,D, value ascending
    sortHand () {
      this.hand.sort(function (a,b) {return a.value - b.value});
  
      if(this.human) {
        this.humanController.populateCardContainer(this.getHand());
      }
    }
  
    // Checks this player's hand for any sets
    checkHand() {
      var currentValue = 0;
      var valueCount = 1;
      if(this.hand.length < 1 && this.human) {
        this.humanController.emptyHand();
        return;
      } else if(this.human) {
        this.humanController.fullHand();
      }
  
      // Checks for sets of 4
      for (var i = 0; i < this.hand.length; i++) {
        if (this.hand[i].value !== currentValue) {
          currentValue = this.hand[i].value;
          valueCount = 1;
        } else {
          valueCount++;
        }
  
        // If 4 matching values are FOUND
        // Removes the latest value, and the 3 preceding
        // This works because the deck is always sorted
        if(valueCount === 4) {
          var set = this.hand[i].value;
          this.playSet(set);
  
          // Remove set from hand
          this.removeCards([i-3, i-2, i-1, i]);
        }
      }
    }
  
    // TAKES a complete set
    playSet(set) {
      this.sets.push(set);
      this.updateSetsUI();
    }
  
    updateSetsUI() {
      var setsString = "";
      if(this.human) {
        for (var i = 0; i < this.sets.length; i++) {
          var toAdd = " |" + this.sets[i] + "s| ";
  
          switch (this.sets[i]) {
            case 11:
              toAdd = " |Jacks| ";
              break;
            case 12:
              toAdd = " |Queens| ";
              break;
            case 13:
              toAdd = " |Kings| ";
              break;
            case 1:
              toAdd = " |Aces| ";
              break;
            default:
          }
          setsString += toAdd;
        }

        document.querySelector('#humanSets').innerHTML = setsString;
      } else {
        for (var i = 0; i < this.sets.length; i++) {
          var toAdd = " |" + this.sets[i] + "s| ";
  
          switch (this.sets[i]) {
            case 11:
              toAdd = " |Jacks| ";
              break;
            case 12:
              toAdd = " |Queens| ";
              break;
            case 13:
              toAdd = " |Kings| ";
              break;
            case 1:
              toAdd = " |Aces| ";
              break;
            default:
          }
          setsString += toAdd;
        }

        const opponentContainer: Element = document.querySelectorAll('.opponentSets')[this.id - 2];
        opponentContainer.textContent = setsString;
      }
    }
  
    getNumSets() {
      return this.sets.length;
    }
  
    getSets() {
      return this.sets;
    }
  }