/**
 * @file demo page for lottie
 * @author rabbit77
 */
/* globals Page, swan */
Page({
    data: {
        title: 'movable-view',
        x: 0,
        y: 0,
        scale: 2
    },
    move() {
        this.setData({
            x: 30,
            y: 30
        })
    },
    scale() {
        this.setData({
            scale: 3
        })
    },
    onChange(e) {
        console.log(e.detail)
    },
    onScale(e) {
        console.log(e.detail)
    }
});
