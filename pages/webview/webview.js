/**
 * @file demo page for webview
 * @author bailonggang
 */
/* globals Page, swan */

const webviewUrl = 'https://smartprogram.baidu.com';
Page({
    data: {
        src: ''
    },
    onLoad(options) {
        if (options.webview) {
            this.setData('src', webviewUrl);
        }
    },
    openWebViewCurrent() {
        this.setData('src', webviewUrl);
    },
    openWebViewInNewPage() {
        swan.navigateTo({
            url: '/pages/webview/webview?webview=1'
        });
    }
});