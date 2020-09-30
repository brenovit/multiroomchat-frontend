<template>
  <div class="no-messages request">
    <a href="#"
      ><img
        class="avatar-xl"
        src="img/avatars/avatar-female-6.jpg"
        data-toggle="tooltip"
        data-placement="top"
        title="Louis"
        alt="avatar"
    /></a>
    <h5>
      Louis Martinez would like to add you as a contact.
      <span>Hi Keith, I'd like to add you as a contact.</span>
    </h5>
    <div class="options">
      <button class="btn button">
        <i class="material-icons">check</i>
      </button>
      <button class="btn button">
        <i class="material-icons">close</i>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

const AddContactComponent = defineComponent({
  name: "addcontatccomponent",
});

export default AddContactComponent;
</script>