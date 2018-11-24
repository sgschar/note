import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
// import { Observable} from 'rxjs/Observable';
import { Observable,throwError,of  } from 'rxjs';
// import { from } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // data: Observable<Array<number>>;
  data: any;

  constructor(private http :HttpClient) {
    console.log(Observable);

   }
  getData(){
    return this.data = new  Observable(obs=>{
      obs.next(2);
      obs.next(3);
      obs.error("err");
    })
    
  }
  getTextFile(filename: string) {
    // The Observable returned by get() is of type Observable<string>
    // because a text response was specified.
    // There's no need to pass a <string> type parameter to get().
    return this.http.get("filename", {responseType: 'text'})
      .pipe(
        tap( // Log the result or error
          data => console.log(data),
          error => console.log(filename, error)
        )
      );
  }
 // HttpClient.get() 会返回一个 HttpResponse 类型的 Observable
  getUsers (){
    return this.http.get("http://localhost/server/user/5_user_list.php")
                    .pipe(retry(2),catchError(this.handleError('getUser',[])));
  
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
