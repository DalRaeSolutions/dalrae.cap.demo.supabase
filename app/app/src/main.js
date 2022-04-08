import App from './App.svelte';
// import "@ui5/webcomponents-icons/dist/AllIcons.js"
const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;