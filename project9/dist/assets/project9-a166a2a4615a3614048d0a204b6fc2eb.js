"use strict"
define("project9/app",["exports","project9/resolver","ember-load-initializers","project9/config/environment"],function(e,t,i,n){Object.defineProperty(e,"__esModule",{value:!0})
var r=Ember.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:t.default});(0,i.default)(r,n.default.modulePrefix),e.default=r}),define("project9/components/people-list",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Component
e.default=t.extend({actions:{showPerson:function(e){alert(e)}}})}),define("project9/helpers/app-version",["exports","project9/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,i){function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return t.hideSha?r.match(i.versionRegExp)[0]:t.hideVersion?r.match(i.shaRegExp)[0]:r}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n
var r=t.default.APP.version
e.default=Ember.Helper.helper(n)}),define("project9/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("project9/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("project9/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","project9/config/environment"],function(e,t,i){Object.defineProperty(e,"__esModule",{value:!0})
var n=void 0,r=void 0
i.default.APP&&(n=i.default.APP.name,r=i.default.APP.version),e.default={name:"App Version",initialize:(0,t.default)(n,r)}}),define("project9/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("project9/initializers/data-adapter",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("project9/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("project9/initializers/export-application-global",["exports","project9/config/environment"],function(e,t){function i(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var i
if("undefined"!=typeof window)i=window
else if("undefined"!=typeof global)i=global
else{if("undefined"==typeof self)return
i=self}var n,r=t.default.exportApplicationGlobal
n="string"==typeof r?r:Ember.String.classify(t.default.modulePrefix),i[n]||(i[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete i[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=i,e.default={name:"export-application-global",initialize:i}}),define("project9/initializers/injectStore",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("project9/initializers/store",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("project9/initializers/transforms",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"transforms",before:"store",initialize:function(){}}}),define("project9/instance-initializers/ember-data",["exports","ember-data/instance-initializers/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("project9/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("project9/router",["exports","project9/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var i=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
i.map(function(){this.route("scientists")}),e.default=i}),define("project9/routes/scientists",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Route
e.default=t.extend({model:function(){return["Marie Curie","Mae Jemison","Albert Hofmann"]}})}),define("project9/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("project9/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"7kFIFSeB",block:'{"symbols":[],"statements":[[6,"h1"],[7],[0,"PeopleTracker"],[8],[0,"\\n\\n"],[1,[18,"outlet"],false]],"hasEval":false}',meta:{moduleName:"project9/templates/application.hbs"}})}),define("project9/templates/components/people-list",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"9hLV0Dsi",block:'{"symbols":["person"],"statements":[[6,"h2"],[7],[1,[18,"title"],false],[8],[0,"\\n\\n"],[6,"ul"],[7],[0,"\\n"],[4,"each",[[20,["people"]]],null,{"statements":[[0,"    "],[6,"li"],[3,"action",[[19,0,[]],"showPerson",[19,1,[]]]],[7],[1,[19,1,[]],false],[8],[0,"\\n"]],"parameters":[1]},null],[8]],"hasEval":false}',meta:{moduleName:"project9/templates/components/people-list.hbs"}})}),define("project9/templates/scientists",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"YBM4SUfx",block:'{"symbols":[],"statements":[[1,[25,"people-list",null,[["title","people"],["List of Scientists",[20,["model"]]]]],false]],"hasEval":false}',meta:{moduleName:"project9/templates/scientists.hbs"}})}),define("project9/config/environment",[],function(){try{var e="project9/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),i={default:JSON.parse(unescape(t))}
return Object.defineProperty(i,"__esModule",{value:!0}),i}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("project9/app").default.create({name:"project9",version:"0.0.0+6249f7f2"})
