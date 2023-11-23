<template>
  <div>
    <h5 class="section" @click="isCollapsed = !isCollapsed">快速记录
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
        style="transition: all 0.5s ease-in-out;" class="bi bi-chevron-down" viewBox="0 0 16 16"
        :style="isCollapsed ? 'transform: rotate(180deg)' : ''">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 1 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5
                          0 0 1 0-.708z" />
      </svg>
    </h5>
    <div style="overflow: hidden;transition: max-height 0.5s ease-in-out;"
      :style="isCollapsed ? 'max-height: 0px' : 'max-height: 1500px'">
      <b-card class="result-card" title-tag="h1">
        <b-card-text>根据刷取的场次与已配置的加成快速计算剩余刷取量。</b-card-text>
      </b-card>
      <b-form>

        <b-form-group id="q9num-group" label="刷取Quest9场次" label-for="q9num" label-cols="8" :state="q9num >= 0"
          invalid-feedback="刷取Quest9场次必须 >= 0">
          <b-form-input type="number" number id="q9num" v-model="q9num" required :state="q9num >= 0"></b-form-input>
        </b-form-group>

        <b-form-group id="q10num-group" label="刷取Quest10场次" label-for="q10num" label-cols="8" :state="q10num >= 0"
          invalid-feedback="刷取Quest10场次必须 >= 0">
          <b-form-input type="number" number id="q10num" v-model="q10num" required :state="q10num >= 0"></b-form-input>
        </b-form-group>

        <b-form-group id="q11num-group" label="刷取Quest11场次" label-for="q11num" label-cols="8" :state="q11num >= 0"
          invalid-feedback="刷取Quest11场次必须 >= 0">
          <b-form-input type="number" number id="q11num" v-model="q11num" required :state="q11num >= 0"></b-form-input>
        </b-form-group>

        <b-form-group id="q12num-group" label="刷取Quest12场次" label-for="q12num" label-cols="8" :state="q12num >= 0"
          invalid-feedback="刷取Quest12场次必须 >= 0">
          <b-form-input type="number" number id="q12num" v-model="q12num" required :state="q12num >= 0"></b-form-input>
        </b-form-group>

        <b-button variant="primary" @click="submit()">提交</b-button>

      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: true,
      q9num: 0,
      q10num: 0,
      q11num: 0,
      q12num: 0
    };
  },
  methods: {
    submit: function () {
      this.$emit("submit", {
        q9num: this.q9num,
        q10num: this.q10num,
        q11num: this.q11num,
        q12num: this.q12num
      });
      this.q9num = 0;
      this.q10num = 0;
      this.q11num = 0;
      this.q12num = 0;
    }
  },
};
</script>

<style scoped>
.section {
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
}
</style>
