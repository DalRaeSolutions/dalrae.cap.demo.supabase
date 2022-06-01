/* eslint-disable no-undef */

sap.ui.define([
  "sap/ui/model/json/JSONModel",
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator",
  'sap/ui/model/Sorter'
], function (JSONModel, Controller, Filter, FilterOperator, Sorter) {
  "use strict";

  return Controller.extend("dalrae.cap.supabase.fioridemo.components.chat.controller.Master", {
    unread: {},
    onInit: function () {
      this.oRouter = this.getOwnerComponent().getRouter();
      this._bDescendingSort = false;
    },
    onListItemPress: function (oEvent) {
      var oNextUIState = this.getOwnerComponent().getHelper().getNextUIState(1),
        productPath = oEvent.getSource().getSelectedItem().getBindingContext().getPath(),
        channel = productPath.split("/").slice(-1).pop();

      this.oRouter.navTo("detail", { layout: oNextUIState.layout, channel: channel });
    },
    onSearch: function (oEvent) {
      var oTableSearchState = [],
        sQuery = oEvent.getParameter("query");

      if (sQuery && sQuery.length > 0) {
        oTableSearchState = [new Filter("name", FilterOperator.Contains, sQuery)];
      }

      this.getView().byId("productsTable").getBinding("items").filter(oTableSearchState, "Application");
    },

    onAdd: function () {
      if (!this.popup) {
        this.popup = new sap.m.Dialog({
          title: "Create a new channel",
          styleClass: "sapUiContentPadding",
          // contentWidth: "550px",
          // contentHeight: "300px",
          content: [new sap.m.Input({
            class: "sapUiSmallMargin"
          })],
          beginButton: new sap.m.Button({
            type: sap.m.ButtonType.Emphasized,
            text: "OK",
            press: function () {
              this.popup.close();
            }.bind(this)
          }),
          endButton: new sap.m.Button({
            text: "Close",
            press: function () {
              this.popup.close();
            }
          })
        });
      }
      this.popup.open();
    },

    onSort: function () {
      this._bDescendingSort = !this._bDescendingSort;
      var oView = this.getView(),
        oTable = oView.byId("productsTable"),
        oBinding = oTable.getBinding("items"),
        oSorter = new Sorter("name", this._bDescendingSort);

      oBinding.sort(oSorter);
    },

    countFormatter: function (id) {
      return this.unread[id] || 0;
    },

    countVisible: function (id) {
      return this.unread[id] && this.unread[id] > 0;
    }
  });
});
