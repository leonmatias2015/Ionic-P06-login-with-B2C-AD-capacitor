import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SpeakersService {

    private headers: HttpHeaders = new HttpHeaders();

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({
            'Ocp-Apim-Subscription-Key': '675cd0dfe70e40c7aab70a2257f7542e'
        });
    }

    getSpeakers(token: string): Observable<any> {
        return this.http.get('https://apimngr-genesis-dev.azure-api.net/conference-B2C/speakers', {
            headers: this.headers.set('Authorization', `Bearer ${token}`)
        });
    }

}
