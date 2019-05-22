
<template>
  <div style="padding:20px 0 80px 0;" class="table">
    <Card :bordered="false" style="height:100%;width:700px;margin:0 auto;">
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
      <p slot="title">基本信息录入</p>
      <div style="height:100%;">
        <section style="width: 100%;">
          <Form :model="watchItem" :label-width="80" style="width: 600px;margin: 0px auto;">
            <div style="height: 60px;">
              <FormItem label="姓名" style="float: left;">
                <Input v-model="watchItem.mingcheng" style="width: 100px;" placeholder="请输入姓名"></Input>
              </FormItem>

              <FormItem label="性别" style="float: left;">
                <Select v-model="watchItem.sex" style="width: 60px;">
                  <Option value="男">男</Option>
                  <Option value="女">女</Option>
                </Select>
              </FormItem>

              <FormItem label="民族" style="float: left;">
                <Input v-model="watchItem.mingzu" style="width: 100px;" placeholder="请输入民族"></Input>
              </FormItem>
            </div>

            <div style="height: 60px;">
              <FormItem label="出生年月" style="width: 500px;">
                <Row>
                  <Col span="11">
                  <FormItem prop="date" style="width: 350px;">
                    <DatePicker style="width: 350px;" type="date" placeholder="请输入出生年月" v-model="watchItem.birthday"></DatePicker>
                  </FormItem>
                  </Col>
                </Row>
              </FormItem>
            </div>

            <FormItem label="学校">
              <Input v-model="watchItem.old_school" style="width: 350px;" placeholder="请输入学校"></Input>
            </FormItem>

            <FormItem label="户口地址">
              <Input v-model="watchItem.hukou_dizhi" style="width: 350px;" placeholder="请输入户口地址"></Input>
            </FormItem>

            <FormItem label="现住地址">
              <Input v-model="watchItem.juzhu_dizhi" style="width: 350px;" placeholder="请输入现住地址"></Input>
            </FormItem>
            <div style="height: 60px;">
                    <FormItem label="父亲信息" style="float: left;">
                      <Input v-model="watchItem.fuqing_mingcheng" style="width: 100px;" placeholder="姓名"></Input>
                      <InputNumber v-model="watchItem.fuqing_nianling" style="width: 50px;" placeholder="年龄"></InputNumber>
                      <Input v-model="watchItem.fuqing_danwei" style="width: 140px;" placeholder="工作单位"></Input>
                      <Input v-model="watchItem.fuqing_tel" style="width: 120px;" placeholder="联系电话"></Input>
                    </FormItem>
                  </div>

                  <div style="height: 60px;">
                    <FormItem label="母亲信息" style="float: left;">
                      <Input v-model="watchItem.muqing_mingcheng" style="width: 100px;" placeholder="姓名"></Input>
                      <InputNumber v-model="watchItem.muqing_nianling" style="width: 50px;" placeholder="年龄"></InputNumber>
                      <Input v-model="watchItem.muqing_danwei" style="width: 140px;" placeholder="工作单位"></Input>
                      <Input v-model="watchItem.muqing_tel" style="width: 120px;" placeholder="联系电话"></Input>
                    </FormItem>
                  </div>
            <div style="width:600px;height:200px;">
              <div style="float:left;width:200px;overflow:hidden">
                <FormItem label="上传户口本">
                  <shangchuan type="dangan" uploadText="上传图片" ref="hukou"></shangchuan>
                </FormItem>
              </div>
              <div style="float:left;width:200px;overflow:hidden ">
                <FormItem label="小一寸相片">
                  <shangchuan type="dangan" uploadText="上传图片" ref="xiangpian"></shangchuan>
                </FormItem>
              </div>
            </div>

            <FormItem style="padding-left:100px">
              <Button type="primary" @click="submission">保存</Button>
              <Button type="ghost" style="margin-left: 8px" @click="next">下一步</Button>
            </FormItem>
          </Form>
        </section>
      </div>
    </Card>
  </div>

