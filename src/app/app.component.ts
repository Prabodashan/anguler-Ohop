import { UserService } from "./shared/sevices/user.service";
import { AuthService } from "./shared/sevices/auth.service";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(
    private userService: UserService,
    private auth: AuthService,
    router: Router
  ) {
    auth.user$.subscribe((user) => {
      if (!user) return;
      userService.save(user);

      let returnUrl = localStorage.getItem("returnUrl");
      if (!returnUrl) return;
      router.navigateByUrl(returnUrl);
      localStorage.removeItem("returnUrl");
    });
  }
}
