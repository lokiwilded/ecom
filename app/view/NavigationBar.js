Ext.define('WoiCommerce.view.NavigationBar', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'navigationbar',

    requires: [
        'Ext.button.Button'
    ],

    items: [
        {
            xtype: 'button',
            text: 'Home',
            handler: function() {
                Ext.getCmp('mainContent').getLayout().setActiveItem(0); // Navigate to Home view
            }
        },
        {
            xtype: 'button',
            text: 'Products',
            handler: function() {
                Ext.getCmp('mainContent').getLayout().setActiveItem(1); // Navigate to Product Listing view
            }
        },
        {
            xtype: 'button',
            text: 'Cart',
            handler: function() {
                Ext.getCmp('mainContent').getLayout().setActiveItem(2); // Navigate to Cart view
            }
        },
        {
            xtype: 'tbfill' // Fills space to push the next items to the right
        },
        {
            xtype: 'button',
            text: 'Profile',
            handler: function() {
                Ext.getCmp('mainContent').getLayout().setActiveItem(3); // Navigate to Profile view
            }
        },
        {
            xtype: 'button',
            text: 'Logout',
            handler: function() {
                Ext.Msg.confirm('Logout', 'Are you sure you want to logout?', function(choice) {
                    if (choice === 'yes') {
                        // Implement logout functionality
                    }
                });
            }
        }
    ]
});
