Ext.define('WoiCommerce.store.Cart', {
    extend: 'Ext.data.Store',

    alias: 'store.cart',

    fields: ['id', 'name', 'price', 'quantity', 'total'],

    data: [
        { id: 1, name: 'Product 1', price: 100, quantity: 1, total: 100 },
        { id: 2, name: 'Product 2', price: 200, quantity: 2, total: 400 }
    ]
});
