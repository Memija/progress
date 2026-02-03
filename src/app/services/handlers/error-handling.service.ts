import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * Error handling service.
 */
@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
  /**
   * Handle error.
   * @param error Error
   * @returns Error.
   */
  public handleError(error: HttpErrorResponse): Observable<Error> {
    if (!environment.production) {
      console.error(error.message); // NOSONAR
    }

    return throwError(() => new Error('An error has occurred. We apologize for the inconvenience. Please try again later.'));
  }
}
