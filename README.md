# ionic2woocommerce1.0

# How to install 
--------------------
1. Run npm install
2. Ionic serve

# Where to change 
--------------------

1. Put you woocommerce url link eg. http//:Your_Site_Name.com/
2. Change will be made in src\app\wooClass.ts 
3. Genrate consumerKey & consumerSecret for autotication 
return new WooCommerceAPI({
      url: '', // Your store url (required)
      // version: 'v3', // WooCommerce API version (optional)
      // verifySsl: true, // Use `false` when need test with self-signed certificates, default is `true` (optional)
      // encoding: 'utf8', // Encode, default is 'utf8' (optional)
      consumerKey: '', // Your API consumer key (required)
      consumerSecret: '' // Your API consumer secret (required)
    });

