using { managed, sap, cuid, sap.common.CodeList } from '@sap/cds/common';

namespace dalrae.cap.supabase.demo;

entity WorkOrders : cuid, managed {
  description: String(100);
  startDate: Date;
  endDate: Date;
  customer: Association to Customers;
}

entity Customers : cuid, managed {
  name: String(100);
  orders: Association to many WorkOrders on orders.customer = $self;
}
