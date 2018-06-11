import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { <%= classify(authService) %>Service } from './<%=dasherize(authServicePath)%>';

@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>Interceptor implements HttpInterceptor {
  authService: <%= classify(authService) %>Service;
  constructor(private injector: Injector) {
  }

  intercept(request: HttpRequest < any >, next: HttpHandler) {
    // if AuthProvider has not been injected, do it.
    if (!this.authService) {
      this.authService = this.injector.get(<%= classify(authService) %>Service);
    }
    // addding auth headers only for protected urls
    const protectedUrls = [
      'api/user',
      'api/todo'
    ];
    if (protectedUrls.find((pUrl) => (request.url.includes(pUrl)))) {
      request = this.appendToken(request, this.authService.getToken());
    }

    return next.handle(request);
  }

  appendToken(request: HttpRequest<any>, token: string) {
    const auth = {
      token
    }
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${auth.token}`
      }
    });
  }
}
