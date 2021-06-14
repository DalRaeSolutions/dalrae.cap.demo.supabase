sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel"],function(e,t){"use strict";return e.extend("dalrae.cap.supabase.fioridemo.controller.App",{comps:{},onInit:function(){this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());this.getView().setModel(new t({loggedIn:false,url:""}));this.cookie(client.auth.session()||{});client.auth.onAuthStateChange((e,t)=>{this.cookie(t||{})})},onBeforeRendering:async function(){const{loggedIn:e,user:t}=await(await fetch("/auth/me",{credentials:"include"})).json();this.getView().getModel().setProperty("/loggedIn",e);this.getView().getModel().setProperty("/url",`https://avatars.dicebear.com/api/human/${t.id||Math.random().toString(16).slice(2)}.svg`)},menu:function(){this.getView().byId("menu").openBy(this.getView().byId("avatar"))},logout:function(){window.client.auth.signOut()},cookie:function(e){fetch("/auth/cookie",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}).then(e=>e.json()).then(()=>{this.onBeforeRendering()}).catch(e=>console.log(e))}})});