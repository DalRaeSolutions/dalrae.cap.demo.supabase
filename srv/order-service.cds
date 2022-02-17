using { dalrae.cap.supabase.demo as t } from '../db/schema';

service OrderService @(path: '/orders', requires: 'authenticated-user') {
  @odata.draft.enabled
  entity WorkOrders as projection on t.WorkOrders;
  entity Customers  as projection on t.Customers;
}