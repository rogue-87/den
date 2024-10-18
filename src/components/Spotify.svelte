<script lang="ts">
  import { presenceData } from "../stores/websocket.ts";
  let song = "...";
  let artist = "...";
  let albumArtUrl: string | undefined;
  let trackId: string | undefined;

  $: if ($presenceData && $presenceData.spotify) {
    song = $presenceData.spotify.song;
    artist = $presenceData.spotify.artist;
    albumArtUrl = $presenceData.spotify.album_art_url;
    trackId = $presenceData.spotify.track_id;
  } else {
    song = "...";
    artist = "...";
    albumArtUrl = undefined;
    trackId = undefined;
  }
</script>

<div class="music-log" style="">
  <div class="song-info">
    <div>
      <i class="fa-solid fa-music"></i>
      <div class="song" id="song">{song}</div>
    </div>
    <div>
      <i class="fa-solid fa-user"></i>
      <div class="artist" id="artist">{artist}</div>
    </div>
  </div>
  <div class="song-album">
    {#if trackId !== undefined}
      <div class="album-cover" style="background-image: url({albumArtUrl});">
        <a href={"https://open.spotify.com/track/" + trackId} target="_blank"> </a>
      </div>
    {:else}
      <div class="album-cover"></div>
    {/if}
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
</style>
