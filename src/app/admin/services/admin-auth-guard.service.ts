import { UserService } from "../../shared/sevices/user.service";
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AuthService } from "../../shared/sevices/auth.service";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(private auth: AuthService, private userService: UserService) {}

  canActivate(): Observable<boolean> {
    return this.auth.appUser$.map((appUser) => appUser.isAdmin);
  }
}