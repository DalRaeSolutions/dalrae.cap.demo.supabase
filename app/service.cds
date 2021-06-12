using OrderService from '../srv/order-service';

annotate OrderService.WorkOrders with @(UI : {LineItem : [
  {Value : ID, Label: 'Order' },
  {Value : startDate, Label: 'Start date' },
  {Value : endDate, Label: 'End date'},
  {Value : customerName, Label: 'Customer'},
  {Value : createdBy, Label: 'Ordered by'},
  {Value : createdAt, Label: 'Ordered on'}
]});