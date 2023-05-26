import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthStore } from "./auth.store";
import { apiUrl } from "src/app/core/utils/api-url";
import { tap } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {

    constructor(
        private router: Router,
        private http: HttpClient,
        private authStore: AuthStore,
    ) {}


    login(identity: string, password: string) {
        return this.http.post(`${apiUrl}/users/auth-with-password`, {identity, password}).pipe(
            tap((res: any) => {
                this.authStore.update({token: res.token});
                this.router.navigate(['/kanban', 'board'])
                document.cookie = 'token=' + res.token+";Max-Age=2592000";
                
            })
        );
    }

    logout() {
        this.authStore.reset();
        document.cookie = 'token=; Max-Age=-99999999;';  
        this.router.navigate(['/auth', 'login']);
    }

    setToken(token: string): void {
        this.authStore.update({token});
    }
    
}
