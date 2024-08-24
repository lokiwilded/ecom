Ext.define('WoiCommerce.view.Home', {
    extend: 'Ext.container.Container',
    xtype: 'homeview',

    requires: [
        'Ext.layout.container.Fit',
        'Ext.grid.Panel',
        'WoiCommerce.view.ProductList' // Ensure this is correct
    ],

    layout: 'fit',

    items: [{
        xtype: 'panel',
        title: 'Featured Products',
        layout: 'fit',
        items: [{
            xtype: 'dataview',
            store: {
                type: 'products' // Ensure this store is correctly defined and available
            },
            itemTpl: '<div class="product">{name} - {price}</div>',
            emptyText: 'No products available'
        }],
        bbar: ['->', {
            text: 'View All Products',
            handler: function() {
                Ext.create('WoiCommerce.view.ProductList').show();
            }
        }]
    }]
});
