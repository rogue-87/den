<script lang="ts">
  import { presenceData } from "../stores/websocket.ts";
  $: spotify = $presenceData.spotify;
  $: isMarquee = spotify?.song && spotify.song.length > 20;
</script>

<div class="music-log" style="">
  <div class="song-info">
    <div class={isMarquee ? "marquee" : ""}>
      <i class="fa-solid fa-music"></i>
      <div class="song" id="song">{spotify?.song ? spotify.song : "..."}</div>
    </div>
    <div class={isMarquee ? "marquee" : ""}>
      <i class="fa-solid fa-user"></i>
      <div class="artist" id="artist">{spotify?.artist ? spotify.artist : "..."}</div>
    </div>
  </div>
  <div class="song-album">
    <div
      class="album-cover"
      style="background-image: url({spotify?.album_art_url ? spotify.album_art_url : '/den/images/nothing.png'});"
    >
      {#if spotify}
        <a href={"https://open.spotify.com/track/" + spotify.track_id} target="_blank"> </a>
      {/if}
    </div>
  </div>
</div>

<style>
  :root {
    --album-size: 150px;
  }

  .music-log {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .song-info {
    overflow-x: hidden;
    text-align: center;
    & > div {
      display: flex;
      gap: 8px;
      line-height: 1.5rem;
      align-items: center;
      white-space: nowrap;

      & > i {
        z-index: 2;
        min-width: 20px;
        min-height: 20px;
        background: var(--bg-clr-1);
      }
    }
  }
  .song-album {
    border: solid 2px var(--border-clr-1);
    border-radius: 8px;
    overflow: hidden;
    height: var(--album-size);
    flex-basis: var(--album-size);

    & a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .album-cover {
    height: inherit;
    background-image: url("/den/images/nothing.png");
    background-size: contain;
    background-position: center;
  }

  @media screen and (320px <= width <= 480px) and (orientation: portrait) {
    .music-log {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .song-info {
      display: flex;
      flex-basis: 50%;
      flex-direction: column;
      justify-content: center;
    }

    .song-album {
      flex-shrink: 0;
    }
  }

  .marquee {
    overflow: hidden;
    box-sizing: border-box;
  }

  .marquee div {
    display: inline-block;
    width: max-content;

    padding-left: 100%;
    /* show the marquee just outside the paragraph */
    will-change: transform;
    animation: marquee 12s linear infinite;
  }

  .marquee div:hover {
    animation-play-state: paused;
  }

  @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .marquee div {
      animation-iteration-count: 1;
      animation-duration: 0.01;
      width: auto;
      padding-left: 0;
    }
  }
</style>
