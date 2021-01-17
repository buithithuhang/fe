import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AssignmentService {
    constructor(private http: HttpClient) { }
    
    getCleanList() {

    }

    table = 'hotel';
    url = 'http://localhost:3001';
    propertiesUrl = ''

    getHotel(): any {
        let headers = { authorization: localStorage.getItem('authorization') || '', site_id: localStorage.getItem('site_id') || '' }
        return this.http.get(`${this.url}/hotel/all`, { headers });
    }
    getFloors(): any {
        let headers = { authorization: localStorage.getItem('authorization') || '', site_id: localStorage.getItem('site_id') || '' }
        return this.http.get(`${this.url}/floors/all`, { headers });
    }

    getRoom(): any {
        let headers = { authorization: localStorage.getItem('authorization') || '', site_id: localStorage.getItem('site_id') || '' }
        return this.http.get(`${this.url}/room/all`, { headers });
    }

    getPublicArea(): any {
        let headers = { authorization: localStorage.getItem('authorization') || '', site_id: localStorage.getItem('site_id') || '' }
        return this.http.get(`${this.url}/public-area/all`, { headers });
    }
    getUsers(): any {
        let headers = { authorization: localStorage.getItem('authorization') || '', site_id: localStorage.getItem('site_id') || '' }
        return this.http.get(`http://localhost:3000/user/all`, { headers });
    }
    
}