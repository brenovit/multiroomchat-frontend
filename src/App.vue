<template>
  <MainChatComponent />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MainChatComponent from "./components/MainChatComponent.vue";

@Options({
  components: {
    MainChatComponent,
  },
})
export default class App extends Vue {}
</script>

<style>
@import "./assets/swipe.min.css";
</style>
