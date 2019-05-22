<template>
  <div class="all-wrap">
    <Card width="660"  style="margin-top:80px;">
      <div style="text-align:center">
        <div class="wrap" :style="{height:372.25+(huojiang.length==0?1:huojiang.length)*37.125+'px'}">
          <div class="zhaopian">
            <img :src="imgSrc" v-show="imgSrc!=''">
          </div>
          <div class="line">
            <div class="item">
              <div class="label" style="width:82px;">姓名</div>
              <div class="value " style="width:120px;">{{resdata.dangan.data[0].mingcheng}}</div>
            </div>
            <div class="item">
              <div class="label" style="width:80px;">性别</div>
              <div class="value " style="width:80px;">{{resdata.dangan.data[0].sex==0?"女":"男"}}</div>
            </div>
            <div class="item">
              <div class="label" style="width:80px;">民族</div>
              <div class="value " style="width:80px;">{{resdata.dangan.data[0].mingzu}}</div>
            </div>
          </div>
          <div class="line">
            <div class="item">
              <div class="label" style="width:82px;">出生年月</div>
              <div class="value " style="width:120px;">{{resdata.dangan.data[0].birthday}}</div>
            </div>
            <div class="item">
              <div class="label" style="width:80px;">学校</div>
              <div class="value " style="width:240px;">{{resdata.dangan.data[0].old_school}}</div>
            </div>
          </div>
          <div class="line">
            <div class="item">
              <div class="label" style="width:82px;">户口地址</div>
              <div class="value " style="width:440px;">{{resdata.dangan.data[0].hukou_dizhi}} <span style="position: absolute;right: 0;right: 115px;" @click="modalimg=resdata.dangan.data[0].hukou_url;showmodal=true;"><a style="color: red;text-decoration: underline">查看户口照片</a></span></div>
            </div>
          </div>
          <div class="line">
            <div class="item">
              <div class="label" style="width:82px;">现住地址</div>
              <div class="value " style="width:440px;">{{resdata.dangan.data[0].juzhu_dizhi}}</div>
            </div>
          </div>
          <div class="qingkuang">
            <div class="qingkuangtext">
              家
              庭
              情
              况
            </div>
            <div class="line" style="padding-left:40px">
              <div class="item">
                <div class="label" style="width:42px;">关系</div>
                <div class="label borlr" style="width:120px;">姓名</div>
                <div class="label" style="width:80px;">年龄</div>
                <div class="label borlr" style="width:190px;">工作单位</div>
                <div class="label" style="width:150px;">联系电话</div>
              </div>
            </div>
            <div class="line" style="padding-left:40px">
              <div class="item">
                <div class="label" style="width:42px;">父亲</div>
                <div class="value" style="width:120px;">{{resdata.dangan.data[0].fuqing_mingcheng}}</div>
                <div class="value" style="width:80px;border-left:none;border-right:none;">{{resdata.dangan.data[0].fuqing_nianling}}</div>
                <div class="value" style="width:190px;">{{resdata.dangan.data[0].fuqing_danwei}}</div>
                <div class="value" style="width:156px;border-left:none;border-right:none;">{{resdata.dangan.data[0].fuqing_tel}}</div>
              </div>
            </div>
            <div class="line" style="padding-left:40px">
              <div class="item">
                <div class="label" style="width:42px;">母亲</div>
                <div class="value" style="width:120px;">{{resdata.dangan.data[0].muqing_mingcheng}}</div>
                <div class="value" style="width:80px;border-left:none;border-right:none;">{{resdata.dangan.data[0].muqing_nianling}}</div>
                <div class="value" style="width:190px;">{{resdata.dangan.data[0].muqing_danwei}}</div>
                <div class="value" style="width:156px;border-left:none;border-right:none;">{{resdata.dangan.data[0].muqing_tel}}</div>
              </div>
            </div>
          </div>
          <div class="chengji">
            <div class="chengjitext">
              六年级
              上学期
              成绩
            </div>
            <div class="line" style="padding-left:82px">
              <div class="item">
                <div class="label" style="width:80px;">学科</div>
                <div class="label borlr" style="width:93px;">语文</div>
                <div class="label" style="width:93px;">数学</div>
                <div class="label borlr" style="width:93px;">英语</div>
                <div class="label" style="width:93px;">总分</div>
                <div class="label" style="width:94px;border-left:1px solid #000;">操行</div>
              </div>
            </div>
            <div class="line" style="padding-left:82px">
              <div class="item">
                <div class="label" style="width:80px;">分数</div>
                <div class="value" style="width:93px;">{{resdata.chengji.data[0].yuwen_fenshu}}</div>
                <div class="value" style="width:93px;border-left:none;border-right:none;">{{resdata.chengji.data[0].shuxue_fenshu}}</div>
                <div class="value" style="width:93px;">{{resdata.chengji.data[0].yingyu_fenshu}}</div>
                <div class="value" style="width:93px;border-left:none;border-right:none;">{{resdata.chengji.data[0].yuwen_fenshu+resdata.chengji.data[0].shuxue_fenshu+resdata.chengji.data[0].yingyu_fenshu}}</div>
                <div class="value" style="width:94px;border-left:1px solid #000;border-right:none;">{{resdata.chengji.data[0].caoxing}}</div>
              </div>
            </div>
            <div class="line" style="padding-left:82px">
              <div class="item">
                <div class="label" style="width:80px;">等级</div>
                <div class="value" style="width:93px;">{{resdata.chengji.data[0].yuwen_dengji}}</div>
                <div class="value" style="width:93px;border-left:none;border-right:none;">{{resdata.chengji.data[0].shuxue_dengji}}</div>
                <div class="value" style="width:93px;">{{resdata.chengji.data[0].yingyu_dengji}}</div>
                <div class="value" style="width:93px;border-left:none;border-right:none;">{{zongfendengji}}</div>
                <div class="value" style="width:94px;border-left:1px solid #000;border-right:none;">
                  <span style="position: absolute;right: 0;right: 15px;" @click="modalimg=resdata.chengji.data[0].pingzheng_url;showmodal=true;"><a style="color: red;text-decoration: underline">成绩凭证</a></span>
                </div>
              </div>
            </div>
          </div>
          <div class="huojiang">
            <div class="huojiangtext">
              获奖
            </div>
            <div v-if="huojiang.length==0" class="line" style="padding-left:82px">
              <div class="item">
                <div class="value" style="width:546px">无获奖信息</div>
              </div>
            </div>
            <div v-else>
              <div class="line" style="padding-left:82px" v-for="(item,index) in huojiang" :key="index">
                <div class="item" style="position: relative">
                  <div class="label" style="width:80px;">{{item.leixing==0?"科技":item.leixing==1?"艺术":"体育"}}</div>
                  <div class="value" style="width:466px;border-right:none;">{{item.mingcheng}}</div>
                    <span style="position: absolute;right: 0;right: 15px;top: 7px;" @click="modalimg=item.zhengming_url;showmodal=true;"><a style="color: red;text-decoration: underline">获奖证明</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
    <div style="width: 100%;height: 40px;margin: 10px auto;display: flex;justify-content: center;" v-if="showback">
      <Button type="primary" @click="prev">上一步</Button> &nbsp;&nbsp;&nbsp; <Button type="success" @click="queren">确认所有信息(请确认，一经提交无法更改)</Button>
    </div>
    <div style="width: 100%;height: 40px;margin: 10px auto;display: flex;justify-content: center;" v-else>数据已成功存档，无法</div>
    <Modal
      v-model="showmodal"
      title="照片"
      @on-ok="showmodal=false;modalimg=''"
      class="modal"
      width=1000
    >
      <img :src="modalimg">
    </Modal>
  </div>
