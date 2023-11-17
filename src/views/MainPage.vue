<template>
  <div>
    <b-jumbotron header="BlueArchive Neverland Calculator" lead="梦幻岛清空商店体力最佳优化">
      <a href="https://github.com/SomiaWhiteRing/neverLandCalc">Source Code on GitHub</a>
    </b-jumbotron>
    <b-container fluid>
      <b-row align-v="start">
        <b-col lg="4" offset-lg="2" md="8" offset-md="2" @change="onChange()">
          <base-input ref="baseInput" />
        </b-col>
        <b-col lg="4" offset-lg="0" md="8" offset-md="2">
          <result-card message="计算结果" :result="result" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BaseInput from "../components/BaseInput.vue";
import ResultCard from "../components/ResultCard.vue";
import { baneverland } from "../js/calc";

export default {
  data: function () {
    return {
      result: {},
    };
  },
  components: {
    BaseInput,
    ResultCard,
  },
  methods: {
    onChange: async function () {
      const d = this.$refs.baseInput;
      const result = await baneverland(
        d.mushroom / 100,
        d.bamboos / 100,
        d.ginseng / 100,
        d.pt / 100
      );
      this.result = result;
    }
  },
  async mounted() {
    this.result = await baneverland(0, 0, 0, 0);
  }
};
</script>

<style scoped>
a {
  color: #7b8692;
}
</style>