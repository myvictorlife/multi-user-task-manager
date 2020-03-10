import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './service/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = this.addToken(request);
        return next.handle(request);
    }

    private addToken(request: HttpRequest<any>) {
        const token = this.tokenService.getToken();
        if(token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
            return request;
        }
        // Show Message or Redirect to User does not have access
        return request;
    }
}