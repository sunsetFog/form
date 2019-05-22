<template>
  <div class="hello">
      111
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
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
