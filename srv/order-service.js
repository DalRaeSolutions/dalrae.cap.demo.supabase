module.exports = async function (srv) {
  const { Orders } = srv.entities;

  srv.after('READ', Orders, (each) => {
    each.paidStatus = each.paid ? 3 : 1;
  })
}