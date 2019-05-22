<style lang="less">
  @import './login.less';
</style>
<template>
  <div class="login">
    <div class="title">
      <div>
        华南师范大学第二附属中学
      </div>
      <div >
        招生系统
      </div>
    </div>
    <div class="login-con"  >
      <Card :bordered="false">
        <Tabs size="small" v-model="start">
          <TabPane name="denglu" label="登录">
            <div class="form-con" @keydown.enter="handleSubmit">
              <Form ref="loginForm" :model="form" :rules="rules">
                <FormItem prop="userTel">
                  <Input v-model="form.userTel" placeholder="请输入手机号">
                  <span slot="prepend">
                                    <Icon :size="16" type="ios-telephone"></Icon>
                                </span>
                  </Input>
                </FormItem>
                <FormItem prop="password">
                  <Input type="password" v-model="form.password" placeholder="请输入密码">
                  <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                  </Input>
                </FormItem>
                <div class="wangjimima" @click="wangjimima">
                  <span>忘记密码</span>
                </div>
                <FormItem>
                  <Button @click="handleSubmit" type="primary" long>登录</Button>
                </FormItem>
              </Form>
              <!--<p class="login-tip">输入任意用户名和密码即可</p>-->
            </div>
          </TabPane>
          <TabPane name="zhuce" label="注册">
            <div class="form-con" @keydown.enter="registerSubmit">
              <Form ref="registerForm" :model="form2" :rules="rules2">
                <FormItem prop="userTel">
                  <Input v-model="form2.userTel" placeholder="请输入手机号">
                  <span slot="prepend">
                                    <Icon :size="16" type="ios-telephone"></Icon>
                                </span>
                  </Input>
                </FormItem>
                <FormItem prop="name">
                  <Input v-model="form2.name" placeholder="请输入姓名">
                  <span slot="prepend">
                                    <Icon :size="14" type="person"></Icon>
                                </span>
                  </Input>
                </FormItem>
                <FormItem prop="password">
                  <template>
                    <Input type="password" v-model="form2.password" placeholder="请输入密码">
                    <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>

                    </Input>

                  </template>
                </FormItem>
                <FormItem prop="yanzhengma">
                  <Input v-model="form2.yanzhengma" placeholder="请输入验证码" style="width:50%;">
                  <span slot="prepend">
                                    <Icon :size="14" type="eye"></Icon>
                                </span>
                  </Input>
                  <Button v-show="sendAuthCode" type="primary" class="huoquBtn" @click="getAuthCode">获取验证码</Button>
                  <Button v-show="!sendAuthCode" type="dashed" disabled class="huoquBtn"><span>{{auth_time}}</span> 秒后重新发送</Button>
                </FormItem>
                <FormItem>
                  <Button @click="registerSubmit" type="primary" long>注册</Button>
                </FormItem>
              </Form>
              <!--<p class="login-tip">输入任意用户名和密码即可</p>-->
            </div>
          </TabPane>
        </Tabs>
      </Card>
    </div>
    <Spin fix v-if="loadingShow">
      <Icon type="load-c" size="24" class="demo-spin-icon-load"></Icon>
      <div>加载中</div>
    </Spin>
    <Modal
      :mask-closable="false"
      class="modal2"
      v-model="modal"
      title="修改密码"
      @on-cancel="cancel">
      <div class="yanzheng" v-if="yanzhengShow">
        <Form ref="yanzhengForm" :model="form3" :rules="rules3"  class="modal1">
          <FormItem prop="userTel">
            <Input v-model="form3.userTel" placeholder="请输入手机号">
            <span slot="prepend">
                                    <Icon :size="16" type="ios-telephone"></Icon>
                                </span>
            </Input>
          </FormItem>
          <FormItem prop="yanzhengma">
            <Input v-model="form3.yanzhengma" placeholder="请输入验证码" style="width:50%;">
            <span slot="prepend">
                                    <Icon :size="14" type="eye"></Icon>
                                </span>
            </Input>
            <Button v-show="sendAuthCode1" type="primary" class="huoquBtn" @click="getAuthCode1">获取验证码</Button>
            <Button v-show="!sendAuthCode1" type="dashed" disabled class="huoquBtn"><span>{{auth_time1}}</span> 秒后重新发送</Button>
          </FormItem>
          <FormItem>
            <Button @click="yzmSubmit" type="primary" long>确认</Button>
          </FormItem>
        </Form>
      </div>
      <div class="xiugai" v-else>
        <Form ref="xiugaiForm" :model="form3" :rules="rules4"  class="modal1">
          <FormItem prop="password1">
            <template>
              <Input type="password" v-model="form3.password1" placeholder="请输入新密码">
              <span slot="prepend">
                                      <Icon :size="14" type="locked"></Icon>
                                  </span>
              </Input>
            </template>
          </FormItem>

          <FormItem prop="password2">
            <template>
              <Input type="password" v-model="form3.password2" placeholder="请再次输入新密码">
              <span slot="prepend">
                                      <Icon :size="14" type="locked"></Icon>
                                  </span>
              </Input>
            </template>
          </FormItem>

          <FormItem>
            <Button @click="xiugaiSubmit" type="primary" long>确认</Button>
          </FormItem>
        </Form>
      </div>
    </Modal>
  </div>
