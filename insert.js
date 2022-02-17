/* eslint-disable no-unused-vars */
const fs = require('fs').promises;
const path = require('path');
const cds = require('@sap/cds')


const readCSV = async () => {

    const dPath = path.normalize(__dirname + '/db/data/');
    const csv = await (await fs.readdir(dPath)).filter(f => /.csv$/.test(f));
    const content = await Promise.all(csv.map(async c => fs.readFile(path.normalize(`${dPath}/${c}`), 'utf-8')));

    const files = csv.map((c, i) => {
      return {
        table: c.replace('.csv', '').replace('-', '.'),
        columns: content[i].split('\n')[0].split(';'),
        rows: content[i].split('\n').slice(1).filter(l => !!l).map(l => l.split(';'))
      }
    });

  return files;
}

const setup = async () => {
  await cds.connect({
    "impl": "cds-pg",
    "model": [
      "srv"
    ],
    //add this stuff yourself if you want to seed your database. 
    "credentials": {
      "host": "db.<host>.supabase.co",
      "port": "<port>",
      "database": "<db>",
      "user": "<user>",
      "password": "<pw>"
    }
  })

  const files = await readCSV();
  await Promise.all(files.map(async (f) => cds.run(INSERT.into(f.table).columns(f.columns).rows(f.rows))))
}

// uncomment this to run. 
setup();