</template>
<script>
  let paramsss = {
    user_id : sessionStorage.getItem('userId'),
    session_id : sessionStorage.getItem('sessionId'),
    dangan_id : sessionStorage.getItem('danganId'),
  }
  import Shangchuan from './upImg';

    export default {
        data () {
            return {
            	watchItem: {
                mingcheng: '',
                sex: '',
                mingzu: '',
                birthday: '',
                old_school: '',
                hukou_dizhi: '',
                juzhu_dizhi: '',
                fuqing_mingcheng:'',
                fuqing_nianling:null,
                fuqing_danwei:'',
                fuqing_tel:'',
                muqing_mingcheng:'',
                muqing_nianling:null,
                muqing_danwei:'',
                muqing_tel:'',
                hukou_id:'',
            	},
              spin:false
            }
        },
      components:{
        Shangchuan,
      },
      methods: {
        //提交
        submission(){
          let _this =this;
          /*console.log(this.$refs.hukou.imgSrc,this.$refs.hukou.success);
          console.log(this.$refs.xiangpian.imgSrc,this.$refs.xiangpian.success);*/
          let params = {
            user_id : sessionStorage.getItem('userId'),
            session_id : sessionStorage.getItem('sessionId'),
            dangan_id : sessionStorage.getItem('danganId'),
            mingcheng:_this.watchItem.mingcheng,
            sex:_this.watchItem.sex == '男'? '1' : '0',
            mingzu:_this.watchItem.mingzu,
            birthday:_this.watchItem.birthday,
            old_school:_this.watchItem.old_school,
            hukou_dizhi:_this.watchItem.hukou_dizhi,
            juzhu_dizhi:_this.watchItem.juzhu_dizhi,
            fuqing_mingcheng:_this.watchItem.fuqing_mingcheng,
            fuqing_nianling:_this.watchItem.fuqing_nianling,
            fuqing_danwei:_this.watchItem.fuqing_danwei,
            fuqing_tel:_this.watchItem.fuqing_tel,
            muqing_mingcheng:_this.watchItem.muqing_mingcheng,
            muqing_nianling:_this.watchItem.muqing_nianling,
            muqing_danwei:_this.watchItem.muqing_danwei,
            muqing_tel:_this.watchItem.muqing_tel,
            xiangpian_id:_this.$refs.xiangpian.success,
            xiangpian_url:_this.$refs.xiangpian.imgSrc,
            hukou_id:_this.$refs.hukou.success,
            hukou_url:_this.$refs.hukou.imgSrc,
          }
          this.spin = true;
          _this.$http.post(_this.$url.url.baoming_saveDangan,params)
            .then(function(response) {
              _this.spin = false;
              _this.$Message.success('保存基本信息成功');
            }).catch(function(error){
            _this.spin = false;
          });
        },
        //重置
        next(){
          let _this =this;
          let check = true;
          let fuqingFlag = true;
          let muqingFlag = true;
          let flag = 0;
          let params = {
            user_id : sessionStorage.getItem('userId'),
            session_id : sessionStorage.getItem('sessionId'),
            dangan_id : sessionStorage.getItem('danganId'),
            mingcheng:_this.watchItem.mingcheng,
            sex:_this.watchItem.sex == '男'? '1' : '0',
            mingzu:_this.watchItem.mingzu,
            birthday:_this.watchItem.birthday,
            old_school:_this.watchItem.old_school,
            hukou_dizhi:_this.watchItem.hukou_dizhi,
            juzhu_dizhi:_this.watchItem.juzhu_dizhi,
            fuqing_mingcheng:_this.watchItem.fuqing_mingcheng,
            fuqing_nianling:_this.watchItem.fuqing_nianling,
            fuqing_danwei:_this.watchItem.fuqing_danwei,
            fuqing_tel:_this.watchItem.fuqing_tel,
            muqing_mingcheng:_this.watchItem.muqing_mingcheng,
            muqing_nianling:_this.watchItem.muqing_nianling,
            muqing_danwei:_this.watchItem.muqing_danwei,
            muqing_tel:_this.watchItem.muqing_tel,
            xiangpian_id:_this.$refs.xiangpian.success,
            xiangpian_url:_this.$refs.xiangpian.imgSrc,
            hukou_id:_this.$refs.hukou.success,
            hukou_url:_this.$refs.hukou.imgSrc,
          }

          if(params.user_id==""||params.user_id==undefined||params.user_id==null)check=false;
          if(params.session_id==""||params.session_id==undefined||params.session_id==null)check=false;
          if(params.dangan_id==""||params.dangan_id==undefined||params.dangan_id==null)check=false;
          if(params.mingcheng==""||params.mingcheng==undefined||params.mingcheng==null)check=false;
          if(params.sex==""||params.sex==undefined||params.sex==null)check=false;
          if(params.mingzu==""||params.mingzu==undefined||params.mingzu==null)check=false;
          if(params.birthday==""||params.birthday==undefined||params.birthday==null)check=false;
          if(params.old_school==""||params.old_school==undefined||params.old_school==null)check=false;
          if(params.hukou_dizhi==""||params.hukou_dizhi==undefined||params.hukou_dizhi==null)check=false;
          if(params.juzhu_dizhi==""||params.juzhu_dizhi==undefined||params.juzhu_dizhi==null)check=false;
          if(params.xiangpian_id==""||params.xiangpian_id==undefined||params.xiangpian_id==null)check=false;
          if(params.xiangpian_url==""||params.xiangpian_url==undefined||params.xiangpian_url==null)check=false;
          if(params.hukou_id==""||params.hukou_id==undefined||params.hukou_id==null)check=false;
          if(params.hukou_url==""||params.hukou_url==undefined||params.hukou_url==null)check=false;


          if(
            (params.fuqing_mingcheng!=""&&params.fuqing_mingcheng!=undefined&&params.fuqing_mingcheng!=null)&&
            (params.fuqing_nianling!=""&&params.fuqing_nianling!=undefined&&params.fuqing_nianling!=null)&&
            (params.fuqing_danwei!=""&&params.fuqing_danwei!=undefined&&params.fuqing_danwei!=null)&&
            (params.fuqing_tel!=""&&params.fuqing_tel!=undefined&&params.fuqing_tel!=null)
          ){
            flag++;
          }else if(
            (params.muqing_mingcheng!=""&&params.muqing_mingcheng!=undefined&&params.muqing_mingcheng!=null)&&
            (params.muqing_nianling!=""&&params.muqing_nianling!=undefined&&params.muqing_nianling!=null)&&
            (params.muqing_danwei!=""&&params.muqing_danwei!=undefined&&params.muqing_danwei!=null)&&
            (params.muqing_tel!=""&&params.muqing_tel!=undefined&&params.muqing_tel!=null)
          ){
            flag++;
          }
          if(check&&flag>=1){
            _this.spin = true;
            _this.$http.post(_this.$url.url.baoming_saveDangan,params)
              .then(function(response) {
                _this.spin = false;
                _this.$emit('jibenNext');
              }).catch(function(error){
              _this.spin = false;
              // console.log(error);
            });
          }else{
            _this.$Message.error('信息填写不完整，请填写完整后重新提交')
          }



        },
      },
      beforeCreate(){
        if (!sessionStorage.getItem('userId')){
          this.$router.push(
            {
              name:'Login'
            }
          )
        }
        paramsss = {
          user_id : sessionStorage.getItem('userId'),
          session_id : sessionStorage.getItem('sessionId'),
          dangan_id : sessionStorage.getItem('danganId'),
        }
      },
      created(){
        let _this =this;
        let params = paramsss
        // console.log(params);
        this.spin = true;
        // console.log(params)
        _this.$http.post(_this.$url.url.baoming_getDangan,params)
          .then(function(response) {
            // console.log(response);
            _this.spin = false;
            _this.watchItem.mingcheng = response.data.data[0].mingcheng;
            _this.watchItem.sex = response.data.data[0].sex == '1'? '男':'女';
            _this.watchItem.mingzu = response.data.data[0].mingzu;
            _this.watchItem.birthday = response.data.data[0].birthday;
            _this.watchItem.old_school = response.data.data[0].old_school;
            _this.watchItem.hukou_dizhi = response.data.data[0].hukou_dizhi;
            _this.watchItem.juzhu_dizhi = response.data.data[0].juzhu_dizhi;
            _this.watchItem.fuqing_mingcheng = response.data.data[0].fuqing_mingcheng;
            _this.watchItem.fuqing_nianling = response.data.data[0].fuqing_nianling == undefined?null:response.data.data[0].fuqing_nianling;
            _this.watchItem.fuqing_danwei = response.data.data[0].fuqing_danwei;
            _this.watchItem.fuqing_tel = response.data.data[0].fuqing_tel;
            _this.watchItem.muqing_mingcheng = response.data.data[0].muqing_mingcheng;
            _this.watchItem.muqing_nianling = response.data.data[0].muqing_nianling == undefined?null:response.data.data[0].muqing_nianling;;
            _this.watchItem.muqing_danwei = response.data.data[0].muqing_danwei;
            _this.watchItem.muqing_tel = response.data.data[0].muqing_tel;
            _this.$refs.hukou.imgSrc = response.data.data[0].hukou_url;
            _this.$refs.hukou.success = response.data.data[0].hukou_id;
            _this.$refs.xiangpian.imgSrc = response.data.data[0].xiangpian_url;
            _this.$refs.xiangpian.success = response.data.data[0].xiangpian_id;
          }).catch(function(error){
            _this.spin = false;
          // console.log(error);
        });
      }
    }
