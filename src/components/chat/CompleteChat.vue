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
                <th>Greetings</th>
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
}

const CompleteChat = defineComponent({
  name: "completechat",
  data() {
    return {
      receivedMessages: [] as string[],
      sendMessage: null,
      connected: false,
      stompClient: {} as Client,
    };
  },
  methods: {
    send() {
      console.log("Send message:" + this.sendMessage);
      if (this.stompClient && this.stompClient.connected) {
        const msg = { name: this.sendMessage };
        console.log(JSON.stringify(msg));
        this.stompClient.send("/app/chat", JSON.stringify(msg), {});
      }
    },
    connect() {
      const socket = new SockJS("http://localhost:8081/ws");
      this.stompClient = Stomp.over(socket);
      this.stompClient.connect(
        {},
        (frame) => {
          this.connected = true;
          console.log(frame);
          this.stompClient.subscribe("/app/topic/chat", (tick) => {
            console.log(tick);
            const message = JSON.parse(tick.body) as Message;
            this.receivedMessages.push(message.content);
          });
        },
        (error) => {
          console.log(error);
          this.connected = false;
        }
      );
    },
    disconnect() {
      if (this.stompClient) {
        this.stompClient.disconnect();
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
