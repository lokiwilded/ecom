Ext.define('WoiCommerce.view.ProfileEdit', {
    extend: 'Ext.window.Window',
    xtype: 'profileeditview',

    title: 'Edit Profile',
    modal: true,
    layout: 'vbox',

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
        text: 'Save Changes',
        handler: function() {
            // Implement save functionality
        }
    }]
});
