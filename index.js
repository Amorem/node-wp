var WPAPI = require("wpapi");
require("dotenv").config();
var wp = new WPAPI({
  endpoint: `https://${process.env.WP_DOMAIN}/wp-json`,
  username: process.env.WP_LOGIN,
  password: process.env.WP_PASSWORD
});

const discover = async () => {
  try {
    const apiPromise = await WPAPI.discover(`https://${process.env.WP_DOMAIN}`);
    console.log(apiPromise);
  } catch (err) {
    console.log("Discover Error", err);
  }
};

const post = async () => {
  try {
    const rest = await wp.posts().create({
      // "title" and "content" are the only required properties
      title: "25 may 2019 : Udemy Free courses & coupons",
      content: "Your post content",
      // Post will be created as a draft by default if a specific "status"
      // is not specified
      status: "publish"
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

// TODO: Thumbnail
// TODO: Excerpt
// TODO: 4 images
// TODO: Button avec lien affilié
// TODO: Catégorie UDEMY

//console.log(process.env.WP_LOGIN, process.env.WP_PASSWORD);
post();
//discover();
