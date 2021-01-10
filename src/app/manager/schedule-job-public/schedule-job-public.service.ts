import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ScheduleJobPublicService {
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
    getClean(): any {
        let headers = { authorization: localStorage.getItem('authorization') || '', site_id: localStorage.getItem('site_id') || '' }
        return this.http.get(`${this.url}/clean/all`, { headers });
    }
    getCleanStatus(): any {
        let headers = { authorization: localStorage.getItem('authorization') || '', site_id: localStorage.getItem('site_id') || '' }
        return this.http.get(`${this.url}/clean-status/all`, { headers });
    }
    publicArea(): any {
        let headers = { authorization: localStorage.getItem('authorization') || '', site_id: localStorage.getItem('site_id') || '' }
        return this.http.get(`${this.url}/public-area/all`, { headers });
    }
    
    getCheckStatus(): any {
        let headers = { authorization: localStorage.getItem('authorization') || '', site_id: localStorage.getItem('site_id') || '' }
        return this.http.get(`${this.url}/check-status/all`, { headers });
    }
    getUser(): any {
        let headers = { authorization: localStorage.getItem('authorization') || '', site_id: localStorage.getItem('site_id') || '' }
        return this.http.get(`${this.url}/user/all`, { headers });
    }

    
}