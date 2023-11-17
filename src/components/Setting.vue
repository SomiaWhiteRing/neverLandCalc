<template>
  <div>
    <h5 class="section" @click="isCollapsed = !isCollapsed">高级设置
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
        style="transition: all 0.5s ease-in-out;" class="bi bi-chevron-down" viewBox="0 0 16 16"
        :style="isCollapsed ? 'transform: rotate(180deg)' : ''">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 1 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5
            0 0 1 0-.708z" />
      </svg>
    </h5>
    <div style="overflow: hidden;transition: max-height 0.5s ease-in-out;"
      :style="isCollapsed ? 'max-height: 0px' : 'max-height: 1500px'">
      <b-form>

        <b-form-group id="mushroom-group" label="蘑菇刷取数" label-for="mushroom" label-cols="4" :state="mushroom >= 0"
          invalid-feedback="蘑菇刷取数必须 >= 0">
          <b-form-input type="number" number id="mushroom" v-model="mushroom" required :state="mushroom >= 0"
            @input="onInput()"></b-form-input>
        </b-form-group>

        <b-form-group id="bamboos-group" label="竹笋刷取数" label-for="bamboos" label-cols="4" :state="bamboos >= 0"
          invalid-feedback="竹笋刷取数必须 >= 0">
          <b-form-input type="number" number id="bamboos" v-model="bamboos" required :state="bamboos >= 0"
            @input="onInput()"></b-form-input>
        </b-form-group>

        <b-form-group id="ginseng-group" label="人参刷取数" label-for="ginseng" label-cols="4" :state="ginseng >= 0"
          invalid-feedback="人参刷取数必须 >= 0">
          <b-form-input type="number" number id="ginseng" v-model="ginseng" required :state="ginseng >= 0"
            @input="onInput()"></b-form-input>
        </b-form-group>

        <b-form-group id="pt-group" label="活动点数刷取数" label-for="pt" label-cols="4" :state="pt >= 0"
          invalid-feedback="活动点数刷取数必须 >= 0">
          <b-form-input type="number" number id="pt" v-model="pt" required :state="pt >= 0"
            @input="onInput()"></b-form-input>
        </b-form-group>

      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: true,
      mushroom: 7609,
      bamboos: 6561,
      ginseng: 4955,
      pt: 10000
    };
  },
  methods: {
    onInput: function () {
      this.$emit("change");
    }
  }
};
</script>

<style scoped>
.section {
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
}
</style>
