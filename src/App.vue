<template>
  <div class="home">
    <main-chat-component></main-chat-component>
  </div>
</template>
<script>
import MainChatComponent from "@/components/MainChatComponent.vue";
//import SignInComponent from "@/components/SignInComponent.vue";
//import SignUpComponent from "@/components/SignUpComponent.vue";
export default {
  name: "home",
  components: {
    MainChatComponent,
    //SignInComponent,
    //SignUpComponent,
  },
};
</script>
<style>
@import "./assets/swipe.min.css";
</style>
