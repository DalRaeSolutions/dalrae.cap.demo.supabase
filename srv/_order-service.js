module.exports = async function (srv) {
  const { Orders } = srv.entities;

  srv.after("READ", Orders, (each) => {
    each.paidStatus = each.paid ? 3 : 1;
  });

  srv.before("*", Orders, (req) => {
    try {
      const email = req?.user?.email;
      if (req?.query?.INSERT?.data) {
        req.query.INSERT.data.modifiedBy = email;
        req.query.INSERT.data.createdBy = email;
      } else if (req?.query?.INSERT?.entries) {
        req.query.INSERT.entries.forEach((e) => {
          e.modifiedBy = email;
          e.createdBy = email;
          e.currency = "$";
        });
      } else if (req?.query?.UPDATE) {
        req.query.UPDATE.data.modifiedBy = email;
      }
    } catch (e) {
      console.log(e);
    }

    console.log(req.query);
  });
};
