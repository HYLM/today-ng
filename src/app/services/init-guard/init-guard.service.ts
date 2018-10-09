import {Injectable} from '@angular/core';
import {LocalStorageService} from '../local-storage/local-storage.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {INIT_FLAG} from '../local-storage/local-storage.namespace';

@Injectable({
  providedIn: 'root'
})
export class InitGuardService implements CanActivate {

  constructor(private store: LocalStorageService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('路由守卫。。。');
    const init = !!this.store.get(INIT_FLAG);

    if (state.url.includes('setup') && init) {
      this.router.navigateByUrl('/main');
      return false;
    }
    if (state.url.includes('main') && !init) {
      this.router.navigateByUrl('/setup');
      return false;
    }
    if (state.url.includes('summary') && !init) {
      this.router.navigateByUrl('/setup');
      return false;
    }
    return true;
  }

}
