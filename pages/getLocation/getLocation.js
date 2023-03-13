/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        loading: false,
        location: ''
    },
    getLocation(e) {
        this.setData('loading', true);
        swan.getLocation({
            type: 'gcj02',
            altitude: true,
            success: res => {
                this.setData('location', this.formatLocation(res.longitude, res.latitude));
            },
            fail: err => {
                swan.showToast({title: '获取失败'});
            },
            complete: () => {
                this.setData('loading', false);
            }
        });
    },
    clearLocation() {
        this.setData('location', '');
    },
    formatLocation(longitude, latitude) {
        if (typeof longitude === 'string' && typeof latitude === 'string') {
            longitude = parseFloat(longitude);
            latitude = parseFloat(latitude);
        }

        longitude = longitude.toFixed(2);
        latitude = latitude.toFixed(2);

        return {
            longitude: longitude.toString().split('.'),
            latitude: latitude.toString().split('.')
        };
    }
});
