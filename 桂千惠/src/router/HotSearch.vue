<template>
<div class='hotSearch'>
     <div class='head'>
         <div class='search'> 
           <svg t="1615690320666" @click='back' class="icon" viewBox="0 0 1039 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2403" width="17" height="17"><path d="M653.740113 919.864407c-9.642185 0-19.284369-3.856874-26.998117-11.570622L256.482109 539.962335c-7.713748-7.713748-11.570621-17.355932-11.570621-26.998117s3.856874-19.284369 11.570621-26.998116L626.741996 113.777778c15.427495-15.427495 38.568738-15.427495 53.996234 0 15.427495 15.427495 15.427495 38.568738 0 53.996233L337.47646 512.964218l343.26177 343.261771c15.427495 15.427495 15.427495 38.568738 0 53.996233-7.713748 5.785311-17.355932 9.642185-26.998117 9.642185z" fill="#ffffff" p-id="2404"></path></svg>
           <div class='input-right'>
               <svg t="1615691062756" class="ic" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2119" width="16" height="16"><path d="M701.269691 673.472602c1.041726 2.379187 2.517333 4.613064 4.468778 6.565533l17.990746 17.990746c7.635911 7.635911 19.49603 8.368598 28.010961 2.310625L952.466804 901.066133c5.677303 5.677303 5.677303 14.882965 0 20.560268l-30.841426 30.841426c-5.677303 5.677303-14.882965 5.677303-20.561291 0L700.339506 751.741199c6.057973-8.515954 5.325285-20.376073-2.310625-28.011984l-17.990746-17.990746c-1.952468-1.952468-4.186346-3.428076-6.565533-4.469801-142.699026 128.258129-362.464265 123.756605-499.741815-13.520945-141.941779-141.941779-141.941779-372.07618 0-514.016937 141.941779-141.942803 372.075157-141.942803 514.01796 0C825.026296 311.00936 829.526797 530.773576 701.269691 673.472602zM225.13248 225.13248c-113.553219 113.553219-113.553219 297.66033 0 411.213549 113.554242 113.554242 297.661354 113.554242 411.214573 0 113.553219-113.553219 113.553219-297.66033 0-411.213549C522.79281 111.578238 338.685699 111.578238 225.13248 225.13248z" p-id="2120" fill="#aaaaaa"></path></svg>
           </div>
           <input type="text" :placeholder="form.title"> 
         </div>
     </div>
     <div :style="{backgroundImage : 'url(' + form.img + ')'}" class='img'></div>
     <div class='title'>
         <div>{{form.title}}</div>
         <span class='title-img'></span>
     </div>
     <div class='container'>
         <div class='container-head'>
              <div class='container-head-msg'>
                  <div>阅读:{{form.read.num}}</div>
                  <div>讨论{{form.read.talk}}</div>
                  <div>详情></div>
              </div>
              <div class='container-head-host'>主持人:{{form.read.host}}</div>
        
              <div class='container-head-content'>
                  {{form.read.content}}
              </div>
              <div class='container-head-nav' >
                  <div style="color:black">综合
                     <div class='nav-point'></div>
                  </div>
                  <div>实时
                     <div></div>
                  </div>
                  <div>热门
                       <div></div>
                  </div>
                  <div>视频
                       <div></div>
                  </div>
                  <div>问答
                      <div></div>
                  </div>
                  <div :style="{fontSize:'20px'}">+
                      <div></div>
                  </div>
              </div>
              <div class='boundary'></div>
         </div> 
         <div></div>
     </div>
       <div class='container-content'>
             <div class='content-head'>
                 <span>置顶</span>
                 <div class='head-down'>
                      <img src='../assets/image/down.png'/>
                 </div>
                 <div class='head-img'></div>
             </div>
       </div>
       <div class='content'>
           <div class='content-name'>
               <div class='content-name-left'></div>
               <div class='content-name-center'>
                   <div class='center-name'>央视新闻</div>
                   <div class='center-name-icon' :style="{backgroundImage : 'url(' + obj.icon + ')'}"></div>
                   <div class='center-msg'>
                     <span>{{obj.time}}</span>
                     <span>{{obj.from}}</span>
                     <span>{{obj.status}}</span>
                   </div>
               </div>
               <div class='content-name-right'>+关注</div>
           </div>
           <div class='clear'></div>
           <div class='content-content' id='content-content' >
               <div class='content-content-text'>{{form.content}}</div>
               <div class='content-content-img' :style="{backgroundImage : 'url(' + obj.img + ')'}">
                   <!-- <img src='../assets/image/lkq.png' width="350px"> -->
               </div>
           </div>
       </div>
     <div class='foot'>
         <div class='foot-right'>
             <img src="../assets/image/编辑.png" >
         </div>
         <input type="text" class='foot-input' :placeholder="'和'+num+'人一起讨论'">
         <div class='share'></div>
         <div class='more'></div>
     </div>
