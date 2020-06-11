import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onApplyClicked() {
    const win = window.open('https://www.fallensword.com/index.php?cmd=profile&player_id=1655022', '_blank');
    setTimeout(() => {
      console.log(win.document.scripts.length);
      

    }, 3000);
  }

}