</template>

<style scoped>
  .modal{
    overflow: hidden;
  }
  .modal img{
    max-width: 100%;
    height: auto;
  }
  .wrap {
    width: 630px;
    height: 700px;
    border: 1px solid #000;
    font-size: 15px;
    position: relative;
  }
  .wrap div {
    float: left;
  }
  .line {
    width: 100%;
    height: 37.125px;
    border-bottom: 1px solid #000;
  }
  .item {
    height: 37.125px;
  }
  .item div {
    display: flex;
    justify-content: flex-start;
    padding-left: 10px;
    align-items: center;
    height: 37.125px;
  }
  .item .label {
    font-weight: bold;
  }
  .item .value {
    border-left: 1px solid #000;
    border-right: 1px solid #000;
  }
  .zhaopian {
    width: 106px;
    height: 148px;
    position: absolute;
    right: 0;
    top: 0;
    background: #fff;
  }
  .zhaopian img {
    width: 106px;
    height: 148px;
  }
  .qingkuang {
    width: 100%;
    height: 111.375px;
    position: relative;
  }
  .qingkuangtext {
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    padding: 5px;
    font-weight: bold;
    height: 111.375px;
    background: #fff;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
  }
  .chengji {
    width: 100%;
    height: 111.375px;
    position: relative;
  }
  .chengjitext {
    width: 83px;
    height: 111.375px;
    position: absolute;
    top: 0;
    padding: 18px;
    font-weight: bold;
    left: 0;
    background: #fff;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
  }
  .huojiang {
    position: relative;
  }
  .huojiangtext {
    width: 83px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    position: absolute;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    background: #fff;
    /* background: #000; */
  }
  .kongbai {
    width: 100%;
    height: 118px;
  }
  .kongbaitext {
    float: left;
    width: 83px;
    height: 118px;
    line-height: 118px;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    font-weight: bold;
  }
  .kongbaicont {
    float: right;
    height: 118px;
    width: 545px;
    border-bottom: 1px solid #000;
  }
  .borlr {
    border-left: 1px solid #000;
    border-right: 1px solid #000;
  }
  .w1 {
    width: 80px;
  }
</style>

