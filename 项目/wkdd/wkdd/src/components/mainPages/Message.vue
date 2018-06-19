<template>
  <div class="message">
    <Header></Header>
    <div v-if="users" class="message-list">
      <div class="message-list-item" v-for="item in users">
        <div class="message-list-item-icon">
          <img :src="item.img" alt="">
        </div>
        <div class="message-list-item-uname">
          {{item.name}}
        </div>
        <div class="message-list-item-time">
          {{item.time}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../common/MainPagesHeader'
  import mockdata from '../../mock/mock'

  export default {
    name: "message",
    data() {
      return {
        users:null
      }
    },
    components: {
      Header,
    },
    methods:{
      getData() {
        this.$http.get('http://mockdata.cn', {}).then((res) => {
          let resData = res.data.users;
          console.log(resData);
          this.users = resData;
        })
      }
    },
    mounted() {
      this.getData();
    }
  }
</script>

<style scoped lang="scss">
  .message {
    @extend .max-w-h;
    overflow-y: scroll;
    .message-list {
      @extend .max-w-h;
      padding: 0 10px;
      .message-list-item {
        width: 100%;
        height: 115px;
        padding: 0 20px;
        border-bottom: 1px solid #CED4D5;
        @include flex(row,space-between,center);
        position: relative;
        .message-list-item-icon {
          min-width: 86px;
          img {
            width: 86px;
            height: 86px;
          }
        }
        .message-list-item-uname {
          @include position(absolute,'','',126px,'');
        }
        .message-list-item-time {
          color: #86999A;
        }
      }
    }
  }
</style>
