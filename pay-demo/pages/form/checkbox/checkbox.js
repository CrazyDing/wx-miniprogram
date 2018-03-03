// pages/form/checkbox/checkbox.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    flagText:'全选'
  },
  checkboxChange: function (e) {
    console.log('================e==================',e)
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  checkAll:function(e){
    console.log('========checkAll========',e);
    if(this.data.flagText == "全选"){
      let itemsCopy = this.data.items;
      itemsCopy.map((item) => {
        item.checked = true;
      })
      this.setData({
        items: itemsCopy,
        flagText:"全不选"
      })
    }else{
      let itemsCopy = this.data.items;
      itemsCopy.map((item) => {
        item.checked = false;
      })
      this.setData({
        items: itemsCopy,
        flagText: "全选"
      })
    }
  },
})