import proxy from 'http-proxy-middleware';

module.exports = function(app) {
    const headers  = {
        "Content-Type": "application/json",
    }
    app.use(proxy("/route.json?stops=", { target: "https://www.distance24.org/",changeOrigin: true,secure: false,headers: headers}));  
};