/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
    data: {
        key: '',
        value: ''
    },
    keyInput(e) {
        this.setData('key', e.detail.value);
    },
    valueInput(e) {
        this.setData('value', e.detail.value);
    },
    setStorage() {
        let key = this.hasKey();
        if (!key) {
            return;
        }
        swan.setStorage({
            key,
            data: this.getData('value'),
            success: res => {
                this.toast('存储数据成功', 'success');
            },
            fail: err => {
                this.toast('存储数据失败');
            }
        });
    },
    getStorage() {
        let key = this.hasKey();
        if (!key) {
            return;
        }
        swan.getStorage({
            key,
            success: res => {
                const data = res.data;
                if (data) {
                    swan.showModal({
                        title: '读取数据成功',
                        content: `data: ${data}`,
                        showCancel: false
                    });
                } else {
                    this.toast('找不到key对应的值');
                }
            },
            fail: err => {
                this.toast('读取数据失败');
            }
        });
    },
    clearStorage() {
        swan.clearStorageSync();
        this.toast('清除数据成功', 'success');
    },
    hasKey() {
        let key = this.getData('key');
        if (key) {
            return key;
        }
        this.toast('key不能为空');
    },
    toast(title, icon = 'none') {
        swan.showToast({title, icon});
    }
});
