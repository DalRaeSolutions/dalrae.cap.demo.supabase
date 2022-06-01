//@ui5-bundle dalrae/cap/supabase/fioridemo/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"dalrae/cap/supabase/fioridemo/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/core/EventBus"],function(t){"use strict";return t.extend("dalrae.cap.supabase.fioridemo.Component",{metadata:{manifest:"json"},init:function(){t.prototype.init.apply(this,arguments)},destroy:function(){},getContentDensityClass:function(){this._sContentDensityClass="sapUiSizeCompact";return this._sContentDensityClass}})});
},
	"dalrae/cap/supabase/fioridemo/Supabase.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel"],function(e){"use strict";return e.extend("dalrae.cap.supabase.fioridemo.Supabase",{comps:{},onInit:function(){const{client:e}=window;this.bus=sap.ui.getCore().getEventBus();e.auth.onAuthStateChange(t=>{if(t==="SIGNED_IN"){e.from("dalrae_cap_supabase_chat_channel").on("INSERT",e=>this.bus.publish("chat","insert:channel",e)).subscribe();e.from("dalrae_cap_supabase_chat_message").on("INSERT",e=>this.bus.publish("chat","insert:message",e)).subscribe()}this._switch()})},login:function(e){this.getView().byId("msg").setVisible(true);e.getSource().setVisible(false);window.client.auth.signIn({email:this.getView().byId("email").getValue()},{redirectTo:window.location.href})},logout:function(){window.client.auth.signOut()},github:function(){window.open("https://github.com/DalRaeSolutions/dalrae.cap.demo.supabase","_blank")}})});
},
	"dalrae/cap/supabase/fioridemo/components/chat/Component.js":function(){sap.ui.define(["sap/base/util/UriParameters","sap/ui/core/UIComponent","sap/f/library","sap/f/FlexibleColumnLayoutSemanticHelper"],function(t,e,n,o){"use strict";var a=n.LayoutType;return e.extend("dalrae.cap.supabase.fioridemo.components.chat.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize()},destroy:function(){},getHelper:function(){var e=this.getRootControl().byId("fcl"),n=t.fromQuery(location.search),i={defaultTwoColumnLayoutType:a.TwoColumnsMidExpanded,defaultThreeColumnLayoutType:a.ThreeColumnsMidExpanded,mode:n.get("mode"),initialColumnsCount:n.get("initial"),maxColumnsCount:n.get("max")};return o.getInstanceFor(e,i)},getContentDensityClass:function(){this._sContentDensityClass="sapUiSizeCompact";return this._sContentDensityClass}})});
},
	"dalrae/cap/supabase/fioridemo/components/chat/controller/App.controller.js":function(){sap.ui.define(["dalrae/cap/supabase/fioridemo/Supabase"],function(t){"use strict";return t.extend("dalrae.cap.supabase.fioridemo.components.chat.App",{onInit:function(){this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());this.oRouter=this.getOwnerComponent().getRouter();this.oRouter.attachRouteMatched(this.onRouteMatched,this);this.oRouter.attachBeforeRouteMatched(this.onBeforeRouteMatched,this);this.bus=sap.ui.getCore().getEventBus()},onBeforeRouteMatched:function(t){var e=this.getOwnerComponent().getModel("layout");var o=t.getParameters().arguments.layout;if(!o){var a=this.getOwnerComponent().getHelper().getNextUIState(0);o=a.layout}if(o){e.setProperty("/layout",o)}},onRouteMatched:function(t){var e=t.getParameter("name"),o=t.getParameter("arguments");this._updateUIElements();this.currentRouteName=e;this.channel=o.channel},onStateChanged:function(t){var e=t.getParameter("isNavigationArrow"),o=t.getParameter("layout");this._updateUIElements();if(e){this.oRouter.navTo(this.currentRouteName,{layout:o,channel:this.channel},true)}},_updateUIElements:function(){var t=this.getOwnerComponent().getModel("layout");var e=this.getOwnerComponent().getHelper().getCurrentUIState();t.setData(e)},handleBackButtonPressed:function(){window.history.go(-1)},onExit:function(){this.oRouter.detachRouteMatched(this.onRouteMatched,this);this.oRouter.detachBeforeRouteMatched(this.onBeforeRouteMatched,this)}})});
},
	"dalrae/cap/supabase/fioridemo/components/chat/controller/Detail.controller.js":function(){sap.ui.define(["dalrae/cap/supabase/fioridemo/Supabase"],function(e){"use strict";return e.extend("dalrae.cap.supabase.fioridemo.components.chat.controller.Master",{onInit:function(){const e=this.getView().byId("exitFullScreenBtn");const t=this.getView().byId("enterFullScreenBtn");this.oRouter=this.getOwnerComponent().getRouter();this.oModel=this.getOwnerComponent().getModel("layout");this.bus=sap.ui.getCore().getEventBus();this.list=this.getView().byId("chatlist");this.getView().setModel(sap.ui.getCore().getModel("user"),"user");this.oRouter.getRoute("detail").attachPatternMatched(this._onChannelMatched,this);[e,t].forEach(function(e){e.addEventDelegate({onAfterRendering:function(){if(this.bFocusFullScreenButton){this.bFocusFullScreenButton=false;e.focus()}}.bind(this)})},this);this.bus.subscribe("chat","insert:message",()=>this.list.getModel().refresh())},refreshList:function(){console.log("refreshing list").getModel().refresh()},handleFullScreen:function(){this.bFocusFullScreenButton=true;var e=this.oModel.getProperty("/actionButtonsInfo/midColumn/fullScreen");this.oRouter.navTo("detail",{layout:e,channel:this._channel})},handleExitFullScreen:function(){this.bFocusFullScreenButton=true;var e=this.oModel.getProperty("/actionButtonsInfo/midColumn/exitFullScreen");this.oRouter.navTo("detail",{layout:e,channel:this._channel})},handleClose:function(){var e=this.oModel.getProperty("/actionButtonsInfo/midColumn/closeColumn");this.oRouter.navTo("master",{layout:e})},onPost:async function(){const e=this.getView().getBindingContext().getObject().ID;const t=arguments[0].getParameter("value");await fetch("/chat/createMessage",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({channel_ID:e,message:t})})},_onChannelMatched:function(e){this._channel=e.getParameter("arguments").channel||this._channel||"0";this.getView().bindElement({path:`/${this._channel}`})}})});
},
	"dalrae/cap/supabase/fioridemo/components/chat/controller/Master.controller.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/core/mvc/Controller","sap/ui/model/Filter","sap/ui/model/FilterOperator","sap/ui/model/Sorter"],function(t,e,n,i,o){"use strict";return e.extend("dalrae.cap.supabase.fioridemo.components.chat.controller.Master",{unread:{},onInit:function(){this.oRouter=this.getOwnerComponent().getRouter();this._bDescendingSort=false},onListItemPress:function(t){var e=this.getOwnerComponent().getHelper().getNextUIState(1),n=t.getSource().getSelectedItem().getBindingContext().getPath(),i=n.split("/").slice(-1).pop();this.oRouter.navTo("detail",{layout:e.layout,channel:i})},onSearch:function(t){var e=[],o=t.getParameter("query");if(o&&o.length>0){e=[new n("name",i.Contains,o)]}this.getView().byId("productsTable").getBinding("items").filter(e,"Application")},onAdd:function(){if(!this.popup){this.popup=new sap.m.Dialog({title:"Create a new channel",styleClass:"sapUiContentPadding",content:[new sap.m.Input({class:"sapUiSmallMargin"})],beginButton:new sap.m.Button({type:sap.m.ButtonType.Emphasized,text:"OK",press:function(){this.popup.close()}.bind(this)}),endButton:new sap.m.Button({text:"Close",press:function(){this.popup.close()}})})}this.popup.open()},onSort:function(){this._bDescendingSort=!this._bDescendingSort;var t=this.getView(),e=t.byId("productsTable"),n=e.getBinding("items"),i=new o("name",this._bDescendingSort);n.sort(i)},countFormatter:function(t){return this.unread[t]||0},countVisible:function(t){return this.unread[t]&&this.unread[t]>0}})});
},
	"dalrae/cap/supabase/fioridemo/components/chat/i18n/i18n.properties":'appTitle=Fiori Demo\nappDescription=Fiori Demo',
	"dalrae/cap/supabase/fioridemo/components/chat/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"dalrae.cap.supabase.fioridemo.components.chat","type":"application","i18n":"i18n/i18n.properties","title":"{{appTitle}}","description":"{{appDescription}}","applicationVersion":{"version":"1.0.0"},"dataSources":{"mainService":{"uri":"/chat/","type":"OData","settings":{"odataVersion":"4.0"}}},"resources":"resources.json","sourceTemplate":{"id":"sap.ui.ui5-template-plugin.1worklist","version":"1.89.0"}},"sap.ui":{"technology":"UI5","icons":{"icon":"sap-icon://task","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"dalrae.cap.supabase.fioridemo.components.chat.view.App","type":"XML","async":true,"id":"fcl"},"dependencies":{"minUI5Version":"1.98.0","libs":{"sap.ui.core":{},"sap.m":{},"sap.f":{},"sap.tnt":{},"sap.ui.layout":{},"sap.uxap":{},"sap.collaboration":{"lazy":true}}},"contentDensities":{"compact":true,"cozy":true},"resources":{"css":[{"uri":"css/style.css","id":"style"}]},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"dalrae.cap.supabase.fioridemo.components.chat.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"layout":{"type":"sap.ui.model.json.JSONModel"}},"config":{"fullWidth":true},"routing":{"config":{"routerClass":"sap.f.routing.Router","type":"View","viewType":"XML","path":"dalrae.cap.supabase.fioridemo.components.chat.view","controlId":"fcl","transition":"slide","bypassed":{},"async":true},"routes":[{"pattern":"page2","name":"page2","target":"page2","layout":"EndColumnFullScreen"},{"pattern":":layout:","name":"master","target":["master"]},{"pattern":"detail/{channel}/{layout}","name":"detail","target":["master","detail"]}],"targets":{"master":{"name":"Master","controlAggregation":"beginColumnPages"},"detail":{"name":"Detail","controlAggregation":"midColumnPages"},"detailDetail":{"name":"DetailDetail","controlAggregation":"endColumnPages"},"page2":{"name":"AboutPage","controlAggregation":"endColumnPages"}}},"services":{}}}',
	"dalrae/cap/supabase/fioridemo/components/chat/view/App.view.xml":'<mvc:View controllerName="dalrae.cap.supabase.fioridemo.components.chat.controller.App" displayBlock="true"\n\txmlns="sap.m"\n\theight="100%"\n\txmlns:core="sap.ui.core"\n\txmlns:f="sap.f"\n\txmlns:mvc="sap.ui.core.mvc"><Page showHeader="false" ><f:FlexibleColumnLayout id="fcl" stateChange="onStateChanged" layout="{layout>/layout}" backgroundDesign="Solid"/></Page></mvc:View>',
	"dalrae/cap/supabase/fioridemo/components/chat/view/Detail.view.xml":'<mvc:View displayBlock="true" controllerName="dalrae.cap.supabase.fioridemo.components.chat.controller.Detail" height="100%"\n  xmlns="sap.m"\n  xmlns:f="sap.f"\n  xmlns:core="sap.ui.core"\n  xmlns:mvc="sap.ui.core.mvc"><f:DynamicPage id="dynamicPageId" toggleHeaderOnTitleClick="false"><f:title><f:DynamicPageTitle><f:heading><Title text="{name}"/></f:heading><f:navigationActions><Button id="enterFullScreenBtn" icon="sap-icon://full-screen" type="Transparent" press="handleFullScreen" /><Button id="exitFullScreenBtn" icon="sap-icon://exit-full-screen" type="Transparent" press="handleExitFullScreen"/><Button icon="sap-icon://decline" type="Transparent" press="handleClose"/></f:navigationActions></f:DynamicPageTitle></f:title><f:content><VBox><FeedInput post="onPost" icon="{user>/url}" class="sapUiSmallMarginTopBottom" /><List id="chatlist" items="{\n            path: \'messages\',\n            mode : \'OneTime\', \n            targetType : \'any\',\n            sorter: [{\n              path: \'createdAt\', \n                descending: \'true\'           \n            }]}"><layoutData><FlexItemData maxWidth="100%" /></layoutData><items><FeedListItem sender="{createdBy}" icon="{= \'https://avatars.dicebear.com/api/croodles-neutral/\' + ${createdBy} + \'.svg\' }" iconDensityAware="true" timestamp="{createdAt}" text="{message}" convertLinksToAnchorTags="All"/></items></List></VBox></f:content></f:DynamicPage></mvc:View>',
	"dalrae/cap/supabase/fioridemo/components/chat/view/Master.view.xml":'<mvc:View displayBlock="true" controllerName="dalrae.cap.supabase.fioridemo.components.chat.controller.Master" height="100%"\n  xmlns="sap.m"\n  xmlns:f="sap.f"\n  xmlns:core="sap.ui.core"\n  xmlns:tnt="sap.tnt"\n  xmlns:mvc="sap.ui.core.mvc"><f:DynamicPage id="dynamicPageId" toggleHeaderOnTitleClick="false"><f:title><f:DynamicPageTitle><f:heading><Title text="Channels ({/Channels/$count})"/></f:heading></f:DynamicPageTitle></f:title><f:content><Table id="productsTable" mode="SingleSelectMaster" itemPress="onListItemPress" inset="false" items="{\n\t\t\t\t\tpath: \'/Channels\',\n\t\t\t\t\tsorter: {\n\t\t\t\t\t\tpath: \'name\'\n\t\t\t\t\t}\n\t\t\t\t}" class="sapFDynamicPageAlignContent" width="auto"><headerToolbar><OverflowToolbar><ToolbarSpacer/><SearchField search="onSearch" width="17.5rem"/><OverflowToolbarButton icon="sap-icon://add" type="Transparent" press="onAdd"/><OverflowToolbarButton icon="sap-icon://sort" type="Transparent" press="onSort"/></OverflowToolbar></headerToolbar><columns><Column width="6em"><Text text="" /></Column><Column><Text text="Channel" /></Column></columns><items><ColumnListItem type="Navigation"><cells><Avatar src="{= \'https://avatars.dicebear.com/api/croodles-neutral/\' + ${createdBy} + \'.svg\' }" class="sapUiSmallMarginBegin" /><ObjectIdentifier title="{name}" text="{createdAt}" /></cells></ColumnListItem></items></Table></f:content><f:footer><OverflowToolbar><ToolbarSpacer/><Button type="Accept" text="Accept"/><Button type="Reject" text="Reject"/></OverflowToolbar></f:footer></f:DynamicPage></mvc:View>',
	"dalrae/cap/supabase/fioridemo/components/login/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent"],function(t){"use strict";return t.extend("dalrae.cap.supabase.fioridemo.components.login.Component",{metadata:{manifest:"json"},init:function(){t.prototype.init.apply(this,arguments)},destroy:function(){},getContentDensityClass:function(){this._sContentDensityClass="sapUiSizeCompact";return this._sContentDensityClass}})});
},
	"dalrae/cap/supabase/fioridemo/components/login/controller/App.controller.js":function(){sap.ui.define(["dalrae/cap/supabase/fioridemo/Supabase"],function(e){"use strict";return e.extend("dalrae.cap.supabase.fioridemo.components.login.App",{onInit:function(){this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass())}})});
},
	"dalrae/cap/supabase/fioridemo/components/login/i18n/i18n.properties":'appTitle=Fiori Demo\nappDescription=Fiori Demo',
	"dalrae/cap/supabase/fioridemo/components/login/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"dalrae.cap.supabase.fioridemo.components.login","type":"application","i18n":"i18n/i18n.properties","title":"{{appTitle}}","description":"{{appDescription}}","applicationVersion":{"version":"1.0.0"},"resources":"resources.json","sourceTemplate":{"id":"sap.ui.ui5-template-plugin.1worklist","version":"1.89.0"}},"sap.ui":{"technology":"UI5","icons":{"icon":"sap-icon://task","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"dalrae.cap.supabase.fioridemo.components.login.view.App","type":"XML","async":true,"id":"app"},"dependencies":{"minUI5Version":"1.66.0","libs":{"sap.ui.core":{},"sap.m":{},"sap.f":{},"sap.ushell":{},"sap.collaboration":{"lazy":true}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"dalrae.cap.supabase.fioridemo.components.login.i18n.i18n"}}},"services":{}}}',
	"dalrae/cap/supabase/fioridemo/components/login/view/App.view.xml":'<mvc:View controllerName="dalrae.cap.supabase.fioridemo.components.login.controller.App" displayBlock="true"\n\txmlns="sap.m"\n\txmlns:core="sap.ui.core"\n\txmlns:f="sap.f"\n\txmlns:mvc="sap.ui.core.mvc"><App id="app"><Page showHeader="false" ><VBox \n\t\t\t\twidth="100%"\n\t\t\t\theight="100%" \n\t\t\t\talignItems="Center"\n\t\t\t\tjustifyContent="Center"><Image src="./background.svg" width="313px" /><Input width="313px" id="email" placeholder="you@domain.com" /><Button id="button" icon="sap-icon://visits" text="Get magic link" width="313px" press="login" /><MessageStrip\n\t\t\t\t\tid="msg"\n\t\t\t\t\tvisible="false"\n\t\t\t\t\ttext="Check your email and click the magic link"\n\t\t\t\t\ttype="Success"\n\t\t\t\t\tshowIcon="true"/></VBox></Page></App></mvc:View>',
	"dalrae/cap/supabase/fioridemo/controller/App.controller.js":function(){sap.ui.define(["dalrae/cap/supabase/fioridemo/Supabase","sap/ui/model/json/JSONModel"],function(e,t){"use strict";return e.extend("dalrae.cap.supabase.fioridemo.controller.App",{comps:{},onInit:function(){e.prototype.onInit.apply(this,arguments);this.getView().setModel(new t({loggedIn:false,url:"",notificationsNumber:0,notifications:[]}))},onBeforeRendering:async function(){this._switch()},_switch:async function(){const e=await(await fetch("/auth/me")).json();const t=this.getView().byId("container");this.getView().getModel().setProperty("/loggedIn",!!e?.email);if(e?.email){this.getView().getModel().setProperty("/url",`https://avatars.dicebear.com/api/croodles-neutral/${e?.email}.svg`);sap.ui.getCore().setModel(this.getView().getModel(),"user");this._getComponent("chatComponent").then(e=>t.setComponent(e))}else{this._getComponent("loginComponent").then(e=>t.setComponent(e))}},_getComponent:function(e){return new Promise((t,n)=>{this.getOwnerComponent().createComponent({usage:e,async:true}).then(e=>t(e)).catch(e=>n(e))})},menu:function(){this.getView().byId("menu").openBy(this.getView().byId("avatar"))},onNavButtonPressed:function(){window.history.back()},onNotificationsPressed:function(){this.byId("notifications")},onItemClose:function(e){var t=e.getSource(),n=t.getParent();n.removeItem(t);MessageToast.show("Item Closed: "+t.getTitle())}})});
},
	"dalrae/cap/supabase/fioridemo/i18n/i18n.properties":'appTitle=Fiori Demo\nappDescription=Fiori Demo',
	"dalrae/cap/supabase/fioridemo/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"dalrae.cap.supabase.fioridemo","type":"application","i18n":"i18n/i18n.properties","title":"{{appTitle}}","description":"{{appDescription}}","applicationVersion":{"version":"1.0.0"},"resources":"resources.json","sourceTemplate":{"id":"sap.ui.ui5-template-plugin.1worklist","version":"1.89.0"}},"sap.ui":{"technology":"UI5","icons":{"icon":"sap-icon://task","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"dalrae.cap.supabase.fioridemo.view.App","type":"XML","async":true,"id":"app"},"componentUsages":{"chatComponent":{"name":"dalrae.cap.supabase.fioridemo.components.chat"},"loginComponent":{"name":"dalrae.cap.supabase.fioridemo.components.login"}},"dependencies":{"minUI5Version":"1.66.0","libs":{"sap.ui.core":{},"sap.m":{},"sap.f":{},"sap.ui.mdc":{},"sap.ushell":{},"sap.collaboration":{"lazy":true}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"dalrae.cap.supabase.fioridemo.i18n.i18n"}}},"services":{}}}',
	"dalrae/cap/supabase/fioridemo/view/App.view.xml":'<mvc:View controllerName="dalrae.cap.supabase.fioridemo.controller.App" displayBlock="true"\n\txmlns="sap.m"\n\txmlns:f="sap.f"\n\txmlns:core="sap.ui.core"\n\txmlns:mvc="sap.ui.core.mvc"><f:ShellBar id="shell" title="Supabase demo" secondTitle="Integrating CAP and Supabase" homeIcon="https://ui5.sap.com/resources/sap/ui/documentation/sdk/images/logo_ui5.png" showCopilot="false" showSearch="false" showMenuButton="false" showNavButton="true" navButtonPressed=".onNavButtonPressed" showNotifications="true" notificationsNumber="{/notificationsNumber}" notificationsPressed=".onNotificationsPressed" avatarPressed=".menu" showProductSwitcher="false"><f:profile><Avatar visible="{= !!${/loggedIn} }" initials="UI" src="{/url}" id="avatar" /></f:profile></f:ShellBar><core:ComponentContainer width="100vw" height="calc(100vh - 48px)" id="container" async="true" /><Menu id="menu"><MenuItem text="Github" press="github" /><MenuItem text="Logout" press="logout" /></Menu></mvc:View>'
}});
