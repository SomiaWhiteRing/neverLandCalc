<template>
  <div>
    <h5> 运算结果 </h5>

    <b-card class="result-card" title-tag="h1">
      <b-card-text>需要刷取Quest9的次数：{{ result.Q9 }}次</b-card-text>
      <b-card-text>需要刷取Quest10的次数：{{ result.Q10 }}次</b-card-text>
      <b-card-text>需要刷取Quest11的次数：{{ result.Q11 }}次</b-card-text>
      <b-card-text>需要刷取Quest12的次数：{{ result.Q12 }}次</b-card-text>
      <b-card-text>需要花费的AP总数：{{ result.result * 15 }}点</b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    result: Object
  },
};
</script>

<style scoped>
.result-card {
  width: 100%;
  margin-bottom: 20px;
  ;
}
</style>