import { DataTableModule } from "angular-4-data-table";
import { CustomFormsModule } from "ng2-validation";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ProductQuantityComponent } from "./components/product-quantity/product-quantity.component";

import { AuthGuard } from "./sevices/auth-guard.service";
import { AuthService } from "./sevices/auth.service";
import { CategoryService } from "./sevices/category.service";
import { OrderService } from "./sevices/order.service";
import { ProductService } from "./sevices/product.service";
import { ShoppingCartService } from "./sevices/shopping-cart.service";
import { UserService } from "./sevices/user.service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
  ],
  declarations: [ProductCardComponent, ProductQuantityComponent],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot().ngModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService,
  ],
})
export class SharedModule {}
