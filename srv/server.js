const cds = require("@sap/cds");
const implementation = require('./serverImplementation');

cds.on("bootstrap", async (app) => await implementation(app));

module.exports = cds.server;
