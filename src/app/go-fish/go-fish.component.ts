import { Component, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Dealer } from './interface/dealer.js';

@Component({
  selector: 'app-go-fish',
  templateUrl: './go-fish.component.html',
  styleUrls: ['./go-fish.component.css']
})
export class GoFishComponent {

  isPlayGame: boolean = false;
  isSeeInstructions: boolean = false;
  dealer;
  sounds;
  gameActive;
  searchValue;
  searchPlayer;

  constructor(
    private elementRef: ElementRef,
    private changeDetectorRef: ChangeDetectorRef,
  ) { }

  playGameClicked() {
    this.isSeeInstructions = false;
    this.isPlayGame = true;
  }

  seeInstructionsClicked() {
    this.isPlayGame = false;
    this.isSeeInstructions = true;
  }


  // --------------------- script js stuff --------------------
  onStartClicked() {
  // var element = document.getElementById("sven");
  // var playDeck = new Deck();
  if(!this.gameActive) {
    const opponentContainer = this.elementRef.nativeElement.querySelector('#opponentContainer');
    opponentContainer.innerHTML = '';
    this.searchValue = 'x';
    this.searchPlayer = 'x';
    this.elementRef.nativeElement.querySelector('#humanSets').innerHTML = '';
    this.changeDetectorRef.detectChanges();

    this.dealer = new Dealer(this.requestPlayers(), opponentContainer);
    // sounds = new Sounds();
    this.gameActive = true;
    this.changeDetectorRef.detectChanges();
    const cardList: NodeList = this.elementRef.nativeElement.querySelectorAll('#cardContainer .card');
    const opponentsList: NodeList = this.elementRef.nativeElement.querySelectorAll('#opponentContainer .opponent');
    cardList.forEach(cardItem => {
      cardItem.addEventListener("click", ($event) => {this.onCardClicked($event)});
    });
    
    opponentsList.forEach(opponent => {
      opponent.addEventListener("click", ($event) => {this.onOpponentClicked($event)});
    });

  }
  }

  onContinueClicked() {
    if(this.gameActive) {
      this.playGame(this.searchValue, this.searchPlayer);
      this.changeDetectorRef.detectChanges();
      const cardList: NodeList = this.elementRef.nativeElement.querySelectorAll('#cardContainer .card');
      cardList.forEach(cardItem => {
        cardItem.addEventListener("click", ($event) => {this.onCardClicked($event)});
      });

    }
  }

  onCardClicked(press) {
    console.log(press);
    const attributes: NamedNodeMap = press.target.attributes;
    let value = attributes.getNamedItem('value').value;
    // var value = $(press).attr('value');
    this.searchValue = value;
  
    switch (value) {
      case "11":
        value = "Jack";
        break;
      case "12":
        value = "Queen";
        break;
      case "13":
        value = "King";
        break;
      case "1":
        value = "Ace";
        break;
      default:
    }
  
    this.elementRef.nativeElement.querySelector('#searchValue').innerHTML = value;
  }

  onOpponentClicked(event) {
    let value = (event.target.innerText as string).split(' ')[1];
    this.searchPlayer = Number.parseFloat(value);
    this.elementRef.nativeElement.querySelector('#searchPlayer').innerHTML = "Opponent: " + this.searchPlayer;
  }

  private  requestPlayers() {
    let numPlayers
    do {
      numPlayers = parseInt(prompt("Choose a number of players, between 2 and 7!"));
    } while (numPlayers === NaN || numPlayers < 2 || numPlayers > 7);
    return numPlayers;
  }

