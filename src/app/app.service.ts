import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AppService {

    constructor(
        private httpClient: HttpClient
    ) {
    }

    getUrl(cep: number): Observable<string[]> {
        return this.httpClient.get<string[]>(`https://viacep.com.br/ws/${cep}/json`);
    }

}