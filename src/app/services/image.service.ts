import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  getAllGalleries(): Observable<any> {
    const headers = { 'Access-Control-Allow-Origin': '*' };
    return this.http.get<any>('http://localhost:8000/galleries', { headers });
  }

  getGallery(gallery: string): Observable<any> {
    const headers = { 'Access-Control-Allow-Origin': '*' };
    return this.http.get<any>('http://localhost:8000/galleries/' + gallery, { headers });
  }

  getImage(gallery: string, filename: string): Observable<any> {
    const headers = { 'Access-Control-Allow-Origin': '*' };
    return this.http.get<any>('http://localhost:8000/galleries/' + gallery + "/" + filename, { headers });
  }
}
