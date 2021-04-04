<template>
  <div class="choose">
    <p>Please choose one</p>
    <div>
      <button @click="change(1)">{{ A }}</button>
      <button @click="change(2)">{{ B }}</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      A: "鸿",
      B: "涛",
    };
  },
  methods: mapMutations(["change"]),
};
</script>
<style lang="scss" scoped>
.choose {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("../assets/earth.jpg");
  background-size: 100% 100%;
  p {
    font-weight: bold;
    color: #fff;
    font-size: 24px;
    padding-bottom: 12px;
  }
  button {
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background-color: rgb(35, 77, 243);
    color: white;
    outline: none;
    border: none;
    font-size: 16px;
    margin: 4px;
  }
}
</style>