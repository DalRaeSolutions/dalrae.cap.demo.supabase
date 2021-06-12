  "cds": {
    "requires": {
      "auth": {
        "impl": "libs/auth.js"
      },
      "db": {
        "kind": "database"
      },
      "database": {
        "impl": "cds-pg",
        "model": [
          "srv"
        ]
      }
    },
    "migrations": {
      "db": {
        "schema": {
          "default": "public",
          "clone": "_cdsdbm_clone",
          "reference": "_cdsdbm_ref"
        },
        "deploy": {
          "tmpFile": "tmp/_autodeploy.json",
          "undeployFile": "db/undeploy.json"
        }
      }
    }
  },