/**
 * @file test for chooseVideo api
 * @author haoyang
 */
/* globals Page, swan */
/* eslint-disable new-cap */

Page({
    data: {
        sourceIndex: 2,
        sourceArray: ['拍摄', '相册', '拍摄或相册'],
        compressIndex: 0,
        compressArray: ['压缩', '不压缩'],
        durationIndex: 0,
        durationArray: [],
        videoSrc: ''
    },
    onLoad() {
        const array = [];
        for (let i = 0; i < 60; i++) {
            array.push(i + 1 + '秒');
        }
        this.setData({
            durationIndex: array.length - 1,
            durationArray: array
        });
    },
    sourceChange(e) {
        this.setData('sourceIndex', e.detail.value);
    },
    compressChange(e) {
        this.setData('compressIndex', e.detail.value);
    },
    durationChange(e) {
        this.setData('durationIndex', e.detail.value);
    },
    selectVideo() {
        const sourceIndex = this.getData('sourceIndex');
        const compressed = this.getData('compressIndex') === 0;
        const maxDuration = this.getData('durationIndex') + 1;
        if (sourceIndex === 2) {
            swan.showActionSheet({
                itemList: ['拍摄', '相册'],
                success: res => {
                    const sourceType = res.tapIndex === 0 ? 'camera' : 'album';
                    this.chooseVideo(sourceType, compressed, maxDuration);
                }
            });
        } else {
            const sourceType = sourceIndex === 0 ? 'camera' : 'album';
            this.chooseVideo(sourceType, compressed, maxDuration);
        }
    },
    chooseVideo(sourceType, compressed, maxDuration) {
        swan.chooseVideo({
            sourceType: [sourceType],
            compressed,
            maxDuration,
            success: res => {
                this.setData('videoSrc', res.tempFilePath);
            },
            fail: err => {
                console.log('chooseVideo fail', err);
            }
        });
    },
    clearVideo() {
        if (this.getData('videoSrc')) {
            this.setData('videoSrc', '');
            swan.showToast({title: '视频已清空'});
        }
    },
    videoError() {
        this.setData('videoSrc', '');
        swan.showToast({title: '添加失败，请稍后重试', icon: 'none'});
    }
});
