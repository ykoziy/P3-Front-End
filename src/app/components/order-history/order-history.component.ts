import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderHistoryItem } from 'src/app/models/order-history-item';
import { OrderHistoryService } from 'src/app/services/order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orderHistoryItemCount!: number;
  orderHistoryItems: {
    orderHistoryItem: OrderHistoryItem
  }[] = [];
  orderHistory: OrderHistoryItem[] = [];



  constructor(private orderHistoryService: OrderHistoryService, private router: Router) { }

  ngOnInit(): void {
	    this.orderHistoryService.getOrderHistory().subscribe(
      (orderHistory) => {
        this.orderHistoryItems = orderHistory.orderHistoryItems;
        this.orderHistoryItems.forEach
        (
          (element) => this.orderHistory.push(element.orderHistoryItem)
        );
        this.orderHistoryItemCount = orderHistory.orderHistoryItemCount
      }
    );
  }


  emptyOrderHistory(): void {
    let orderHistory = {
      orderHistoryItemCount: 0,
      orderHistoryItems: [],
    };
    this.orderHistoryService.setOrderHistory(orderHistory);
    this.router.navigate(['/home']);
  };