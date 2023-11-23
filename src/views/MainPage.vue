<template>
  <div>
    <b-jumbotron header="BlueArchive Neverland Calculator" lead="梦幻岛清空商店体力最佳优化">
      <a href="https://github.com/SomiaWhiteRing/neverLandCalc">Source Code on GitHub</a>
    </b-jumbotron>
    <b-container fluid>
      <b-row align-v="start">
        <b-col lg="4" offset-lg="2" md="8" offset-md="2" @change="onChange()">
          <base-input ref="baseInput" />
          <fast-edit @submit="fastEdit" />
        </b-col>
        <b-col lg="4" offset-lg="0" md="8" offset-md="2">
          <result-card message="计算结果" :result="result" />
          <setting ref="setting" @change="onChange()" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BaseInput from "../components/BaseInput.vue";
import ResultCard from "../components/ResultCard.vue";
import Setting from "../components/Setting.vue";
import FastEdit from "../components/FastEdit.vue";
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
    Setting,
    FastEdit,
  },
  methods: {
    onChange: async function () {
      const d = this.$refs.baseInput;
      const setting = this.$refs.setting;
      const result = await baneverland(
        d.mushroom / 100,
        d.bamboos / 100,
        d.ginseng / 100,
        d.pt / 100,
        setting
      );
      this.result = result;
    },
    fastEdit: function (data) {
      const d = this.$refs.baseInput;
      const setting = this.$refs.setting;
      console.log(data, d, setting);
      // 余数进一
      const mushroomCost = Math.ceil((d.mushroom / 100 + 1) * data.q9num * 30) + Math.ceil((d.mushroom / 100 + 1) * data.q12num * 4);
      const bamboosCost = Math.ceil((d.bamboos / 100 + 1) * data.q10num * 24) + Math.ceil((d.bamboos / 100 + 1) * data.q12num * 4);
      const ginsengCost = Math.ceil((d.ginseng / 100 + 1) * data.q11num * 20) + Math.ceil((d.ginseng / 100 + 1) * data.q12num * 4);
      const ptCost = Math.ceil((d.pt / 100 + 1) * data.q9num * 5) + Math.ceil((d.pt / 100 + 1) * data.q10num * 5) + Math.ceil((d.pt / 100 + 1) * data.q11num * 5) + Math.ceil((d.pt / 100 + 1) * data.q12num * 20);

      setting.mushroom -= mushroomCost;
      setting.bamboos -= bamboosCost;
      setting.ginseng -= ginsengCost;
      setting.pt -= ptCost;

      this.onChange();
    }
  },
  async mounted() {
    this.result = await baneverland(0, 0, 0, 0, this.$refs.setting);
  }
};
</script>

<style scoped>
a {
  color: #7b8692;
}
</style>