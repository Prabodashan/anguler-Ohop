import { AuthService } from "../../../shared/sevices/auth.service";
import { OrderService } from "../../../shared/sevices/order.service";
import { Component, OnInit } from "@angular/core";
import "rxjs/add/operator/switchMap";

@Component({
  selector: "app-my-orders",
  templateUrl: "./my-orders.component.html",
  styleUrls: ["./my-orders.component.css"],
})
export class MyOrdersComponent {
  orders$;

  constructor(
    private authService: AuthService,
    private orderService: OrderService
  ) {
    this.orders$ = authService.user$.switchMap((u) =>
      orderService.getOrdersByUser(u.uid)
    );
  }
}
