<template>
  <div class="lwh_cont">
    <div></div>
    <div class=".bs">
      <div></div>
    </div>
    <div></div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "",
  // 组件注册
  components: {},
  // 父组件传参
  props: {},
  // 变量声明
  data() {
    return {
      leat: new Date(),
    };
  },
  // Vue实例创建完成以后执行 数据可用
  created() {},
  // Vue模板挂载完毕以后执行  DOM节点加载完毕了（可以获取节点了）
  mounted() {
   this.$nextTick(()=>{
     this.bs = new BScroll(".bs", {})
     console.log(this.bs)
   })
  },
  // vue组件更新完毕以后执行
  update() {},
  // 定义事件
  methods: {
    // onScroll(pos) {
    // }
  },
  // 过滤器
  filters: {
    // lwh_fro(val,cont){
    //     function dateFormat(date, format) {
    //             if (typeof date === "string") {
    //                 var mts = date.match(/(\/Date\((\d+)\)\/)/);
    //                 if (mts && mts.length >= 3) {
    //                     date = parseInt(mts[2]);
    //                 }
    //             }
    //             date = new Date(date);
    //             if (!date || date.toUTCString() == "Invalid Date") {
    //                 return "";
    //             }
    //             var map = {
    //                 "M": date.getMonth() + 1, //月份
    //                 "d": date.getDate(), //日
    //                 "h": date.getHours(), //小时
    //                 "m": date.getMinutes(), //分
    //                 "s": date.getSeconds(), //秒
    //                 "q": Math.floor((date.getMonth() + 3) / 3), //季度
    //                 "S": date.getMilliseconds() //毫秒
    //             };
    //             format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
    //                 var v = map[t];
    //                 if (v !== undefined) {
    //                     if (all.length > 1) {
    //                         v = '0' + v;
    //                         v = v.substr(v.length - 2);
    //                     }
    //                     return v;
    //                 } else if (t === 'y') {
    //                     return (date.getFullYear() + '').substr(4 - all.length);
    //                 }
    //                 return all;
    //             });
    //             return format;
    //         }
    //         return dateFormat(val,cont)
    // }
  },
  // 计算属性
  computed: {},
  // 监听属性
  watch: {},
};
</script>

<style lang="scss" scoped>
.lwh_cont {
  width: 100%;
  height: 100%;
  > div:nth-of-type(2) {
    width: 100%;
    height: 3rem;
    overflow: hidden;
    > div {
      width: 100%;
      min-height: 101%;
      background: green;
    }
  }
}
</style>
