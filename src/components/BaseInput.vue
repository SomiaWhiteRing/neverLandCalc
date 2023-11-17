<template>
  <div>
    <b-form>
      <h5 class="section">各项加成</h5>

      <b-form-group id="mushroom-group" label="蘑菇加成（%）" label-for="mushroom" label-cols="4"
        :state="mushroom >= 0 && mushroom <= 100" invalid-feedback="蘑菇加成数值必须 >= 0 且 <= 100">
        <b-form-input type="number" number id="mushroom" v-model="mushroom" required
          :state="mushroom >= 0 && mushroom <= 100" :step="25" @input="onInput()"></b-form-input>
      </b-form-group>

      <b-form-group id="bamboos-group" label="竹笋加成（%）" label-for="bamboos" label-cols="4"
        :state="bamboos >= 0 && bamboos <= 100" invalid-feedback="竹笋加成数值必须 >= 0 且 <= 100">
        <b-form-input type="number" number id="bamboos" v-model="bamboos" required
          :state="bamboos >= 0 && bamboos <= 100" :step="25" @input="onInput()"></b-form-input>
      </b-form-group>

      <b-form-group id="ginseng-group" label="人参加成（%）" label-for="ginseng" label-cols="4"
        :state="ginseng >= 0 && ginseng <= 100" invalid-feedback="人参加成数值必须 >= 0 且 <= 100">
        <b-form-input type="number" number id="ginseng" v-model="ginseng" required
          :state="ginseng >= 0 && ginseng <= 100" :step="25" @input="onInput()"></b-form-input>
      </b-form-group>

      <b-form-group id="pt-group" label="活动点数加成（%）" label-for="pt" label-cols="4" :state="pt >= 0 && pt <= 100"
        invalid-feedback="活动点数加成数值必须 >= 0 且 <= 100">
        <b-form-input type="number" number id="pt" v-model="pt" required
          :state="pt >= 0 && pt <= 100" :step="10" @input="onInput()"></b-form-input>
      </b-form-group>

      <h5 class="section" @click="isCollapsed = !isCollapsed">加成详情
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          style="transition: all 0.5s ease-in-out;" class="bi bi-chevron-down" viewBox="0 0 16 16"
          :style="isCollapsed ? 'transform: rotate(180deg)' : ''">
          <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 1 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5
            0 0 1 0-.708z" />
        </svg>
      </h5>
      <div style="overflow: hidden;transition: max-height 0.5s ease-in-out;"
        :style="isCollapsed ? 'max-height: 0px' : 'max-height: 1000px'">
        <img :src="require('../assets/neverland.png')" alt="neverland" style="width: 100%; height: auto;">
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mushroom: 0,
      bamboos: 0,
      ginseng: 0,
      pt: 0,
      isCollapsed: true
    };
  },
  methods: {
    onInput: function () {
      this.$emit("change");
    }
  },
  watch: {
    mushroom: function (newValue) {
      localStorage.setItem("base_input_mushroom", newValue);
    },
    bamboos: function (newValue) {
      localStorage.setItem("base_input_bamboos", newValue);
    },
    ginseng: function (newValue) {
      localStorage.setItem("base_input_ginseng", newValue);
    },
    pt: function (newValue) {
      localStorage.setItem("base_input_pt", newValue);
    }
  },
  mounted() {
    this.mushroom = Number(localStorage.getItem("base_input_mushroom")) || 0;
    this.bamboos = Number(localStorage.getItem("base_input_bamboos")) || 0;
    this.ginseng = Number(localStorage.getItem("base_input_ginseng")) || 0;
    this.pt = Number(localStorage.getItem("base_input_pt")) || 0;
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
