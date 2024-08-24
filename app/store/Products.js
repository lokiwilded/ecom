Ext.define('WoiCommerce.store.Products', {
    extend: 'Ext.data.Store',

    alias: 'store.products',

    fields: ['id', 'name', 'price', 'description', 'image'],

    proxy: {
        type: 'ajax',
        url: 'http://localhost:5000/api/products', // Update this with your backend URL
        reader: {
            type: 'json',
            rootProperty: ''
        }
    },

    autoLoad: true
});
