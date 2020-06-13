import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-go-fish',
  templateUrl: './go-fish.component.html',
  styleUrls: ['./go-fish.component.css']
})
export class GoFishComponent implements OnInit {

  isPlayGame: boolean = false;
  isSeeInstructions: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  playGameClicked() {
    this.isSeeInstructions = false;
    this.isPlayGame = true;
  }

  seeInstructionsClicked() {
    this.isPlayGame = false;
    this.isSeeInstructions = true;
  }


  // --------------------- script js stuff --------------------

}
