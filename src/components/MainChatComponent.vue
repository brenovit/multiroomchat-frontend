<template>
  <main>
    <div class="layout">
      <!-- Start of Navigation -->
      <div class="navigation">
        <div class="container">
          <div class="inside">
            <div class="nav nav-tab menu">
              <button class="btn">
                <img
                  class="avatar-xl"
                  src="img/avatars/avatar-male-1.jpg"
                  alt="avatar"
                />
              </button>
              <a href="#members" data-toggle="tab"
                ><i class="material-icons">account_circle</i></a
              >
              <a href="#discussions" data-toggle="tab" class="active"
                ><i class="material-icons active">chat_bubble_outline</i></a
              >
              <a href="#notifications" data-toggle="tab" class="f-grow1"
                ><i class="material-icons">notifications_none</i></a
              >
              <a href="#settings" data-toggle="tab"
                ><i class="material-icons">settings</i></a
              >
              <router-link to="/signin">
                <button class="btn power" onclick="visitPage();">
                  <i class="material-icons">power_settings_new</i>
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- End of Navigation -->
      <!-- Start of Sidebar -->
      <div class="sidebar" id="sidebar">
        <div class="container">
          <div class="col-md-12">
            <div class="tab-content">
              <!-- Start of Contacts -->
              <div class="tab-pane fade" id="members">
                <contact-list-component></contact-list-component>
              </div>
              <!-- End of Contacts -->
              <!-- Start of Discussions -->
              <div id="discussions" class="tab-pane fade active show">
                <discussion-list-component></discussion-list-component>
              </div>
              <!-- End of Discussions -->
              <!-- Start of Notifications -->
              <div id="notifications" class="tab-pane fade">
                <notification-list-component></notification-list-component>
              </div>
              <!-- End of Notifications -->
              <!-- Start of Settings -->
              <div class="tab-pane fade" id="settings">
                <settings-menu-component></settings-menu-component>
              </div>
              <!-- End of Settings -->
            </div>
          </div>
        </div>
      </div>
      <!-- End of Sidebar -->
      <!-- Start of Add Friends -->
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <add-contact-modal-component></add-contact-modal-component>
      </div>
      <!-- End of Add Friends -->
      <!-- Start of Create Chat -->
      <div
        class="modal fade"
        id="startnewchat"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <start-new-chat-modal-component></start-new-chat-modal-component>
      </div>
      <!-- End of Create Chat -->
      <div class="main">
        <div class="tab-content" id="nav-tabContent">
          <!-- Start of Babble -->
          <div
            class="babble tab-pane fade active show"
            id="list-chat"
            role="tabpanel"
            aria-labelledby="list-chat-list"
          >
            <chat-component></chat-component>
          </div>
          <!-- End of Babble -->
        </div>
      </div>
    </div>
    <!-- Layout -->
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import ContactListComponent from "./ContactListComponent.vue";
import NotificationListComponent from "./NotificationListComponent.vue";
import DiscussionListComponent from "./discussion/DiscussionListComponent.vue";
import SettingsMenuComponent from "./SettingsMenuComponent.vue";
import ChatComponent from "./chat/ChatComponent.vue";
import StartNewChatModalComponent from "./discussion/StartNewChatModalComponent.vue";

export default defineComponent({
  name: "mainchat",
  components: {
    ContactListComponent,
    NotificationListComponent,
    DiscussionListComponent,
    SettingsMenuComponent,
    ChatComponent,
    StartNewChatModalComponent,
  },
});
</script>
