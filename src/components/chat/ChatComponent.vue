<template>
  <div>
    <!-- <complete-chat /> -->
    <!-- Start of Chat -->
    <div class="chat" id="chat1">
      <div class="top">
        <top-bar-menu-component />
      </div>
      <div class="container">
        <div class="col-md-6">
          <form class="form-inline">
            <div class="form-group">
              <label for="name">What is your name?</label>
              <input
                type="text"
                id="name"
                class="form-control"
                v-model="name"
                placeholder="Your name here..."
              />
            </div>
            <button
              id="send"
              class="btn btn-default"
              type="submit"
              @click.prevent="enter"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div class="content" id="content">
        <div class="container">
          <div class="col-md-12">
            <div class="message">
              <typing-component />
            </div>
          </div>
        </div>
      </div>
      <input-component />
    </div>
    <!-- End of Chat -->
    <!-- Start of Call 
    <call-component /> -->
    <!-- End of Call -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TypingComponent from "./TypingComponent.vue";
import InputComponent from "./InputMessageComponent.vue";
import TopBarMenuComponent from "./TopBarMenuComponent.vue";
import CompleteChat from "./CompleteChat.vue";
import SockJS from "sockjs-client";
import Stomp, { Client } from "webstomp-client";

interface Message {
  content: string;
  count: number;
}

let stompChatClient: Client;

const ChatComponent = defineComponent({
  name: "chatcomponent",
  components: {
    //CompleteChat,
    TopBarMenuComponent,
    InputComponent,
  },
});

export default ChatComponent;
</script>
