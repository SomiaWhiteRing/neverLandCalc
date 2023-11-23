<template>
  <div>
    <h5 class="section" @click="isCollapsed = !isCollapsed">刷取目标
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

        <b-form-group id="mushroom-group" label="还需刷取蘑菇数" label-for="mushroom" label-cols="8" :state="mushroom >= 0"
          invalid-feedback="还需刷取蘑菇数必须 >= 0">
          <b-form-input type="number" number id="mushroom" v-model="mushroom" required :state="mushroom >= 0"
            @input="onInput()"></b-form-input>
        </b-form-group>

        <b-form-group id="bamboos-group" label="还需刷取竹笋数" label-for="bamboos" label-cols="8" :state="bamboos >= 0"
          invalid-feedback="还需刷取竹笋数必须 >= 0">
          <b-form-input type="number" number id="bamboos" v-model="bamboos" required :state="bamboos >= 0"
            @input="onInput()"></b-form-input>
        </b-form-group>

        <b-form-group id="ginseng-group" label="还需刷取人参数" label-for="ginseng" label-cols="8" :state="ginseng >= 0"
          invalid-feedback="还需刷取人参数必须 >= 0">
          <b-form-input type="number" number id="ginseng" v-model="ginseng" required :state="ginseng >= 0"
            @input="onInput()"></b-form-input>
        </b-form-group>

        <b-form-group id="pt-group" label="还需刷取活动点数数" label-for="pt" label-cols="8" :state="pt >= 0"
          invalid-feedback="还需刷取活动点数数必须 >= 0">
          <b-form-input type="number" number id="pt" v-model="pt" required :state="pt >= 0"
            @input="onInput()"></b-form-input>
        </b-form-group>
        <div class="button-group">
          <b-button variant="primary" @click="reset()">重置</b-button>
          <b-button variant="primary" @click="outputData()">导出</b-button>
          <b-button variant="primary" @click="importData()">导入</b-button>
        </div>

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
    },
    reset: function () {
      this.mushroom = 7609;
      this.bamboos = 6561;
      this.ginseng = 4955;
      this.pt = 10000;
      this.$emit("change");
    },
    outputData: function () {
      const data = {
        base: {
          mushroom: localStorage.getItem("base_input_mushroom") || 0,
          bamboos: localStorage.getItem("base_input_bamboos") || 0,
          ginseng: localStorage.getItem("base_input_ginseng") || 0,
          pt: localStorage.getItem("base_input_pt") || 0
        },
        setting: {
          mushroom: localStorage.getItem("setting_mushroom"),
          bamboos: localStorage.getItem("setting_bamboos"),
          ginseng: localStorage.getItem("setting_ginseng"),
          pt: localStorage.getItem("setting_pt")
        }
      };
      const blob = new Blob([JSON.stringify(data)], {
        type: "text/plain;charset=utf-8"
      });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "梦幻岛活动记录.json";
      a.click();
    },
    importData: function () {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "application/json";
      input.onchange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = JSON.parse(e.target.result);
          localStorage.setItem("base_input_mushroom", data.base.mushroom);
          localStorage.setItem("base_input_bamboos", data.base.bamboos);
          localStorage.setItem("base_input_ginseng", data.base.ginseng);
          localStorage.setItem("base_input_pt", data.base.pt);
          localStorage.setItem("setting_mushroom", data.setting.mushroom);
          localStorage.setItem("setting_bamboos", data.setting.bamboos);
          localStorage.setItem("setting_ginseng", data.setting.ginseng);
          localStorage.setItem("setting_pt", data.setting.pt);
          if (confirm("导入成功，刷新页面以应用")) {
            window.location.reload();
          }
        };
        reader.readAsText(file);
      };
      input.click();
    }
  },
  watch: {
    mushroom: function (newValue) {
      localStorage.setItem("setting_mushroom", newValue);
    },
    bamboos: function (newValue) {
      localStorage.setItem("setting_bamboos", newValue);
    },
    ginseng: function (newValue) {
      localStorage.setItem("setting_ginseng", newValue);
    },
    pt: function (newValue) {
      localStorage.setItem("setting_pt", newValue);
    }
  },
  mounted() {
    this.mushroom = Number(localStorage.getItem("setting_mushroom")) || 7609;
    this.bamboos = Number(localStorage.getItem("setting_bamboos")) || 6561;
    this.ginseng = Number(localStorage.getItem("setting_ginseng")) || 4955;
    this.pt = Number(localStorage.getItem("setting_pt")) || 10000;
  }
};
</script>

<style scoped>
.section {
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
}

.button-group {
  margin-top: 15px;
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: center;
}
</style>
