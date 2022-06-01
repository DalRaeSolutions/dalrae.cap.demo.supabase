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
      const { loggedIn, user } = await $.getJSON("/auth/me");
      this.getView().getModel().setProperty("/loggedIn", loggedIn);
      this.getView()
        .getModel()
        .setProperty("/url", `https://avatars.dicebear.com/api/croodles-neutral/${user.email}.svg`);

      sap.ui.getCore().setModel(this.getView().getModel(), 'user');
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
