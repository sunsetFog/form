<template>
  <section style="width: 100%;height: 800px;margin-top: 50px;">
    <Form :model="formItem" :label-width="80" style="width: 800px;margin: 0px auto;position: relative;">
      <Spin fix v-show="spin">
        <!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
        <svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#2d8cf0">
          <g fill="none" fill-rule="evenodd" stroke-width="2">
            <circle cx="22" cy="22" r="1">
              <animate attributeName="r"
                       begin="0s" dur="1.8s"
                       values="1; 20"
                       calcMode="spline"
                       keyTimes="0; 1"
                       keySplines="0.165, 0.84, 0.44, 1"
                       repeatCount="indefinite" />
              <animate attributeName="stroke-opacity"
                       begin="0s" dur="1.8s"
                       values="1; 0"
                       calcMode="spline"
                       keyTimes="0; 1"
                       keySplines="0.3, 0.61, 0.355, 1"
                       repeatCount="indefinite" />
            </circle>
            <circle cx="22" cy="22" r="1">
              <animate attributeName="r"
                       begin="-0.9s" dur="1.8s"
                       values="1; 20"
                       calcMode="spline"
                       keyTimes="0; 1"
                       keySplines="0.165, 0.84, 0.44, 1"
                       repeatCount="indefinite" />
              <animate attributeName="stroke-opacity"
                       begin="-0.9s" dur="1.8s"
                       values="1; 0"
                       calcMode="spline"
                       keyTimes="0; 1"
                       keySplines="0.3, 0.61, 0.355, 1"
                       repeatCount="indefinite" />
            </circle>
          </g>
        </svg>

        <p>进行中</p>
      </Spin>
      <div style="height: 60px;">
        <FormItem label="语文" style="float: left;">
          <InputNumber v-model="watchItem.inputChinese" style="width: 300px;" placeholder="请输入语文分数"></InputNumber>
        </FormItem>
        <FormItem label="等级" style="float: left;">
          <Select v-model="formItem.selectChinese" style="width: 80px;">
            <Option value="A">A</Option>
            <Option value="B">B</Option>
            <Option value="C">C</Option>
          </Select>
        </FormItem>
      </div>

      <div style="height: 60px;">
        <FormItem label="数学" style="float: left;">
          <InputNumber v-model="watchItem.inputMath" style="width: 300px;" placeholder="请输入数学分数"></InputNumber>
        </FormItem>
        <FormItem label="等级" style="float: left;">
          <Select v-model="formItem.selectMath" style="width: 80px;">
            <Option value="A">A</Option>
            <Option value="B">B</Option>
            <Option value="C">C</Option>
          </Select>
        </FormItem>
      </div>

      <div style="height: 60px;">
        <FormItem label="英语" style="float: left;">
          <InputNumber v-model="watchItem.inputEnglish" style="width: 300px;" placeholder="请输入英语分数"></InputNumber>
        </FormItem>
        <FormItem label="等级" style="float: left;">
          <Select v-model="formItem.selectEnglish" style="width: 80px;">
            <Option value="A">A</Option>
            <Option value="B">B</Option>
            <Option value="C">C</Option>
          </Select>
        </FormItem>
      </div>

      <div style="height: 60px;">
        <FormItem label="总分" style="float: left;">
          <Button type="warning" style="width: 300px;">{{watchItem.inputTotal}}</Button>
        </FormItem>
        <!--<FormItem label="等级" style="float: left;">
            <Select v-model="formItem.selectTotal" style="width: 80px;">
                <Option value="A">A</Option>
                <Option value="B">B</Option>
                <Option value="C">C</Option>
            </Select>
        </FormItem>-->

        <FormItem label="操行" style="float: left;">
          <Select v-model="formItem.selectConduct" style="width: 80px;">
            <Option value="一般">一般</Option>
            <Option value="良好">良好</Option>
            <Option value="优秀">优秀</Option>
          </Select>
        </FormItem>

      </div>

      <!--<div style="height: 60px;">
      <FormItem label="操行" style="float: left;">
          <Select v-model="formItem.selectConduct" style="width: 80px;">
              <Option value="一般">一般</Option>
              <Option value="良好">良好</Option>
              <Option value="优秀">优秀</Option>
          </Select>
      </FormItem>
      <FormItem label="等级" style="float: left;">
          <Select v-model="formItem.selectGrade" style="width: 80px;">
              <Option value="A">A</Option>
              <Option value="B">B</Option>
              <Option value="C">C</Option>
          </Select>
      </FormItem>
      </div>-->


      <div style="width: 200px;height: 200px;margin-left: 80px;">
        <upimg type="huojiang" huojiangid="10" ref="bin" :uploadText="uploadData"></upimg>
      </div>



      <FormItem>
        <Button type="ghost" @click="prev">上一步</Button>
        <Button type="primary" style="margin-left: 8px;" @click="submission">保存</Button>
        <Button type="ghost" style="margin-left: 8px" @click="next">下一步</Button>
      </FormItem>
    </Form>
  </section>
