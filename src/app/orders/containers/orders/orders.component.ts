import { Order } from '@state/order/order.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import * as fromStore from '@state/order/order.reducer';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Observable<Array<Order>>;

  constructor(private store: Store<fromStore.State>) {}

  ngOnInit() {
    this.orders = of([
      {
        id: '1',
        customerId: '1',
        lineItems: [
          {
            id: '1',
            productId: '1',
            quantity: 1,
            price: 100
          }
        ]
      }
    ]);
  }
}