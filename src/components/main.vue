<template>
  <div class="wrap" style="height:100%;padding-top:80px;">
    <Steps :current="value1" style="">
      <Step title="步骤1" content="基本信息录入"></Step>
      <Step title="步骤2" content="成绩信息录入"></Step>
      <Step title="步骤3" content="获奖信息录入"></Step>
      <Step title="步骤4" content="预览信息"></Step>
    </Steps>
    <Carousel v-model="value1" style="height:100%" dots="none" arrow="never">
      <CarouselItem>
        <div class="demo-carousel">
          <jiben v-if="value1==0" @jibenNext="jibenNext"></jiben>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <chengji v-if="value1==1" @chengjiNext="chengjiNext" @chengjiLast="chengjiLast"></chengji>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <jiangxiang v-if="value1==2" @jiangxiangNext="jiangxiangNext" @jiangxiangLast="jiangxiangLast"></jiangxiang>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel" style="width:660px;margin:0 auto;">
          <message v-if="value1==3" @messageLast="messageLast"></message>
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>
<style scoped>

</style>
<script>
  import Chengji from './chengji';
  import Jiben from './jibenxinxi';
  import Jiangxiang from './jiangxiang';
  import Message from './message'
  export default {
    name: 'Main',
    components:{
      Chengji,
      Jiben,
      Jiangxiang,
      Message
    },
    data () {
      return {
        value1: 0
      }
    },
    methods:{
      jibenNext(){
        this.value1 = 1;
      },
      chengjiLast(){
        this.value1 = 0;
      },
      chengjiNext(){
        this.value1 = 2;
      },
      jiangxiangLast(){
        this.value1 = 1;
      },
      jiangxiangNext(){
        this.value1 = 3;
      },
      messageLast(){
        this.value1 = 2;
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

    },
    mounted(){
      if(sessionStorage.getItem('status')){
        this.value1 = sessionStorage.getItem('status')==2?3:0;
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
