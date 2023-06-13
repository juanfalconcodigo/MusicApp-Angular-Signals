import {
  HttpRequest,
  HttpEvent,
  HttpHandlerFn,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export const customInterceptor=(request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>>=> {
  console.log('[INTERCEPTOR]', request);
  request=request.clone({
    setHeaders:{
      'X-RapidAPI-Key':environment.apiKey,
      'X-RapidAPI-Host': environment.apiHost
    }
  })
  return next(request);
}
