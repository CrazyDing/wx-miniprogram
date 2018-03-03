// pages/base/text/text.js
var initText = "this is first line\n";
var extraLine = [];
Page({
  data:{
    text:initText,
    decode:false
  },
  decode:function(){
      this.setData({
        decode:!this.data.decode
      })
  },
  addLine:function(){
    extraLine.push('new line');
    this.setData({
      text: initText + extraLine.join("\n")
    })
  },
  delLine:function(){
    if(extraLine.length>0){
      extraLine.pop();
      this.setData({
        text:initText + extraLine.join('\n')
      })
    }
  }
})