import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private BASE_URL = 'http://apolis-grocery.herokuapp.com/api'

  constructor(private http:HttpClient) { }

  getCategories():Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/category`)
  }

  getSubCategoryByCatId(catId: number): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/subcategory/${catId}`)
  }

  getProductByCatId(catId: number):Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/products/cat/${catId}`)
  }

  getProductById(pid: string){
    return this.http.get(`${this.BASE_URL}/products/${pid}`)
  }
}
