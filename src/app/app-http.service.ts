import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppHttpService {

    constructor(
        private httpClient: HttpClient
    ) {}

    fetchInventory() {
        return this.httpClient.get('https://www.fallensword.com/index.php?cmd=profile&subcmd=fetchinv');
    }
}