<template>
  <div>
    <!-- Start of Chat -->
    <div class="chat" id="chat1">
      <div class="top">
        <top-bar-menu-component />
      </div>
      <div class="content" id="content">
        <div class="container">
          <div class="col-md-12">
            <complete-chat />
            <div class="message">
              <typing-component />
            </div>
          </div>
        </div>
      </div>
      <input-component />
    </div>
    <!-- End of Chat -->
    <!-- Start of Call -->
    <call-component />
    <!-- End of Call -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CallComponent from "./CallComponent.vue";
import TypingComponent from "./TypingComponent.vue";
import InputComponent from "./InputMessageComponent.vue";
import TopBarMenuComponent from "./TopBarMenuComponent.vue";
import CompleteChat from "./CompleteChat.vue";

const ChatComponent = defineComponent({
  name: "chatcomponent",
  components: {
    CompleteChat,
    TypingComponent,
    InputComponent,
    TopBarMenuComponent,
  },
});

export default ChatComponent;
</script>