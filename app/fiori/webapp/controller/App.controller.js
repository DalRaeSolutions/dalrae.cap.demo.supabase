sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function (BaseController) {
	"use strict";

	return BaseController.extend("dalrae.cap.supabase.fioridemo.controller.App", {

		onInit : function () {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		}
	});

});