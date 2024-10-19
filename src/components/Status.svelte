<script lang="ts">
  import { presenceData } from "../stores/websocket.ts";
</script>

<div class="status">
  {#if $presenceData.discord_status === "offline"}
    <span id="statusName">offline</span>
    <i id="statusIcon" class="fa-solid fa-circle" style="color: gray;"></i>
  {:else if $presenceData.discord_status === "online" || $presenceData.discord_status === "dnd" || $presenceData.discord_status === "idle"}
    <span id="statusName">online</span>
    <i id="statusIcon" class="fa-solid fa-circle" style="color: rgb(35, 165, 90);"></i>
  {:else}
    <span id="statusName">loading</span>
    <i id="statusIcon" class="fa-solid fa-spinner fa-spin-pulse" style=""></i>
  {/if}
</div>
