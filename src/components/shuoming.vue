<template>
  <div class="wrap">
    <div style="background:#eee;" class="main">
      <Card :bordered="false" style="width: 800px;margin:0 auto;">
        <p slot="title">使用说明</p>
        <p style="text-align:left;padding:50px 100px 0px 100px;font-size:16px;text-indent:2em;">
          我在此声明入学报名所提供给学校的所有资料都是真实、准确、有效的。我理解如入学报名所提供的资料存在任何不属实之处，学校有权利拒绝我的孩子入学，或在入学后要求我的孩子退学,一切后果由我们监护人自行完全承担。
        </p>
        <br/>
        <br/>
        <p style="text-align:left;padding:0px 100px 0px 100px;font-size:16px;text-indent:2em;">
          I declare that all the information provided to the school is true, correct and valid. I confirm that no false statements and no misrepresentation have been made by us. I understand that No.2 Secondary school Affiliated to SCNU reserves the right to vary or reverse any decision regarding my child’s admission or enrollment made on the basis of incorrect or incomplete information.
        </p>
        <p style="margin-top:100px;color:darkred;font-size:16px;">请认真阅读该内容</p>

        <div class="footer">
          <!--<Button type="primary" @click="fanhui">返回上一步</Button>-->
          <Button type="primary" @click="luru">开始录入信息</Button>
        </div>
      </Card>
    </div>
  </div>
</template>
<style scoped>
  .wrap{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(238, 238, 238);
  }
  .main{
    text-align: center;
  }
  .footer{
    border-top:1px solid #eee;
    margin-top:18px;
    padding-top:18px;
  }
</style>
<script>
  export default {
    name: 'Shuoming',
    data () {
      return {

      }
    },
    methods:{
      fanhui(){
        this.$router.push(
          {
            name:'Login'
          }
        )
      },
      luru(){
        let _this =this;
        let params = {
          user_id : sessionStorage.getItem('userId'),
          session_id : sessionStorage.getItem('sessionId')
        }
        _this.$http.post(_this.$url.url.baoming_addDangan,params)
          .then(function(response) {
            // console.log(response);
            sessionStorage.setItem('danganId',response.data.has_add);
            _this.$router.push(
              {
                name:'Main'
              }
            )
          }).catch(function(error){
          // console.log(error);
        });

      }
    },
    beforeCreate: function () {
      if (!sessionStorage.getItem('userId')){
        this.$router.push(
          {
            name:'Login'
          }
        )
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
