Ext.application({
    extend: 'WoiCommerce.Application',

    name: 'WoiCommerce',

    requires: [
        'WoiCommerce.*'
    ],

    // The name of the initial view to create.
    mainView: 'WoiCommerce.view.main.Main' // Update this to the new Main view
});
