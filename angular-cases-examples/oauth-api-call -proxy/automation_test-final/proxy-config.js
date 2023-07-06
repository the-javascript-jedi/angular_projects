const PROXY_CONFIG = {
  "/seed/*": {
    // dev server
    // 'target':'http://10.123.216.154:8000/',
    // python local
    target: "https://testurl.com/",
    secure: true,
    logLevel: "debug",
    pathRewrite: {
      "^/seed": "",
    },
  },
};

module.exports = PROXY_CONFIG;
