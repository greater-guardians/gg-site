export class Human {
    cardContainer;

    constructor(context) {
      this.cardContainer;
    }
  
    setCardContainer() {
      this.cardContainer = document.querySelector('#cardContainer');
    }
  
    populateCardContainer(hand) {
      this.clearBoard();
      var cardCount = 0;
      for (var i = 0; i < hand.length; i++) {
        cardCount++;
        this.addCardToContainer(hand[i]);
      }
    }
  
    clearBoard() {
      document.querySelector('#cardContainer').innerHTML = '';
    }
  
    addCardToContainer(card) {
    const cardContainer = document.querySelector('#cardContainer');
    cardContainer.innerHTML += "<img class=\"card\" src=\"" + card.image + "\" value=\"" + card.value + "\" alt=\"A card\">";
    }
  
    emptyHand() {
        document.querySelector('#continue').innerHTML = 'Draw Card';
        document.querySelector('#searchValue').innerHTML = 'drawCard';
        document.querySelector('#searchPlayer').innerHTML = 'drawCard';
        // searchValue = "drawCard";
        // searchPlayer = "drawCard";
    }
  
    fullHand() {
      document.querySelector('#continue').innerHTML = 'Take Turn';
      document.querySelector('#searchValue').innerHTML = 'x';
      document.querySelector('#searchPlayer').innerHTML = 'x';
    }
  }