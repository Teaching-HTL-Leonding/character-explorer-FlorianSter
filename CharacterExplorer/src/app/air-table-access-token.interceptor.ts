import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AirTableAccessTokenInterceptor implements HttpInterceptor {

  constructor(@Inject('AIRTABLE_ACCESS_TOKEN') private accessToken: string) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {Authorization: 'Bearer ' + this.accessToken}
    });
    return next.handle(request);
  }
}
