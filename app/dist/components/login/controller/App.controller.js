sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("dalrae.cap.supabase.fioridemo.components.login.App",{onInit:function(){this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass())},login:function(e){this.getView().byId("msg").setVisible(true);e.getSource().setVisible(false);window.client.auth.signIn({email:this.getView().byId("email").getValue()},{redirectTo:window.location.href})}})});