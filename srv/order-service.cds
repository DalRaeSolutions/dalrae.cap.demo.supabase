using { dalrae.cap.supabase.demo as t } from '../db/schema';

service OrderService @(path: '/orders', requires: 'authenticated-user') {

  entity WorkOrders as projection on t.WorkOrders {
    *,
    customer.name as customerName
  }
}