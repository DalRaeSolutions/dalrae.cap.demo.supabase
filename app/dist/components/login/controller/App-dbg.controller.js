/* eslint-disable no-undef */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function (BaseController) {
	"use strict";

	return BaseController.extend("dalrae.cap.supabase.fioridemo.components.login.App", {

		onInit: function () {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		},

		login: function (e) {
			this.getView().byId('msg').setVisible(true);
			e.getSource().setVisible(false);
			
			window.client.auth.signIn({
				email: this.getView().byId('email').getValue(),
			}, {
				redirectTo: window.location.href
			});
		}
	});

});