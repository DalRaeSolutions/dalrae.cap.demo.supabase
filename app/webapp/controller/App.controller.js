/* eslint-disable no-undef */
sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"], function (BaseController, JSONModel) {
  "use strict";

  return BaseController.extend("dalrae.cap.supabase.fioridemo.controller.App", {
    comps: {},
    onInit: function () {
      this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
      this.getView().setModel(
        new JSONModel({
          loggedIn: false,
          url: "",
          notificationsNumber: 0,
          notifications: [],
        })
      );

      this.cookie(client.auth.session() || {});
      client.auth.onAuthStateChange((event, session) => {
        this.cookie(session || {});
      });

      client
        .from("*")
        .on("*", (payload) => {
					const model = this.getView().getModel();
					const notifications = model.getProperty("/notifications");
          notifications.push(payload);
          model.setProperty("/notifications", notifications);
          model.setProperty("/notificationsNumber", notifications.length);
        })
        .subscribe();
    },
    onBeforeRendering: async function () {
      const { loggedIn, user } = await $.getJSON("/auth/me");
      this.getView().getModel().setProperty("/loggedIn", loggedIn);
      this.getView()
        .getModel()
        .setProperty("/url", `https://avatars.dicebear.com/api/human/${user.id || Math.random().toString(16).slice(2)}.svg`);
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
    },
    logout: function () {
      window.client.auth.signOut();
    },
    github: function () {
      window.open("https://github.com/DalRaeSolutions/dalrae.cap.demo.supabase", "_blank");
    },
    cookie: function (session) {
      fetch("/auth/cookie", {
        method: "POST",
        body: JSON.stringify(session),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .then(() => {
          this.onBeforeRendering();
        })
        .catch((err) => console.log(err));
    },
  });
});
