Ext.define('WoiCommerce.view.Login', {
    extend: 'Ext.window.Window',
    xtype: 'loginview',

    title: 'Login',
    modal: true,
    layout: 'vbox',
    width: 300,
    height: 200,

    items: [{
        xtype: 'form',
        padding: 10,
        items: [
            { xtype: 'textfield', fieldLabel: 'Email', name: 'email', vtype: 'email', allowBlank: false },
            { xtype: 'textfield', fieldLabel: 'Password', name: 'password', inputType: 'password', allowBlank: false }
        ]
    }],

    bbar: ['->', {
        text: 'Login',
        handler: 'onLoginClick'
    }],

    controller: {
        onLoginClick: function () {
            const form = this.getView().down('form').getForm();
            if (form.isValid()) {
                const values = form.getValues();
                Ext.Ajax.request({
                    url: 'http://localhost:5000/api/auth/login',
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
                Ext.Msg.alert('Error', 'Please enter your credentials.');
            }
        }
    }
});
