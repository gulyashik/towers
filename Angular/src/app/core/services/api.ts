import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:5000/';
@Injectable()
export class ApiService {
    towers=[];
    constructor (private http: HttpClient) {}
    getValues() {
        return this.http.get(apiUrl + 'api/values');
    }
}