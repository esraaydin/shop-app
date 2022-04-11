import {Injectable} from '@angular/core';
import {Category} from '../category/category';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
import {newArray} from '@angular/compiler/src/util';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  path = 'http://localhost:3000/categories';

  getCategories(categoryId: number): Observable<Category[]> {

    let newPath = this.path;
    if (categoryId) {
      newPath = newPath + '?categoryId=' + categoryId;
    }

    return this.http.get<Category[]>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  // tslint:disable-next-line:typedef
  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Bir hata oluştu' + err.error.message;
    } else {
      errorMessage = 'Sistemsel bir hata oluştu';
    }
    return throwError(errorMessage);
  }
}