  private playGame(playerInputValue, playerInputOpponent) {
    if(playerInputValue === "x" || playerInputOpponent === "x") {
      const playerInfo = this.elementRef.nativeElement.querySelector('#playerInfo');
      playerInfo.innerHTML = "Select opponent and card value to fish!";
      return;
    }
  
    // For each player:
    for (var i = 0; i < this.dealer.players.length; i++) {
      var playerTakingTurn = this.dealer.players[i];
  
      var canTakeTurn = playerTakingTurn.takeTurn();
  
      // Overrides autoplay with human interraction
      if (canTakeTurn === 2) {
        if(playerTakingTurn.getHand() > 1) {
          // If player cannot draw a card because deck is empty
          if(!this.dealer.dealCard(playerTakingTurn)) {
            // Skip player, there is nothing else they can do
            const playerInfo = this.elementRef.nativeElement.querySelector('#playerInfo');
            const continueOn = this.elementRef.nativeElement.querySelector('#continue');

            playerInfo.innerHTML = 'Deck is empty. Please continue to end.';
            continueOn.innerHTML = 'Continue';
            continue;
          }
        }
  
        // Switch value to int (collected as string from image)
        var valueToSearch = parseInt(playerInputValue);
        var opponentToSearch = this.dealer.players[playerInputOpponent];
        this.instigateCall(valueToSearch, opponentToSearch, playerTakingTurn);
        this.resetSearchValues();
  
        if(playerTakingTurn.getHand() > 1) {
          const continueOn = this.elementRef.nativeElement.querySelector('#continue');
          continueOn.innerHTML = 'Draw Card';
        }
        continue;
      }
  
      // If the player has no cards, draw a card
      if(canTakeTurn === 0) {
        // If player cannot draw a card because deck is empty
        if(!this.dealer.dealCard(playerTakingTurn)) {
          // Skip player, there is nothing else they can do
          continue;
        }
      // Else pick a card and player to fish
      } else {
        // An array containing:
        // [0] = direct reference to a card
        // [1] = index of a player
        var cardAndPlayerInt = playerTakingTurn.callCardAndPlayer(this.dealer.players.length);
  
        // Card value
        var cardToFind = cardAndPlayerInt[0].value;
  
        // Direct reference to a player (from index)
        var playerToFish = this.dealer.players[cardAndPlayerInt[1]];
  
        this.instigateCall(cardToFind, playerToFish, playerTakingTurn);
      }
    }
  
    if(!this.dealer.checkWinCondition()) {
      var winnersArray = [];
      var winValue = 0;
      for (var i = 0; i < this.dealer.players.length; i++) {
        if(this.dealer.players[i].getNumSets() > winValue) {
          winValue = this.dealer.players[i].getNumSets();
          winnersArray = [];
          winnersArray.push(i);
        }
        else if (this.dealer.players[i].getNumSets() === winValue) {
          winnersArray.push(i);
        }
      }
  
      const cardContainer: HTMLElement = this.elementRef.nativeElement.querySelector('#cardContainer');
      cardContainer.innerHTML = '';
      for (var i = 0; i < winnersArray.length; i++) {
        if(this.dealer.players[winnersArray[i]].id > 1) {
          cardContainer.innerHTML = '<h3>OPPONENT ' + (this.dealer.players[winnersArray[i]].id - 1) + ' WINS!</h3>';
        } else {
          cardContainer.innerHTML = '<h3>YOU WIN!</h3>';
        }
      }
      this.gameActive = false;
    }
  }

  instigateCall(cardToFind, playerToFish, playerTakingTurn) {
    // Array of index values point to search matches
    var matchingValueIndicies = this.dealer.findCardInPlayer(cardToFind, playerToFish);
  
    // If no matches
    if(matchingValueIndicies.length < 1) {
      // If player cannot draw a card because deck is empty
      if(!this.dealer.dealCard(playerTakingTurn)) {
        // Skip player, there is nothing else they can do
      }
      // continue;
    }
  
    // Cards to pass to fishing player
    var cardsToPass = playerToFish.removeCards(matchingValueIndicies);
    for (var j = 0; j < cardsToPass.length; j++) {
      playerTakingTurn.addCard(cardsToPass[j]);
    }
  
    switch (cardToFind) {
      case 11:
        cardToFind = "Jack";
        break;
      case 12:
        cardToFind = "Queen";
        break;
      case 13:
        cardToFind = "King";
        break;
      case 1:
        cardToFind = "Ace";
        break;
      default:
    }
  
    var num = playerToFish.id;
    if(!playerTakingTurn.human) {
      if(num === 1) {
        num = "YOU"
      } else {
        num = "Opponent " + (playerToFish.id - 1);
      }
  
      const actionExplain: HTMLElement = this.elementRef.nativeElement.querySelectorAll('.actionExplain')[playerTakingTurn.id - 2];

      if(matchingValueIndicies < 1) {
        actionExplain.innerHTML = `Hunted ${cardToFind} from ${num} <br>GO FISH!`;
      } else {
        actionExplain.innerHTML = `Hunted ${cardToFind} from ${num}.<br>Gained ${matchingValueIndicies.length} cards!`;
      }
  
    } else {
      num = "Opponent " + (playerToFish.id - 1);
      const playerInfo: HTMLElement = this.elementRef.nativeElement.querySelector('#playerInfo')

      if(matchingValueIndicies < 1) {
        playerInfo.innerHTML = `Hunted ${cardToFind} from ${num}. GO FISH!`;
      } else {
        playerInfo.innerHTML = `Hunted ${cardToFind} from ${num}. Gained ${matchingValueIndicies.length} cards!`;
      }
    }
  }
  
  private resetSearchValues() {
    const searchValue: HTMLElement = this.elementRef.nativeElement.querySelector('#searchValue')
    const searchPlayer: HTMLElement = this.elementRef.nativeElement.querySelector('#searchPlayer')
    searchValue.innerHTML = '';
    searchPlayer.innerHTML = '';
    this.searchValue = "x";
    this.searchPlayer = "x";
  }
  
}
