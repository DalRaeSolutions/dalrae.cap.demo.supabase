using {
  managed,
  sap,
  cuid,
  sap.common.CodeList
} from '@sap/cds/common';

namespace dalrae.cap.supabase.demo;

entity WorkOrders : cuid, managed {
  description : String(100);
  startDate   : Date;
  endDate     : Date;
  customer    : Association to Customers;
  price       : Decimal;
  currency    : String(1) default '$';
  paid        : Boolean default false;
  paidStatus : Integer default 1;
}

@cds.odata.valuelist
entity Customers : cuid, managed {
  name   : String(100);
  orders : Composition of many WorkOrders
             on orders.customer = $self;
}
