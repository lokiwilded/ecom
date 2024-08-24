Ext.define('WoiCommerce.view.Register', {
    extend: 'Ext.window.Window',
    xtype: 'registerview',

    title: 'Register',
    modal: true,
    layout: 'vbox',
    width: 300,
    height: 250,

    items: [{
        xtype: 'form',
        padding: 10,
        items: [
            { xtype: 'textfield', fieldLabel: 'Full Name', name: 'fullname', allowBlank: false },
            { xtype: 'textfield', fieldLabel: 'Email', name: 'email', vtype: 'email', allowBlank: false },
            { xtype: 'textfield', fieldLabel: 'Password', name: 'password', inputType: 'password', allowBlank: false }
        ]
    }],

    bbar: ['->', {
        text: 'Register',
        handler: 'onRegisterClick'
    }],

    controller: {
        onRegisterClick: function () {
            const form = this.getView().down('form').getForm();
            if (form.isValid()) {
                const values = form.getValues();
                Ext.Ajax.request({
                    url: 'http://localhost:5000/api/auth/register',
                    method: 'POST',
                    jsonData: values,
                    success: function (response) {
                        const res = Ext.decode(response.responseText);
                        Ext.Msg.alert('Success', res.msg);
                        this.getView().close();
                    },
                    failure: function (response) {
                        const res = Ext.decode(response.responseText);
                        Ext.Msg.alert('Error', res.msg);
                    },
                    scope: this
                });
            } else {
                Ext.Msg.alert('Error', 'Please fill in all required fields.');
            }
        }
    }
});
