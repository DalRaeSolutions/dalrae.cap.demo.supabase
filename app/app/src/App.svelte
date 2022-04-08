<script>
  import "@ui5/webcomponents/dist/BusyIndicator.js";
  import { channels } from "./stores/channels";
	import Layout from '../lib/Layout.svelte';

  export let name;

  // col1list.addEventListener("item-click", function(e) {
  // 	fcl.layout = "TwoColumnsMidExpanded";
  // });

  // col2list.addEventListener("item-click", function(e) {
  // 	fcl.layout = "ThreeColumnsEndExpanded";
  // });

  // closeMidColumn.addEventListener("click", function(e) {
  // 	fcl.layout = "OneColumn";
  // });
  // fullscreenMidColumn.addEventListener("click", function(e) {
  // 	fcl.layout = "MidColumnFullscreen";
  // });

  // fullscreenEndColumn.addEventListener("click", function(e) {
  // 	fcl.layout = "EndColumnFullscreen";
  // });

  // closeEndColumn.addEventListener("click", function(e) {
  // 	fcl.layout = "TwoColumnsMidExpanded";
  // });
</script>

<main>
  {#await channels.init()}
    <ui5-busy-indicator active size="Large"></ui5-busy-indicator>
  {:then}
		<Layout />
  {:catch error}
    <p>Something went wrong: {error.message}</p>
  {/await}
</main>

<style scoped>
  :global(body),
  :global(html) {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    overflow: hidden;
  }

  main {
    min-height: 100vh;
  }
</style>
