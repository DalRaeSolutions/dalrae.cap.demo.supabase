const cds = require('@sap/cds');

module.exports = async function (srv) {

  // const { Messages } = srv.entities;

  srv.on('createMessage', async (req, next) => {

    const { req: { body } } = req;
    const { channel_ID, message } = body;

    if (!(channel_ID && message)) return next(Error('Missing fields'))

    try {
      const trx = cds.transaction(req);
  
      const { req: { query: { INSERT: { entries } } } } = await trx.run(INSERT.into('dalrae.cap.supabase.chat.Message').entries({channel_ID, message}))
      return trx.run(SELECT.from('dalrae.cap.supabase.chat.Message').where({ ID: entries[0].ID }))
    } catch (err) {
      console.log(err);
      return next(Error(err.message || err))
    }
  });
};