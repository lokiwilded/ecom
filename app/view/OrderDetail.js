Ext.define('WoiCommerce.view.OrderDetail', {
    extend: 'Ext.window.Window',
    xtype: 'orderdetailview',

    title: 'Order Details',
    modal: true,
    layout: 'vbox',

    items: [{
        xtype: 'panel',
        html: 'Order details go here...'
    }]
});
