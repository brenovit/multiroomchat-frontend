<template>
  <div>
    <div id="main-content" class="container">
      <div class="row">
        <div class="col-md-6">
          <form class="form-inline">
            <div class="form-group">
              <label for="connect">WebSocket connection:</label>
              <button
                id="connect"
                class="btn btn-default"
                type="submit"
                :disabled="connected == true"
                @click.prevent="connect"
              >
                Connect
              </button>
              <button
                id="disconnect"
                class="btn btn-default"
                type="submit"
                :disabled="connected == false"
                @click.prevent="disconnect"
              >
                Disconnect
              </button>
            </div>
          </form>
        </div>
        <div class="col-md-6">
          <form class="form-inline">
            <div class="form-group">
              <label for="name">What is your name?</label>
              <input
                type="text"
                id="name"
                class="form-control"
                v-model="sendMessage"
                placeholder="Your name here..."
              />
            </div>
            <button
              id="send"
              class="btn btn-default"
              type="submit"
              @click.prevent="send"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <table id="conversation" class="table table-striped">
            <thead>
              <tr>
                <th>Greetings | messages: {{ notifications }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in receivedMessages" :key="item">
                <td>{{ item }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SockJS from "sockjs-client";
import Stomp, { Client } from "webstomp-client";

interface Message {
  content: string;
  count: number;
}

let stompChatClient: Client;

const CompleteChat = defineComponent({
  name: "completechat",
  data() {
    return {
      receivedMessages: [] as string[],
      sendMessage: null,
      connected: false,
      notifications: 0,
    };
  },
  methods: {
    send() {
      console.log("Send message:" + this.sendMessage);
      if (stompChatClient && stompChatClient.connected) {
        const msg = { content: this.sendMessage, count: this.notifications };
        console.log(JSON.stringify(msg));
        stompChatClient.send("/app/message", JSON.stringify(msg), {});
      }
    },
    connect() {
      this.connectChat();
    },
    connectChat() {
      const socket = new SockJS(process.env.VUE_APP_SERVER_HOST);
      stompChatClient = Stomp.over(socket);
      stompChatClient.connect(
        {},
        (frame) => {
          this.connected = true;
          stompChatClient.subscribe("/topic/chat", (tick) => {
            console.log(tick);
            const message = JSON.parse(tick.body) as Message;
            this.notifications = message.count;
            this.receivedMessages.push(message.content);
          });
          stompChatClient.subscribe("/topic/notification", (tick) => {
            console.log(tick);
            const message = JSON.parse(tick.body);
            this.notifications = message;
          });
        },
        (error) => {
          console.log(error);
          this.connected = false;
        }
      );
    },
    disconnect() {
      if (stompChatClient) {
        stompChatClient.disconnect();
      }
      this.connected = false;
    },
    tickleConnection() {
      this.connected ? this.disconnect() : this.connect();
    },
  },
  mounted() {
    //this.connect();
  },
});

export default CompleteChat;
</script>
<style scoped=""></style>