</div>
</template>
<script>
export default {
  name: 'HotSearch',
  data(){
    return {
        list:[
            '综合',
            '实时',
            '热门',
            '视频',
            '图片',
            '问答'
        ],
        num:6567,
        obj:{
            icon:require('../assets/image/icon.png'),
            time:'6小时前',
            from:'来自微博云剪',
            status:'已编辑',
            img:require('../assets/image/lkq.png'),
        },
        form:{
          img:require('../assets/image/img.png'),
          title:'#中国灵活就业已涉及2亿多人#',
          content:'【#总理提到同时打几份工的灵活就业者#：要给他们基本保障】国务院总理李克强：我们一方面继续鼓励增加相对稳定的就业岗位，另一方面也要广开灵活就业的渠道。现在，#中国灵活就业已涉及2亿多人#。当然，有的人一人打几份工，很辛苦，应该给其社保补贴，提供基本的权利保障。#两会#',
          read:{
              num:'1.3亿',
              talk:'7296',
              host:'央视新闻',
              content:'导语：国务院总理李克强：我们一方面继续鼓励增加相对稳定的就业岗位，另一方面也要广开灵活就业的渠道。现在，中国灵活就业已涉及2亿多人。'
          }     
        }
    }  
  },
  created(){
      
  },
  mounted(){
         this.changeColor()
  },
  methods:{
       changeColor(){
              var change = document.getElementById('content-content')
              change.innerHTML = change.innerHTML.replace(/#(.*?)#/ig,"<span style='color : #3b7db9;'>$&</span>")
//   document.body.innerHTML = document.body.innerHTML.replace(/#(.*?)#/ig,"<span style='color : blue;'>$&</span>")
       },
       back(){
           this.$router.back(-1)
        //    console.log(1)
       }
    }  
}
</script>

<style scoped>
.hotSearch{
    width:375px;
}
.head{
    position: relative;
    width:100%;
    height:145px;
    background-color: #B94334;
}
.search{
    position:absolute;
    top:30px;

}
.search input{
   position: absolute;
   left:60px;
   top:5px;
    width:300px;
    height:30px;
    background-color: #EEEEEE;
    border-radius: 20px;
    border: #fff;
}
.input-right{
 position: relative;
 left:30px;
 top:5px;
    width:60px;
    height: 30px;
    border-radius:20px ;
    background-color:  #EEEEEE;
}
.ic{
    position: absolute;
    top:7px;
    left:8px;
}
.icon{
    position: absolute;
    top:8px;
    left:8px;

}
.icon:hover{
    cursor: pointer;
}
.img{
    width: 75px;
    height: 75px;
    background-size: contain;
    border-radius: 10px;
    position: relative;
    top:-45px;
    left:15px;
    z-index:999
}
.title{
    position: relative;
    z-index:999;
    bottom:115px;
    left:19px;
    color:#fff;
    font-weight: bold;
    font-size: 16px;
    
}
.title-img{
    display: inline-block;
    position: absolute;
    right: 47px;
    width:25px;
    bottom:4px;
    height:15px;
    background-size: contain;
    background-image: url('../assets/image/hotsearch.png') ;
}
.container{
    width: 100%;
    height:70px;
    background-color: #fff;
    position: relative;
    top:-110px;
    border-radius: 10px;
}
.container-head{
    position: absolute;
    height:133px;
    width:100%;
    /* font-size: 12px; */

}
.container-head-msg{
   position: absolute;
   left:89px;
    display: flex;
    font-size: 10px;
    justify-content: center;
    align-items: center;
    color:#aaa;
    top:7px;
}
.container-head-msg div{
     height:10px;
     margin-left: 10px;
}
.container-head-host{
    color:#aaa;
    font-size: 10px;
     position: absolute; 
     left:99px;
     top:24px;
     
}
.container-head-content{
    text-align: left;
    margin-top: 10px;
    font-size: 14px;
    padding: 12px;
    position: relative;
    top:30px;
    margin-bottom:10px ;
    border-bottom:#EEEEEE 0.1px solid;
}
.container-head-nav{
   width:375px;
   height:36px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: relative;
   top:17px;
   font-size: 15px;

}
.container-head-nav div{
     margin-left:20px ;
     margin-right:10px;
     margin-bottom: 3px;
     color: #aaa;
}
.boundary{
    position: relative;
    top:16px;
    height: 10px;
    background-color: #EEEEEE;

}
.nav-point{
  width: 25px;
  height: 3.5px;
  border-radius: 5px;
  background-color: #f29d36;
  position: absolute;
  left: 3px;
  top:30px;
  }
.container-content{

}
.content-head{
    text-align: left;
    color: #aaa;
    font-size: 14px;
    padding-left: 10px;
    padding-bottom: 5px;
    border-bottom: 0.1px solid #EEEEEE;
    position: relative;
    top:-5px;
}
.content-head div{
    float: right;
    
}
.head-img{
    width:60px;
    height: 24px;
    background-image: url('../assets/image/head-img.png');
    background-size: 60px 24px;
    margin-right: 3px;
}
.head-down{
    margin-right: 10px;
}
.content-name{
    margin-top: 10px;
}
.content-name div{
    float: left;
}
.content-name-left{
    width:50px;
    height:50px;
    /* background-color: red; */
    background-image: url('../assets/image/photo.png');
    background-size: 50px 50px;
    border-radius: 50%;
    margin-left: 10px;
}
.content-name-right{
    width:60px;
    height: 25px;
    border:#e98915 0.2px solid;
    color: #e98915;
    border-radius: 20px;
    font-size: 14px;
    position: relative;
    left:35px;
    top:7px;
    line-height: 25px;
}
.content-name-right:hover{
    cursor: pointer;
}

.content-name-center{
    width:200px;
    font-size: 13px;
    text-align: center;
    position: relative;
    top:8px;
}
.center-name{
    position: absolute;
    /* top:3px; */
    left: 10px;
    font-weight: bold;
    color: #e98915;
    font-size: 16px;
}
.center-name-icon{
    width:20px;
    height: 20px;
    position: relative;
    left:75px;
    top:2px;
    background-size: 20px 20px;
}
.center-msg{
      position: absolute;
      top:23px;
      left: 10px;
      color: #aaa;
}
.center-msg span{
    margin-right: 8px;
}
.clear{
    clear: both;
}
.content-content{
  margin-left: 10px;
  margin-top: 10px;
  padding-right:12px ;
  text-align: left;
  font-size: 15px;
}
.content-content-text{
    /* padding-bottom:10px ; */
}
.content-content-img{
  position: relative;
  top:10px;
  width:350px;
  height:200px;
  background-size: 350px 200px;
}
.foot{
    border-top:#EEEEEE 0.1px solid;
    height:52px;
    padding-top:10px ;
    position: relative;  
    top:15px;
}
.foot-input{
    border-radius: 20px;
    width:260px;
    height:30px;
    background-color: #EEEEEE;
    position: absolute;
    left:45px;
    border:#fff;
}
.foot-right{
    position: absolute;
    left:10px;
    background-color: #EEEEEE;
    width:60px;
    height: 30px;
    border-radius: 20px;
    /* bottom:10px */
}
.foot-right img{
    position: relative;
    top:7px;
    right:7px;
}

.share{
     background-image: url('../assets/image/更多.png');
    width:16px;
    height: 16px;
    float: right;
    background-size: 16px 16px;
    position: absolute;
    right:15px;
    top:15px;
}
.more{
    background-image: url('../assets/image/分享.png');  
     width:20px;
    height: 20px;
    float: right;
    top:15px;
    position: absolute;
    right:40px;
     background-size: 20px 20px;
}
</style>>
