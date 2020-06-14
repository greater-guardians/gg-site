import { Player } from './player';
import { Deck } from './deck';

export class Dealer {
    playerCount = 0;

    // Array of players
    players = [];

    // Can't play by yourself
    MIN_PLAYERS = 2;

    // Number of players necessary for 5 cards rather than 7 to be dealt
    DEAL_THRESHOLD = 4;

    // Max 7 players for now (technically 10 can play)
    MAX_PLAYERS = 7;

    playDeck: Deck;

    playerNum: number;

    opponentContainer: HTMLElement;

    constructor(players, opponentContainer) {
        // Number of players
        this.playerCount = players;
        // Array of players
        this.players = [];

        // Can't play by yourself
        this.MIN_PLAYERS = 2;
        // Number of players necessary for 5 cards rather than 7 to be dealt
        this.DEAL_THRESHOLD = 4
        // Max 7 players for now (technically 10 can play)
        this.MAX_PLAYERS = 7;

        // The deck for this game
        this.playDeck = new Deck();

        this.opponentContainer = opponentContainer;

        this.createPlayers();
        this.dealHands();
    }

    // Create necessary number of player objects
    createPlayers() {
        // Create player class for each player
        //  $("#opponentContainer").empty();
        for (var i = 0; i < this.playerCount; i++) {
            var newPlayer = new Player();
            newPlayer.id = i + 1;
            if (i === 0) {
                newPlayer.setHuman();
            } else {
                var opponentNumber = i;
                this.opponentContainer.innerHTML += "<div class=\"opponent\" number=\"" + opponentNumber + "\">\n<button class=\"\" type=\"button\">Opponent " + 
                    opponentNumber + "</button>\n<h5>Sets:</h5>\n<h3 class=\"opponentSets\">0</h3>\n<h5 class=\"actionExplain\">==========</h5>\n</div>";
            }
            this.players.push(newPlayer);
        }
        this.playerNum = this.players.length;
    }

    // Deal hand of correct size to each player
    dealHands() {
        var toDeal = 0;
        if (this.playerCount >= this.MIN_PLAYERS && this.playerCount < this.DEAL_THRESHOLD) {
            toDeal = 7;
        }
        else if (this.playerCount >= this.DEAL_THRESHOLD && this.playerCount <= this.MAX_PLAYERS) {
            toDeal = 5;
        }
        else {
            throw "invalidPlayerNumberException";
        }

        for (var i = 0; i < toDeal; i++) {
            for (var j = 0; j < this.players.length; j++) {
                this.dealCard(this.players[j]);
            }
        }
    }

    // Send a single card from the deck to a player
    dealCard(player) {
        if (this.playDeck.deck.length < 1) {
            return false
        } else {
            player.addCard(this.getCardFromDeck());
        }
        return true;
    }

    // Returns a card from the deck
    getCardFromDeck() {
        return this.playDeck.getCard();
    }

    // TAKE a card value and a player
    // RETURN array of matching cards
    findCardInPlayer(card, opponent) {
        var cardsOfMatchingValue = [];
        // For each card in oppenent's hand
        for (var i = 0; i < opponent.hand.length; i++) {
            // If card value matches value searched for
            if (opponent.hand[i].value === card) {
                // Add index to cardsOfMatchingValue
                cardsOfMatchingValue.push(i);
            }
        }
        return cardsOfMatchingValue;
    }

    // Checks if all sets are down
    // If true
    // Player with most sets wins
    checkWinCondition() {
        var totalSets = 0;
        for (var i = 0; i < this.players.length; i++) {
            totalSets += this.players[i].getNumSets();
        }

        if (totalSets === 13) {
            return false;
        }
        return true;
    }

    // Returns length of players array
    getPlayersLength() {
        return this.players.length;
    }

}