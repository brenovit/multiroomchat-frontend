<template>
  <div>
    <img
      class="avatar-md"
      src="img/avatars/avatar-female-5.jpg"
      data-toggle="tooltip"
      data-placement="top"
      title="Keith"
      alt="avatar"
    />
    <div class="text-main">
      <div class="text-group">
        <div class="text typing">
          <div class="wave">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TypingComponent",
});
</script>