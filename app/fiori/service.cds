using OrderService from '../../srv/order-service';

annotate OrderService.WorkOrders with @(UI : {LineItem : [
  {
    Value : ID,
    Label : 'ID'
  },
  {
    Value : createdBy,
    Label : 'Created by'
  },
  {
    Value : createdAt,
    Label : 'Date'
  },
  {
    Value : description,
    Label : 'Description'
  },
  {
    Value : customerName,
    Label : 'Customer'
  }
]});