Ext.define('WoiCommerce.view.OrderHistory', {
    extend: 'Ext.panel.Panel',
    xtype: 'orderhistoryview',

    title: 'Order History',
    layout: 'fit',

    items: [{
        xtype: 'grid',
        store: {
            type: 'orders' // Ensure the orders store is defined
        },
        columns: [
            { text: 'Order ID', dataIndex: 'orderId', flex: 1 },
            { text: 'Date', dataIndex: 'orderDate', flex: 1 },
            { text: 'Total', dataIndex: 'totalAmount', flex: 1 },
            { text: 'Status', dataIndex: 'status', flex: 1 }
        ],
        listeners: {
            itemclick: function(view, record) {
                Ext.create('WoiCommerce.view.OrderDetail', {
                    record: record
                }).show();
            }
        }
    }]
});
