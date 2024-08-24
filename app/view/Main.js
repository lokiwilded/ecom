Ext.define('WoiCommerce.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'mainview',

    requires: [
        'Ext.layout.container.Card',
        'WoiCommerce.view.NavigationBar',
        'WoiCommerce.view.Home',
        'WoiCommerce.view.ProductList',
        'WoiCommerce.view.Cart',
        'WoiCommerce.view.Profile'
    ],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'navigationbar',
            docked: 'top'
        },
        {
            xtype: 'container',
            id: 'mainContent',
            layout: {
                type: 'card',
                animation: {
                    type: 'fade',  // Adds fade animation
                    duration: 500  // Duration of the fade effect in milliseconds
                }
            },
            flex: 1,
            items: [
                { xtype: 'homeview' },      
                { xtype: 'productlist' },   
                { xtype: 'cartview' },      
                { xtype: 'profileview' }    
            ]
        }
    ]
});
