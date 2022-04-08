<script>
  import "@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js";
  import "@ui5/webcomponents-fiori/dist/ShellBar.js";
  import "@ui5/webcomponents-fiori/dist/NotificationListItem.js";
  import "@ui5/webcomponents/dist/TextArea.js";
  import "@ui5/webcomponents-fiori/dist/Bar.js";
  import "@ui5/webcomponents/dist/Button.js";
  import "@ui5/webcomponents-icons/dist/full-screen.js";
  import "@ui5/webcomponents-icons/dist/product.js";
  import "@ui5/webcomponents-icons/dist/add.js";
  import "@ui5/webcomponents-icons/dist/action-settings.js";
  import "@ui5/webcomponents-icons/dist/cancel.js";
  import "@ui5/webcomponents-icons/dist/document.js";
  import "@ui5/webcomponents-icons/dist/home.js";

  import { channels } from "../src/stores/channels.js";
  import { messages, getMessages, createMessage } from "../src/stores/messages.js";

  $: layout = "";
  $: channel = {};
  $: message = "lol";

  const setMidColumn = async (e) => {
    channel = $channels.find((c) => c.name === e?.detail?.item?.id);
    await getMessages(channel.ID);
    layout = "TwoColumnsMidExpanded";
  };

  const postMessage = async (e) => {
    createMessage({ channel_ID: channel.ID, message });
    message = "";
  };
</script>

<section>
  <ui5-flexible-column-layout id="fcl" {layout}>
    <div slot="startColumn">
      <ui5-shellbar primary-title="re>=CAP chat" />

      <ui5-list id="col1list" header-text="Channels" on:item-click={setMidColumn}>
        <ui5-li-groupheader><ui5-button design="Transparent" icon="add" /></ui5-li-groupheader>
        {#each $channels as channel}
          <ui5-li icon="document" id={channel.name}>
            {channel.name}
          </ui5-li>
        {/each}
      </ui5-list>
    </div>

    <div id="body" slot="midColumn">
      <ui5-bar design="Header">
        <ui5-button icon="home" tooltip="Go home" design="Transparent" slot="startContent" />
        <ui5-label>{channel.name}</ui5-label>
        <ui5-button icon="cancel" tooltip="Go to settings" slot="endContent" />
      </ui5-bar>

      <div id="mid">
        <ui5-list id="msglist">
          {#await messages}
            <ui5-busy-indicator active size="Large" />
          {:then}
            {#each $messages as message}
              <ui5-li-notification title-text={message.createdBy + " says"}>
                {message.message}
                <ui5-avatar size="XS" slot="avatar">
                  <img src="https://i.pravatar.cc/50" alt="" />
                </ui5-avatar>
                <span slot="footnotes">{new Date(message.createdAt).toLocaleString()}</span>
              </ui5-li-notification>
            {/each}
          {:catch error}
            <p>Something went wrong: {error.message}</p>
          {/await}
        </ui5-list>
        <div id="chatbox">
          <textarea placeholder="Chat" bind:value={message} />
          <ui5-button on:click={postMessage}>chat</ui5-button>
        </div>
      </div>
    </div>
  </ui5-flexible-column-layout>
</section>

<style scoped>
  ui5-flexible-column-layout {
    width: 100%;
    min-height: 100vh;
  }

  #msglist {
    height: calc(100vh - 104px);
    overflow: auto;
    flex-direction: column-reverse;
    display: flex;
  }

  #chatbox {
    display: flex;
    background-color: white;
    position: sticky;
    bottom: 0px;
    width: 100%;
    border-top: 1px solid var(--sapIllus_BackgroundColor);
    justify-content: space-between;
    align-items: center;
  }

  #chatbox ui5-button {
    margin-right: 1em;
    width: 4rem;
  }

  #chatbox textarea {
    border: 0px;
    outline: none;
    resize: none;
    box-sizing: none;
    width: 100%;
    color: var(--sapTextColor);
    font-size: var(--sapFontSize);
  }

  #mid {
    overflow-y: auto;
    height: 100%;
  }
</style>