</template>
<style scoped>
  .title{
    margin-top:60px;
    font-family: 'Share Tech Mono', monospace;
    color: #ffffff;
    font-size:30px;
    font-weight: 700;
    color: #000;
    text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
  }
  .huoquBtn{
    position: absolute;
    right: 0;
    top: 1px;
  }
  .chakanBtn{
    position: absolute;
    right: 11px;
    top: 9px;
    z-index:22;
  }
  .wangjimima{
    margin-left:200px;
    color:#999;
    font-size:14px;
    margin-bottom:10px;
  }
  .modal1{
    margin:0 100px 0 100px;
  }
</style>
<style>
  .modal2 .ivu-modal-footer{
    display:none;
  }
</style>
<script>
  export default {
    data () {
      return {
        start:'denglu',
        yanzhengShow:true,
        modal:false,
        sendAuthCode:true,
        auth_time:0,
        loadingShow:false,
        auth_time1:0,
        sendAuthCode1:true,
        yanzhengForm1:{
          userId:'',
          yanzhengma:'',
          tel:'',
        },
        form: {
          userTel: '',
          password: ''
        },
        form2:{
          userTel:'',
          name:'',
          yanzhengma:'',
          password:''
        },
        form3:{
          userTel:'',
          yanzhengma:'',
          password1:'',
          password2:'',
        },
        rules: {
          userTel: [
            { required: true, message: '手机号码不能为空', trigger: 'blur' },
            { type: 'string',pattern:/^[1][3,4,5,7,8][0-9]{9}$/, message:'请输入正确的手机号', trigger:'blur'},
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
            { type: 'string',pattern:/^.{6,10}$/, message:'密码长度必须为6位以上', trigger:'blur'},
          ]
        },
        rules1:{
          userTel: [
            { required: true, message: '手机号不能为空', trigger: 'blur' },
            { type: 'string',pattern:/^[1][3,4,5,7,8][0-9]{9}$/, message:'请输入正确的手机号', trigger:'blur'},
          ],
        },
        rules2: {
          userTel: [
            { required: true, message: '手机号不能为空', trigger: 'blur' },
            { type: 'string',pattern:/^[1][3,4,5,7,8][0-9]{9}$/, message:'请输入正确的手机号', trigger:'blur'},
          ],
          name: [
            { required: true, message: '姓名不能为空', trigger: 'blur' },
            { type: 'string',pattern:/^[\u4E00-\u9FA5A-Za-z]+$/, message:'请输入符合规范的姓名', trigger:'blur'},
          ],
          yanzhengma: [
            { required: true, message: '验证码不能为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
            { type: 'string',pattern:/^.{6,10}$/, message:'密码长度必须为6位以上', trigger:'blur'},
          ],
        },
        rules3: {
          userTel: [
            { required: true, message: '手机号不能为空', trigger: 'blur' },
            { type: 'string',pattern:/^[1][3,4,5,7,8][0-9]{9}$/, message:'请输入正确的手机号', trigger:'blur'},
          ],
          /*yanzhengma: [
            { required: true, message: '验证码不能为空', trigger: 'blur' }
          ],*/
        },
        rules4:{
          password1: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
            { type: 'string',pattern:/^.{6,10}$/, message:'密码长度必须为6位以上', trigger:'blur'},
          ],
          password2: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
            { type: 'string',pattern:/^.{6,10}$/, message:'密码长度必须为6位以上', trigger:'blur'},
          ],
        }
      };
    },
    methods: {
      //修改密码，提交
      xiugaiSubmit(){
        let _this = this;
        _this.$refs.xiugaiForm.validate((valid) => {
          if (valid) {
            if(_this.form3.password1 == _this.form3.password2){
              let params = {
                user_id:_this.yanzhengForm1.userId,
                password:_this.form3.password2
              }
              _this.$http.post(_this.$url.url.index_savePassword,params)
                .then(function(response) {
                  // console.log(response);
                  _this.modal = false;
                  if(response.data.has_save == 1){
                    _this.$Message.success('密码修改成功，请登录');
                  }else if(response.data.has_save ==0){
                    _this.$Message.error('密码修改出错，请重新修改');
                  }
                }).catch(function(error){
                // console.log(error);
              });
            }else{
              _this.$Message.error('确认密码必须跟密码一致');
            }
          }
        });
      },
      //验证码提交
      yzmSubmit(){
        let _this = this;
        // console.log(1);
        _this.$refs.yanzhengForm.validate((valid) => {
          if (valid) {
            if(_this.yanzhengForm1.tel == _this.form3.userTel&&_this.yanzhengForm1.yanzhengma==_this.form3.yanzhengma){
              _this.yanzhengShow = !_this.yanzhengShow;
            }else{
              _this.$Message.error('验证码错误，请重新输入');
            }
          }
        });
      },
      cancel(){
        this.yanzhengForm1.yanzhengma ='';
        this.yanzhengForm1.tel ='';
        this.yanzhengForm1.userId ='';
      },
      wangjimima(){
        this.modal = true;
      },
      //注册时验证验证码
      getAuthCode() {
        let _this =this;
        let params = {
          tel:_this.form2.userTel,
        }
        _this.$http.post(_this.$url.url.index_sendYanzhengma,params)
          .then(function(response) {
            // console.log(response);
            _this.sendAuthCode = false;
            _this.auth_time = 60;
            var auth_timetimer =  setInterval(()=>{
              _this.auth_time--;
              if(_this.auth_time<=0){
                _this.sendAuthCode = true;
                clearInterval(auth_timetimer);
              }
            }, 1000);
          }).catch(function(error){
          // console.log(error);
        });


      },
      getAuthCode1(){
        let _this =this;
        let params = {
          tel:_this.form3.userTel,
        }
        //验证该手机是否存在
        _this.$http.post(_this.$url.url.index_checkUserTel,params)
          .then(function(response) {
            // console.log(response);
            if(response.data.has_tel > 0){
              _this.yanzhengForm1.userId = response.data.has_tel;
              //手机存在发送验证码
              _this.$http.post(_this.$url.url.index_sendYanzhengma,params)
                .then(function(response) {
                  // console.log(response);
                  if(response.data.has_send == 1){
                    _this.yanzhengForm1.yanzhengma = response.data.yanzhengma;
                    _this.yanzhengForm1.tel = _this.form3.userTel;
                    _this.sendAuthCode1 = false;
                    _this.auth_time1 = 60;
                    var auth_timetimer =  setInterval(()=>{
                      _this.auth_time1--;
                      if(_this.auth_time1<=0){
                        _this.sendAuthCode1 = true;
                        clearInterval(auth_timetimer);
                      }
                    }, 1000);
                  }else if(response.data.has_send == 0){
                    _this.$Message.error('发送验证码失败，请重新发送');
                  }
                }).catch(function(error){
                // console.log(error);
              });
            }else if(response.data.has_tel == 0){
              _this.$Message.error('该手机号未注册，请先注册');
            }
          }).catch(function(error){
          // console.log(error);
        });
      },
      handleSubmit () {
        let _this = this;
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            _this.loadingShow = true;
            let params = {
              tel:_this.form.userTel,
              password:_this.form.password,
            }
            _this.$http.post(_this.$url.url.index_checkLogin,params)
              .then(function(response) {
                // console.log(response);
                sessionStorage.setItem('userId',response.data.user_id);

                if(response.data.has_login == 1){
                  sessionStorage.setItem('sessionId',response.data.session_id);
                  sessionStorage.setItem('danganId',response.data.dangan_id);
                  sessionStorage.setItem('status',response.data.status);
                  _this.loadingShow = false;
                  if(response.data.status == 0){
                    _this.$router.push(
                      {
                        name:'Shuoming'
                      }
                    )
                  }else if(response.data.status == 1){
                    _this.$router.push(
                      {
                        name:'Main'
                      }
                    )
                  }else if(response.data.status == 2){
                    _this.$router.push(
                      {
                        name:'Main',
                        params:{
                          value:3,
                          sessionId:response.data.session_id,
                          userId:response.data.user_id,
                          danganId:response.data.dangan_id,
                          status:response.data.status
                        },
                      }
                    )
                  }
                }else if(response.data.has_login == 0){
                  _this.$Message.error('账号和密码不匹配');
                  _this.loadingShow = false;
                }


              }).catch(function(error){
              // console.log(error);
            });

          }
        });
      },
      clearFrom(){
        this.form2.userTel='',
        this.form2.name='',
        this.form2.yanzhengma='',
        this.form2.password=''
      },
      registerSubmit(){
        let _this =this;

        this.$refs.registerForm.validate((valid) => {
          if (valid) {
            let params = {
              tel: this.form2.userTel,
              password: this.form2.password,
              mingcheng:this.form2.name
            }
            _this.$http.post(_this.$url.url.baoming_saveRegInfo,params)
              .then(function(response) {
                // console.log(response);
                if(response.data.has_tel == '1'){
                  _this.$Message.error('该账号已注册');
                  // _this.clearFrom();
                }else{
                  _this.start = 'denglu';
                  _this.$Message.success('注册成功，请登录');
                  _this.clearFrom();
                }
              }).catch(function(error){
              // console.log(error);
            });
          }else{
            _this.$message.error('请输入正确的信息');
          }
        })
      },
    }
  };
</script>

<style>
  .ivu-tabs-nav-scroll{
    padding-left:80px !important;
  }
  .demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
  }
  @keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
  }
</style>
