/* eslint-disable no-undef */
sap.ui.define([
	"dalrae/cap/supabase/fioridemo/Supabase"
], function (BaseController) {
	"use strict";

	return BaseController.extend("dalrae.cap.supabase.fioridemo.components.login.App", {

		onInit: function () {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		}
	});

});