</template>
<script>
  var user_id
var session_id
var dangan_id
  import upimg from './upImg'
  export default {
    components:{
      upimg
    },
    data () {
      return {
        watchItem: {
          inputChinese: 0,
          inputMath: 0,
          inputEnglish: 0,
          inputTotal: 0,
        },
        formItem: {
          selectChinese: '',
          selectMath: '',
          selectEnglish: '',
          // selectTotal: '',
          selectConduct: '',
          // selectGrade: '',
        },
        uploadData: '上传成绩照片',
        addState: '',
        spin:false
      }
    },
    watch:{
      watchItem:{
        handler(curVal,oldVal){
          this.watchItem.inputTotal = Number(this.watchItem.inputChinese) + Number(this.watchItem.inputMath) + Number(this.watchItem.inputEnglish);
        },
        deep:true
      }
    },
    created:function(){
      this.getJson();
    },
    beforeCreate(){
      if (!sessionStorage.getItem('userId')){
        this.$router.push(
          {
            name:'Login'
          }
        )
      }
      user_id = sessionStorage.getItem('userId');
      session_id = sessionStorage.getItem('sessionId');
      dangan_id = sessionStorage.getItem('danganId');
    },
    methods: {
      getJson(){
        var that = this;
        var parameter = {user_id: user_id,session_id: session_id,dangan_id: dangan_id};
        this.spin = true;
        this.$http.post('http://47.106.77.12/hs2f/baoming/getChengji',parameter).then(function(response){
// console.log(response);
          that.spin = false;
          if(response.data.count == 0){

          }else{
            that.watchItem.inputChinese = response.data.data[0].yuwen_fenshu;
            that.formItem.selectChinese = response.data.data[0].yuwen_dengji;
            that.watchItem.inputMath = response.data.data[0].shuxue_fenshu;
            that.formItem.selectMath = response.data.data[0].shuxue_dengji;
            that.watchItem.inputEnglish = response.data.data[0].yingyu_fenshu;
            that.formItem.selectEnglish = response.data.data[0].yingyu_dengji;
            that.formItem.selectConduct = response.data.data[0].caoxing;
            that.$refs.bin.imgSrc = response.data.data[0].pingzheng_url;
            that.$refs.bin.success = response.data.data[0].pingzheng_id;
          }
        }).catch(function(err){
          that.spin = false;
          that.$Message.error("获取数据错误，请刷新重试")
          // console.log(err);
        })
      },
      //保存
      submission(){
        var user_id = sessionStorage.getItem('userId');
        var session_id = sessionStorage.getItem('sessionId');
        var dangan_id = sessionStorage.getItem('danganId');

        var that = this;
        var parameter = {user_id: user_id,session_id: session_id,dangan_id: dangan_id};
        that.spin = true;
        that.$http.post('http://47.106.77.12/hs2f/baoming/addChengji',parameter).then(function(response){
          let chengji_id = response.data.has_add;
          var user_id = sessionStorage.getItem('userId');
          var session_id = sessionStorage.getItem('sessionId');
          var yuwen_fenshu = that.watchItem.inputChinese;
          var yuwen_dengji = that.formItem.selectChinese;
          var shuxue_fenshu = that.watchItem.inputMath;
          var shuxue_dengji = that.formItem.selectMath;
          var yingyu_fenshu = that.watchItem.inputEnglish;
          var yingyu_dengji =that.formItem.selectEnglish;
          var caoxing = that.formItem.selectConduct;
          // console.log(chengji_id);
          var parameter = {user_id: user_id,session_id: session_id,chengji_id: chengji_id,yuwen_fenshu: yuwen_fenshu,yuwen_dengji: yuwen_dengji,shuxue_fenshu: shuxue_fenshu,
            shuxue_dengji: shuxue_dengji,yingyu_fenshu: yingyu_fenshu,yingyu_dengji: yingyu_dengji,caoxing: caoxing,
            pingzheng_id:that.$refs.bin.success,pingzheng_url:that.$refs.bin.imgSrc
          };
          // console.log(parameter);
          that.$http.post('http://47.106.77.12/hs2f/baoming/saveChengji',parameter).then(function(response){

            that.spin = false;
            that.addState = response.data.has_save;
            that.$Message.success('保存成绩成功');
          }).catch(function(err){
            // console.log(err);
            that.spin = false;
            that.$Message.error("获取数据错误，请刷新重试")
          })
        }).catch(function(err){
          that.spin = false;
          that.$Message.error("获取数据错误，请刷新重试")
        })
      },
      //上一步
      prev(){
        // this.submission();
        this.$refs.bin.imgSrc = '';
        this.$emit('chengjiLast')
      },
      //下一步
      next(){
        if(true){
          if(this.$refs.bin.success != 0){
            var loadArr = [];
            for(var item in this.formItem){
              loadArr.push(item);
            }
            var count = 0;
            var newArr = ['inputChinese','inputMath','inputEnglish'];
            for(var i=0;i<newArr.length;i++){

              if(this.watchItem[newArr[i]] != null){
                count++;
              }
            }


            for(var i=0;i<loadArr.length;i++){
              if(this.formItem[loadArr[i]] != ''){
                count++;
              }
            }
            if(count == loadArr.length+3){
              var user_id = sessionStorage.getItem('userId');
              var session_id = sessionStorage.getItem('sessionId');
              var dangan_id = sessionStorage.getItem('danganId');
              let chengji_id;
              var that = this;
              that.spin = true;
              var parameter = {user_id: user_id,session_id: session_id,dangan_id: dangan_id};
              that.$http.post('http://47.106.77.12/hs2f/baoming/addChengji',parameter).then(function(response){
                chengji_id = response.data.has_add;
                var user_id = sessionStorage.getItem('userId');
                var session_id = sessionStorage.getItem('sessionId');
                var yuwen_fenshu = that.watchItem.inputChinese;
                var yuwen_dengji = that.formItem.selectChinese;
                var shuxue_fenshu = that.watchItem.inputMath;
                var shuxue_dengji = that.formItem.selectMath;
                var yingyu_fenshu = that.watchItem.inputEnglish;
                var yingyu_dengji =that.formItem.selectEnglish;
                var caoxing = that.formItem.selectConduct;
                var parameter = {user_id: user_id,session_id: session_id,chengji_id: chengji_id,yuwen_fenshu: yuwen_fenshu,yuwen_dengji: yuwen_dengji,shuxue_fenshu: shuxue_fenshu,
                  shuxue_dengji: shuxue_dengji,yingyu_fenshu: yingyu_fenshu,yingyu_dengji: yingyu_dengji,caoxing: caoxing,chengji_id:chengji_id,
                  pingzheng_id:that.$refs.bin.success,pingzheng_url:that.$refs.bin.imgSrc
                };
                that.$http.post('http://47.106.77.12/hs2f/baoming/saveChengji',parameter).then(function(response){
                  that.spin = false;
                  that.addState = response.data.has_save;
                  that.$refs.bin.imgSrc = '';
                  that.$emit('chengjiNext');
                }).catch(function(err){
                  // console.log(err);
                  that.spin = false;
                  that.$Message.error("获取数据错误，请刷新重试")
                })
              }).catch(function(err){
                // console.log(err);
                that.spin = false;
                that.$Message.error("获取数据错误，请刷新重试")
              })

            }else{
              this.info(2);
            }
          }else{
            this.info(1);
          }

        }else{
          // this.$Message.
        }
      },
      //全局提示
      info (response) {
        if(response == 1){
          this.$Message.error('请先上传成绩凭证');
        }else if(response == 2){
          this.$Message.error('信息填写未完整，请完善信息');
        }

      },
    },
  }
</script>

<style scoped>
  .ivu-btn {
    text-align: left;
  }
</style>
