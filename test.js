const fs = require('fs').promises;

const init = async () => {
  const f = (await fs.readFile('./db/data/dalrae.cap.supabase.demo-WorkOrders.csv', 'utf-8')).split('\n')
    .map((l, i) => {
      if (i > 0) {
        l += `;${~~(Math.random() * 10000000) / 100};AUD;${Math.random() > 0.7}`
      } else {
        l += ';price;currency;paid'
      }

      return l;
    });

  fs.writeFile('./db/data/dalrae.cap.supabase.demo-WorkOrders.csv', f.join('\n'))

}

init();