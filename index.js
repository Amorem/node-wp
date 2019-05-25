var WPAPI = require("wpapi");
var wp = new WPAPI({ endpoint: "https://comidoc.com/wp-json" });

const start = async () => {
  const apiPromise = await WPAPI.discover("https://comidoc.com");
  console.log(apiPromise);
};

start();
