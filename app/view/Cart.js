Ext.define('WoiCommerce.view.Cart', {
    extend: 'Ext.panel.Panel',
    xtype: 'cartview',

    requires: [
        'Ext.grid.Panel'
    ],

    title: 'Shopping Cart',
    layout: 'fit',

    items: [{
        xtype: 'grid',
        store: {
            type: 'cart'
        },
        columns: [
            { text: 'Product Name', dataIndex: 'name', flex: 1 },
            { text: 'Price', dataIndex: 'price', flex: 1 },
            { 
                text: 'Quantity', 
                dataIndex: 'quantity', 
                flex: 1, 
                editor: {
                    xtype: 'numberfield',
                    allowBlank: false,
                    minValue: 1
                }
            },
            { 
                text: 'Total', 
                dataIndex: 'total', 
                flex: 1, 
                renderer: function (value, metaData, record) {
                    return record.get('price') * record.get('quantity');
                } 
            }
        ],
        selType: 'rowmodel',
        plugins: {
            ptype: 'rowediting',
            clicksToEdit: 2
        },
        bbar: ['->', {
            text: 'Proceed to Checkout',
            handler: 'onCheckoutClick'
        }],
        listeners: {
            edit: function(editor, e) {
                const record = e.record;
                record.set('total', record.get('price') * record.get('quantity'));
                record.commit();
            }
        }
    }],

    controller: {
        onCheckoutClick: function () {
            Ext.Msg.confirm('Confirm', 'Are you sure you want to proceed to checkout?', function (choice) {
                if (choice === 'yes') {
                    Ext.create('WoiCommerce.view.Checkout').show(); // Open the checkout window
                }
            });
        }
    }
});
