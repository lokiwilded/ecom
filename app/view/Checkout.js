Ext.define('WoiCommerce.view.Checkout', {
    extend: 'Ext.window.Window',
    xtype: 'checkoutview',

    title: 'Checkout',
    modal: true,
    layout: 'vbox',
    width: 400,
    height: 300,

    items: [{
        xtype: 'form',
        padding: 10,
        items: [
            { xtype: 'textfield', fieldLabel: 'Full Name', name: 'fullname', allowBlank: false },
            { xtype: 'textfield', fieldLabel: 'Address', name: 'address', allowBlank: false },
            { xtype: 'textfield', fieldLabel: 'Email', name: 'email', vtype: 'email', allowBlank: false },
            { xtype: 'numberfield', fieldLabel: 'Phone', name: 'phone', allowBlank: false }
        ]
    }],

    bbar: ['->', {
        text: 'Place Order',
        handler: 'onPlaceOrderClick'
    }],

    controller: {
        onPlaceOrderClick: function () {
            const form = this.getView().down('form').getForm();
            if (form.isValid()) {
                // Simulate order placement
                Ext.Msg.alert('Success', 'Order placed successfully!');
                this.getView().close();
            } else {
                Ext.Msg.alert('Error', 'Please fill in all required fields.');
            }
        }
    }
});
