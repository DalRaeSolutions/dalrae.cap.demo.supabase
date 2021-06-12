/* eslint-disable no-undef */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("dalrae.cap.supabase.fioridemo.controller.App", {
		comps: {},
		onInit: function () {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			this.getView().setModel(new JSONModel({
				loggedIn: false,
				url: `https://avatars.dicebear.com/api/human/${Math.random().toString(16).slice(2)}.svg`
			}))

			this.cookie(client.auth.session() || {})
			client.auth.onAuthStateChange((event, session) => {
				this.cookie(session || {});
			})
		},
		onBeforeRendering: async function () {
			const { loggedIn } = await (await fetch('/auth/me')).json();
			this.getView().getModel().setProperty('/loggedIn', loggedIn);
		},
		menu: function () {
			this.getView().byId('menu').openBy(this.getView().byId('avatar'))
		},
		logout: function () {
			window.client.auth.signOut();
		},
		cookie: function (session) {
			fetch('/auth/cookie', {
				method: "POST",
				body: JSON.stringify(session),
				headers: { "Content-type": "application/json; charset=UTF-8" }
			})
				.then(response => response.json())
				.then(() => {
					this.onBeforeRendering()
				})
				.catch(err => console.log(err));
		}
	});

});