<script lang="ts">
  import { presenceData } from "../stores/websocket.ts";
  let status: "offline" | "online" | "loading";

  $: {
    if ($presenceData?.discord_status === undefined) status = "loading";
    else if ($presenceData.discord_status === "offline") status = "offline";
    else status = "online";
  }
</script>

<div class="status">
  {#if status === "loading"}
    <span id="statusName">{status}</span>
    <i id="statusIcon" class="fa-solid fa-spinner fa-spin-pulse" style=""></i>
  {:else if status === "offline"}
    <span id="statusName">{status}</span>
    <i id="statusIcon" class="fa-solid fa-circle" style="color: gray;"></i>
  {:else if status === "online"}
    <span id="statusName">{status}</span>
    <i id="statusIcon" class="fa-solid fa-circle" style="color: rgb(35, 165, 90);"></i>
  {/if}
</div>
