//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  gotoPage:function(e){
    console.log(e);
    console.log(e.target.id)
    switch (e.target.id) {
      case 'srcoll-view':
        wx.navigateTo({
          url: '../views/scrollview/scrollview',
        })
        break;
      case 'swiper':
        wx.navigateTo({
          url: '../views/swiper/swiper',
        })
        break;
      case 'movable-view':
        wx.navigateTo({
          url: '../views/movableview/movableview',
        })
        break;
      case 'cover-view':
        wx.navigateTo({
          url: '../views/coverview/coverview',
        })
        break;
      case 'icon':
        wx.navigateTo({
          url: '../base/icon/icon',
        })
        break;
      case 'text':
        wx.navigateTo({
          url: '../base/text/text',
        })
        break;
      case 'rich-text':
        wx.navigateTo({
          url: '../base/richtext/richtext',
        })
        break;
      case 'progress':
        wx.navigateTo({
          url: '../base/progress/progress',
        })
        break;
      case 'button':
        wx.navigateTo({
          url: '../form/button/button',
        })
        break;
      case 'checkbox':
        wx.navigateTo({
          url: '../form/checkbox/checkbox',
        })
        break;
      case 'form':
        wx.navigateTo({
          url: '../form/form/form',
        })
        break;
      case 'input':
        wx.navigateTo({
          url: '../form/input/input',
        })
        break;
      case 'label':
        wx.navigateTo({
          url: '../form/label/label',
        })
        break;
      case 'picker':
        wx.navigateTo({
          url: '../form/picker/picker',
        })
        break;
    }
  }
})
