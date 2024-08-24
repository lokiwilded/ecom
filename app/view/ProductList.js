Ext.define('WoiCommerce.view.ProductList', {
    extend: 'Ext.panel.Panel',
    xtype: 'productlist',

    requires: [
        'Ext.grid.Panel',
        'WoiCommerce.store.Products'
    ],

    title: 'Product Listing',

    layout: 'fit',

    items: [{
        xtype: 'dataview',
        store: {
            type: 'products'
        },
        itemTpl: new Ext.XTemplate(
            '<tpl for=".">',
                '<div class="product">',
                    '<img src="{image}" loading="lazy" alt="{name}" />',  // Lazy loading for images
                    '<div>{name} - {price}</div>',
                '</div>',
            '</tpl>'
        ),
        emptyText: 'No products available'
    }]
});
