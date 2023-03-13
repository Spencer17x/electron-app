/**
 * @file demo page for swan
 * @author houyu
 */
/* globals Page */

Page({
    data: {
        id: 'detail'
    },
    onLoad(options) {
        this.setData({
            'id': options.id
        });
    }
});
