import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, of, throwError, tap } from "rxjs";
import { AuthQuery } from "src/app/auth/data-access/auth.query";
import { AuthService } from "src/app/auth/data-access/auth.service";
import { AuthStore } from "src/app/auth/data-access/auth.store";

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private authQuery: AuthQuery,
        private authService: AuthService,
        private router: Router
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.authQuery.getValue().token;
        if (!token) {
            token = document.cookie.split("=")[1];
            this.authService.setToken(token);
        }

        const modified = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`),
        })


        return next.handle(modified).pipe(
            // tap((res: any) => res.items.length === 0),
            catchError(err => {
                this.router.navigate(['/auth', 'login']);
                return of(err);
            }));
    }
}