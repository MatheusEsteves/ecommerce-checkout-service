const CheckoutController = require("../controllers/CheckoutController");

module.exports = (app) => {
    app.post("/checkout", CheckoutController.requestPurchase);
};
