<template>
    <div class="shadow padding flex between">
      <div>毕业设计论文管理系统</div>
      欢迎 : {{userName}}
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      // 注：userName是从storage中获取的也可以也可以是this.$store.state....啥啥啥
      userName: 'test'
    }
  }
}
</script>

<style scoped>
  .flex{
    display: flex;
  }
  .flex_direction{
    flex-direction: row-reverse;
  }
  .between{
    justify-content: space-between;
  }
  .padding{
    padding: 20px;
  }
  .shadow{
    box-shadow: 0 0 10px #cacaca;
  }
  .content{
    height: calc(100vh - 100px);
  }
</style>
