/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        sourceIndex: 2,
        sourceArray: ['拍照', '相册', '拍照或相册'],
        sizeIndex: 2,
        sizeArray: ['压缩', '原图', '压缩或原图'],
        countIndex: 0,
        countArray: [],
        imageList: []
    },
    onLoad() {
        const array = [];
        for (let i = 0; i < 9; i++) {
            array.push(i + 1);
        }
        this.setData({
            countIndex: array.length - 1,
            countArray: array
        });
    },
    sourceChange(e) {
        this.setData('sourceIndex', e.detail.value);
    },
    sizeChange(e) {
        this.setData('sizeIndex', e.detail.value);
    },
    countChange(e) {
        this.setData('countIndex', e.detail.value);
    },
    selectImage() {
        const sourceIndex = this.getData('sourceIndex');
        const count = this.getData('countIndex') + 1;
        if (sourceIndex === 2) {
            swan.showActionSheet({
                itemList: ['拍照', '相册'],
                success: res => {
                    const sourceType = res.tapIndex === 0 ? 'camera' : 'album';
                    this.chooseImage(sourceType, count);
                }
            });
        } else {
            const sourceType = sourceIndex === 0 ? 'camera' : 'album';
            this.chooseImage(sourceType, count);
        }
    },
    chooseImage(sourceType, count) {
        const sizeIndex = this.getData('sizeIndex');
        let sizeType = ['compressed', 'original'];
        if (sizeIndex === 0) {
            sizeType = ['compressed'];
        } else if (sizeIndex === 1) {
            sizeType = ['original'];
        }
        
        swan.chooseImage({
            count,
            sizeType,
            sourceType: [sourceType],
            success: res => {
                this.setData('imageList', res.tempFilePaths);
            },
            fail: err => {
                console.log('chooseImage fail', err);
            }
        });
    },
    clearImage() {
        const imageList = this.getData('imageList');
        if (imageList.length > 0) {
            this.setData('imageList', []);
            swan.showToast({title: '清空图片成功'});
        } else {
            swan.showToast({title: '无可清空图片', icon: 'none'});
        }
    },
    previewImage(e) {
        swan.showToast({title: '暂不支持预览', icon: 'none'});
    }
});
