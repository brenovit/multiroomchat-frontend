<template>
  <div>
    <div class="search">
      <form class="form-inline position-relative">
        <input
          type="search"
          class="form-control"
          id="conversations"
          placeholder="Search for conversations..."
        />
        <button type="button" class="btn btn-link loop">
          <i class="material-icons">search</i>
        </button>
      </form>
      <button
        class="btn create"
        data-toggle="modal"
        data-target="#startnewchat"
      >
        <i class="material-icons">create</i>
      </button>
    </div>
    <div class="list-group sort">
      <button
        class="btn filterDiscussionsBtn active show"
        data-toggle="list"
        data-filter="all"
      >
        All
      </button>
      <button
        class="btn filterDiscussionsBtn"
        data-toggle="list"
        data-filter="read"
      >
        Read
      </button>
      <button
        class="btn filterDiscussionsBtn"
        data-toggle="list"
        data-filter="unread"
      >
        Unread
      </button>
    </div>
    <div class="discussions">
      <h1>Discussions</h1>
      <div class="list-group" id="chats" role="tablist">
        <a
          v-for="discussion in discussions"
          :key="discussion"
          href="#list-chat"
          class="filterDiscussions all unread single active"
          id="list-chat-list"
          data-toggle="list"
          role="tab"
        >
          <img
            class="avatar-md"
            :src="'img/avatars/' + discussion.photo"
            data-toggle="tooltip"
            data-placement="top"
            :title="discussion.name"
            alt="avatar"
          />
          <div class="status">
            <i class="material-icons" :class="discussion.status"
              >fiber_manual_record</i
            >
          </div>
          <div
            class="new"
            :class="{
              'bg-red': discussion.messages >= 9,
              'bg-yellow': discussion.messages >= 5 && discussion.messages <= 8,
              'bg-green': discussion.messages >= 1 && discussion.messages <= 4,
            }"
          >
            <span>+{{ discussion.messages }}</span>
          </div>
          <div class="data">
            <h5>{{ discussion.name }}</h5>
            <span>{{ discussion.last_message_date }}</span>
            <p>
              {{ discussion.last_message }}
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import fakedata from "@/assets/fakedb/discussions-data.json";

interface Discussion {
  id: { $oid: string };
  name: string;
  messages: number;
  last_message: string;
  status: string;
  photo: string;
  last_message_date: string;
}

const DiscussionListComponent = defineComponent({
  name: "discussionlistcomponent",
  data() {
    return {
      discussions: [] as Discussion[],
    };
  },
  mounted() {
    fakedata.forEach((element: Discussion) => {
      this.discussions.push(element as Discussion);
    });
  },
});
export default DiscussionListComponent;
</script>