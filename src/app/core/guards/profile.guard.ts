import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const profileGuard = (): CanActivateFn => {
    return () => {
        const router=inject(Router)
        const isLogin = localStorage.getItem('isLogin');
        console.log('[isLogin]',isLogin);
        if (isLogin && isLogin == 'true') {
            return true;

        }
        return router.navigate(['/home']);
    };
}