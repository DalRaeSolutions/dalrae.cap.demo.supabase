const fs = require('fs').promises;

const init = async () => {
  const keys = Object.keys(process.env).filter(k => /^cds/.test(k)).map(k => `${k.replace(/_/gi, '.')}=${process.env[k]}`)

  console.log(keys)

  await fs.writeFile('.env', keys.join('\n'))
}

init();