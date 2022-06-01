/* eslint-disable no-undef */

sap.ui.define([
  "dalrae/cap/supabase/fioridemo/Supabase"
], function (Controller) {
  "use strict";

  return Controller.extend("dalrae.cap.supabase.fioridemo.components.chat.controller.Master", {
    onInit: function () {
      const oExitButton = this.getView().byId("exitFullScreenBtn");
      const oEnterButton = this.getView().byId("enterFullScreenBtn");

      this.oRouter = this.getOwnerComponent().getRouter();
      this.oModel = this.getOwnerComponent().getModel('layout');
      this.bus = sap.ui.getCore().getEventBus();
      this.list = this.getView().byId('chatlist');
      this.getView().setModel(sap.ui.getCore().getModel('user'), 'user');
      this.oRouter.getRoute("detail").attachPatternMatched(this._onChannelMatched, this);

      [oExitButton, oEnterButton].forEach(function (oButton) {
        oButton.addEventDelegate({
          onAfterRendering: function () {
            if (this.bFocusFullScreenButton) {
              this.bFocusFullScreenButton = false;
              oButton.focus();
            }
          }.bind(this)
        });
      }, this);

      
      this.bus.subscribe('chat', 'insert:message', () => this.list.getModel().refresh())
    },
    refreshList: function () {
        console.log('refreshing list')
        .getModel().refresh();
    },
    handleFullScreen: function () {
      this.bFocusFullScreenButton = true;
      var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/midColumn/fullScreen");
      this.oRouter.navTo("detail", { layout: sNextLayout, channel: this._channel });
    },
    handleExitFullScreen: function () {
      this.bFocusFullScreenButton = true;
      var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/midColumn/exitFullScreen");
      this.oRouter.navTo("detail", { layout: sNextLayout, channel: this._channel });
    },
    handleClose: function () {
      var sNextLayout = this.oModel.getProperty("/actionButtonsInfo/midColumn/closeColumn");
      this.oRouter.navTo("master", { layout: sNextLayout });
    },
    onPost: async function () {
      // const { channel_ID, message } = 
      const channel_ID = this.getView().getBindingContext().getObject().ID;
      const message = arguments[0].getParameter('value')

      await fetch('/chat/createMessage', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ channel_ID, message })
      });
    },
    _onChannelMatched: function (oEvent) {
      this._channel = oEvent.getParameter("arguments").channel || this._channel || "0";

      this.getView().bindElement({
        path: `/${this._channel}`
      });
    }
  });
});
