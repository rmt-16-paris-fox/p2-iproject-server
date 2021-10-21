const midtransClient = require('midtrans-client');

const coreApi = (req, res, next) => new midtransClient.Snap({
  isProduction: false,
  serverKey: 'SB-Mid-client-MrmEXVfyZ8ef8McI',
  clientKey: 'SB-Mid-server-Z3Unw_u_zypQKoAvG3JVEtuB'
});


const success = (req, res, next, order_id, price) => {
  let parameter = {
    "transaction_details": {
      "order_id": order_id,
      "gross_amount": price
    }, "credit_card": {
      "secure": true
    }
  };
  snap.createTransaction(parameter)
    .then((transaction) => {
      // transaction redirect_url
      let redirectUrl = transaction.redirect_url;
      console.log('redirectUrl:', redirectUrl);
    })
}

module.exports = { coreApi, snap };