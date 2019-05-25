var WPAPI = require("wpapi");
require("dotenv").config();
var wp = new WPAPI({
  endpoint: "https://comidoc.com/wp-json",
  username: process.env.WP_LOGIN,
  password: process.env.WP_PASSWORD
});

const discover = async () => {
  const apiPromise = await WPAPI.discover("https://comidoc.com");
  console.log(apiPromise);
};

const post = async () => {
  const rest = await wp.posts().create({
    // "title" and "content" are the only required properties
    title: "25 may 2019 : Udemy Free courses & coupons",
    content: "Your post content",
    // Post will be created as a draft by default if a specific "status"
    // is not specified
    status: "publish"
  });
  console.log(res);
};

console.log(process.env.WP_LOGIN, process.env.WP_PASSWORD);
//post();
