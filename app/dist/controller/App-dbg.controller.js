/* eslint-disable no-undef */
sap.ui.define(["dalrae/cap/supabase/fioridemo/Supabase", "sap/ui/model/json/JSONModel"], function (BaseController, JSONModel) {
  "use strict";

  return BaseController.extend("dalrae.cap.supabase.fioridemo.controller.App", {
    comps: {},
    onInit: function () {
      BaseController.prototype.onInit.apply(this, arguments);
      this.getView().setModel(
        new JSONModel({
          loggedIn: false,
          url: "",
          notificationsNumber: 0,
          notifications: [],
        })
      );
    },
    onBeforeRendering: async function () {
      this._switch();
    },
    _switch: async function () {
      const user = await (await fetch('/auth/me')).json();
      const container = this.getView().byId('container');
      this.getView().getModel().setProperty("/loggedIn", !!user?.email);

      if (user?.email) {
        this.getView()
          .getModel()
          .setProperty("/url", `https://avatars.dicebear.com/api/croodles-neutral/${user?.email}.svg`);
  
        sap.ui.getCore().setModel(this.getView().getModel(), 'user');

        this._getComponent('chatComponent').then(c => container.setComponent(c))
      } else {
        this._getComponent('loginComponent').then(c => container.setComponent(c))
      }
    },
    _getComponent: function (usage) {
      return new Promise((resolve, reject) => {
        this.getOwnerComponent().createComponent({
          usage,
          async: true
        })
          .then(component => resolve(component))
          .catch(error => reject(error));
      })      
    },
    menu: function () {
      this.getView().byId("menu").openBy(this.getView().byId("avatar"));
    },
    onNavButtonPressed: function () {
      window.history.back();
    },
    onNotificationsPressed: function () {
      this.byId("notifications");
    },
    onItemClose: function (oEvent) {
      var oItem = oEvent.getSource(),
        oList = oItem.getParent();

      oList.removeItem(oItem);
      MessageToast.show("Item Closed: " + oItem.getTitle());
    }
  });
});
