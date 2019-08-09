import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Group } from '../model/group';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { SourceData } from '../model/source-data';
@Injectable({
  providedIn: 'root'
})
export class GetAllProductService {

  constructor(private httpClient: HttpClient) { }
  getAllProduct(): Observable<SourceData[]> {
    return this.httpClient.get('/services/catalog/v4/category/shop/new/all-new/index.json')
    .pipe(map(response => response as SourceData[]), catchError(error => throwError(error)));
  }
}