</script>

<style>
  .table .ivu-form-item-content{
    text-align: left;
  }
</style>
<!--<template>
  <section style="width: 100%;margin-top: 50px;">
    <Form :model="watchItem" :label-width="80" style="width: 570px;margin: 0px auto;">
      <div style="height: 60px;">
        <FormItem label="姓名" style="float: left;">
          <Input v-model="watchItem.inputName" style="width: 100px;" placeholder="请输入姓名"></Input>
        </FormItem>

        <FormItem label="性别" style="float: left;">
          <Select v-model="watchItem.selectSex" style="width: 50px;">
            <Option value="男">男</Option>
            <Option value="女">女</Option>
          </Select>
        </FormItem>

        <FormItem label="民族" style="float: left;">
          <Input v-model="watchItem.inputNation" style="width: 100px;" placeholder="请输入民族"></Input>
        </FormItem>
      </div>

      <div style="height: 60px;">
        <FormItem label="出生年月" style="width: 500px;">
          <Row>
            <Col span="11">
            <FormItem prop="date" style="width: 350px;">
              <DatePicker style="width: 350px;" type="date" placeholder="请输入出生年月" v-model="watchItem.date"></DatePicker>
            </FormItem>
            </Col>
          </Row>
        </FormItem>
      </div>

      <FormItem label="学校">
        <Input v-model="watchItem.inputSchool" style="width: 350px;" placeholder="请输入学校"></Input>
      </FormItem>

      <FormItem label="户口地址">
        <Input v-model="watchItem.inputAddress" style="width: 350px;" placeholder="请输入户口地址"></Input>
      </FormItem>

      <FormItem label="现住地址">
        <Input v-model="watchItem.inputPresentAddress" style="width: 350px;" placeholder="请输入现住地址"></Input>
      </FormItem>



      <FormItem>
        <Button type="primary" @click="submission">保存</Button>
        <Button type="ghost" style="margin-left: 8px" @click="next">下一步</Button>
      </FormItem>
    </Form>
  </section>
</template>
<script>
  export default {
    data () {
      return {
        watchItem: {
          inputName: '',
          selectSex: '男',
          inputNation: '',
          date: '',
          inputSchool: '',
          inputAddress: '',
          inputPresentAddress: '',
          fatherName: '',
          fatherAge: '',
          fatherCompany: '',
          fatherPhone: '',
          motherName: '',
          motherAge: '',
          motherCompany: '',
          motherPhone: '',
        },
      }
    },
    methods: {
      //提交
      submission(){
        console.log('fun');
      },
      //下一步
      next(){
        this.$parent.mergeOpen(2);
      },
    }
  }
</script>

<style scoped>
</style>-->
