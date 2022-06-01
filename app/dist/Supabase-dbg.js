/* eslint-disable no-undef */
sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"], function (BaseController) {
  "use strict";

  return BaseController.extend("dalrae.cap.supabase.fioridemo.Supabase", {
    comps: {},
    
    onInit: function () {
      const { client } = window;
      this.bus = sap.ui.getCore().getEventBus();
      this.cookie(client.auth.session() || {});

      client.auth.onAuthStateChange((event, session) => {
        this.cookie(session || {});
      });

			client.from('dalrae_cap_supabase_chat_channel').on('INSERT', payload => this.bus.publish('chat', 'insert:channel', payload)).subscribe();
			client.from('dalrae_cap_supabase_chat_message').on('INSERT', payload => this.bus.publish('chat', 'insert:message', payload)).subscribe();
    },
    
    login: function (e) {
      this.getView().byId('msg').setVisible(true);
      e.getSource().setVisible(false);

      window.client.auth.signIn({
        email: this.getView().byId('email').getValue(),
      }, {
        redirectTo: window.location.href
      });
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
