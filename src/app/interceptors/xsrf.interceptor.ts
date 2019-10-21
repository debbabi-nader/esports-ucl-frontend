import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpXsrfTokenExtractor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable()
export class XsrfInterceptor implements HttpInterceptor {

    static readonly XSRF_HEADER_NAME = 'X-XSRF-TOKEN';

    constructor(
        private httpXsrfTokenExtractor: HttpXsrfTokenExtractor
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (request.method === 'GET' || request.method === 'HEAD') {
            return next.handle(request);
        }

        const TOKEN = this.httpXsrfTokenExtractor.getToken();

        if (TOKEN !== null && !request.headers.has(XsrfInterceptor.XSRF_HEADER_NAME)) {
            request = request.clone({ headers: request.headers.set(XsrfInterceptor.XSRF_HEADER_NAME, TOKEN) });
        }

        return next.handle(request);

    }

}
