Ext.define('WoiCommerce.view.ProductDetail', {
    extend: 'Ext.window.Window',
    xtype: 'productdetail',

    title: 'Product Details',
    modal: true,
    layout: 'vbox',
    width: 500,
    height: 400,

    items: [{
        xtype: 'panel',
        tpl: new Ext.XTemplate(
            '<div class="product-detail">',
            '<h1>{name}</h1>',
            '<p>Price: {price}</p>',
            '<p>{description}</p>',
            '<img src="{image}" alt="{name}" style="width:100%"/>',
            '<p>Size: <select><option>Small</option><option>Medium</option><option>Large</option></select></p>',
            '<p>Color: <select><option>Red</option><option>Blue</option><option>Green</option></select></p>',
            '</div>'
        ),
        bind: {
            data: '{record.data}' // Bind the data to the product record
        }
    }],

    bbar: ['->', {
        text: 'Add to Cart',
        handler: 'onAddToCartClick'
    }],

    controller: {
        onAddToCartClick: function () {
            // Handle adding the product to the cart
            Ext.Msg.alert('Success', 'Product added to cart!');
            this.getView().close();
        }
    }
})