<script>
  let url = "http://47.106.77.12/hs2f/";
  let dangan_id = sessionStorage.getItem('danganId');
  let user_id = sessionStorage.getItem('userId');
  let session_id = sessionStorage.getItem('sessionId');
  let status = sessionStorage.getItem('status');
  // let dangan_id = this.$route.params.danganId;
  // let user_id = this.$route.params.userId;
  // let session_id = this.$route.params.sessionId;
  // let status = this.$route.params.status;
  import axios from "axios";
  export default {
    data() {
      return {
        a: true,
        // showback:true,
        imgSrc:
          "",
        huojiang: [
          {
            leixing: 0,
            mingcheng: "",
            zhengming_url:""
          },
          {
            leixing: 1,
            mingcheng: "",
            zhengming_url:""
          },
          {
            leixing: 2,
            mingcheng: "",
            zhengming_url:""
          }
        ],
        resdata: {
          dangan: {
            count: 1,
            data: [
              {
                id:"",
                xuexiao_id:"",
                user_id:"",
                mingcheng:"",
                xiangpian_id:"",
                xiangpian_url:"",
                sex:"",
                mingzu:"",
                birthday:"",
                old_school:"",
                hukou_dizhi:"",
                juzhu_dizhi:"",
                hukou_id:"",
                hukou_url:"",
                fuqing_mingcheng:"",
                fuqing_nianling:"",
                fuqing_danwei:"",
                fuqing_tel:"",
                muqing_mingcheng:"",
                muqing_nianling:"",
                muqing_danwei:"",
                muqing_tel:"",
                status:""
              }
            ]
          },
          chengji: {
            count: 1,
            data: [
              {
                id:"",
                xuexiao_id:"",
                user_id:"",
                dangan_id:"",
                yuwen_fenshu:"",
                yuwen_dengji:"",
                shuxue_fenshu:"",
                shuxue_dengji:"",
                yingyu_fenshu:"",
                yingyu_dengji:"",
                caoxing:""
              }
            ]
          },
          huojiang: {
            count: 1,
            data: [
              {
                id:"",
                xuexiao_id:"",
                user_id:"",
                dangan_id:"",
                leixing:"",
                mingcheng:"",
                jibie:"",
                mingci:"",
                zhengming_id:"",
                zhengming_url:""
              }
            ]
          }
        },
        modalimg:"",
        showmodal:false
      };
    },
    computed:{
      zongfendengji(){
        let yuwen =this.resdata.chengji.data[0].yuwen_dengji=='A'?3:this.resdata.chengji.data[0].yuwen_dengji=='B'?2:this.resdata.chengji.data[0].yuwen_dengji=='C'?1:0
        let shuxue =this.resdata.chengji.data[0].shuxue_dengji=='A'?3:this.resdata.chengji.data[0].shuxue_dengji=='B'?2:this.resdata.chengji.data[0].shuxue_dengji=='C'?1:0
        let yingyu =this.resdata.chengji.data[0].yingyu_dengji=='A'?3:this.resdata.chengji.data[0].yingyu_dengji=='B'?2:this.resdata.chengji.data[0].yingyu_dengji=='C'?1:0

        let zongfen = parseInt(yuwen)+parseInt(shuxue)+parseInt(yingyu);
        if(zongfen>=8){
          return 'A'
        }else if(zongfen>=5&&zongfen<=7){
          return 'B'
        }else if(zongfen>=3&&zongfen<=4){
          return 'C'
        }else{
          return '暂无数据'
        }
      },
    },
    mounted() {
      axios
        .post(url + "baoming/getYulanData", {
          dangan_id: dangan_id,
          user_id: user_id,
          session_id: session_id
        })
        .then(res => {
          // console.log(res);
          if(res.data == 'session_id error'){

          }else{
            this.resdata = res.data
            // console.log(this.resdata)
            this.imgSrc = res.data.dangan.data[0].xiangpian_url;

            if(res.data.huojiang.count==0){
              this.huojiang = []
            }else {
              this.huojiang = res.data.huojiang.data;
            }
          }
        })
        .catch(err => {
          // console.log(err);
        });
    },
    beforeCreate(){
      dangan_id = sessionStorage.getItem('danganId');
      user_id = sessionStorage.getItem('userId');
      session_id = sessionStorage.getItem('sessionId');
      status = sessionStorage.getItem('status');
      this.showback = status!=2?true:false
    },
    methods:{
      queren(){
        this.showback=false;
        axios.post(url+'baoming/changeDanganStatus',{
          user_id:user_id,
          session_id:session_id,
          dangan_id:dangan_id,
          status:2
        }).then((res)=>{
          // console.log(res)
          if(res.data.has_save == 1){
            this.showback = false;
            this.$Message.success('恭喜，信息已成功存档')
            this.$router.push({
              name:'Login'
            })
          }else{
            this.$Message.error('系统繁忙，请重试')
            this.showback = true;
          }
        }).catch((err)=>{
          // console.log(err)
          this.$Message.error('提交失败，请重新提交');
          this.showback=true;
        })
      },
      prev(){
        this.$emit('messageLast')
      }
    },
    watch:{
      showback(){
        return
      }
    }
  };
</script>
