import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
// import { Observable} from 'rxjs/Observable';
import { Observable } from 'rxjs';
// import { from } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // data: Observable<Array<number>>;
  data: any;

  constructor(private http :HttpClient) {
    console.log(Observable);

   }
  // getData(){
  //   return this.data = new  Observable(obs=>{
  //     obs.next(2);
  //     obs.next(3);
  //     obs.error("err");
  //   })
    
  // }
 
  getUsers (): Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/users")
                    .pipe(catchError(this.handleError('getUser',[])));
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return null;
  };
}
}
