import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../app-http.service';

@Component({
  selector: 'app-billy',
  templateUrl: './billy.component.html',
  styleUrls: ['./billy.component.css']
})
export class BillyComponent implements OnInit {

  constructor(
    private appHttp: AppHttpService
  ) { }

  ngOnInit() {
    this.appHttp.fetchInventory().toPromise().then(response => {
      console.log(response);
    });
  }

}
