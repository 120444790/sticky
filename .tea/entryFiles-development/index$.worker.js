if(!self.__appxInited) {
self.__appxInited = 1;
require('@alipay/appx-compiler/lib/sjsEnvInit');

require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}

if(AFAppX.compilerConfig){ AFAppX.compilerConfig.component2 = true; }

function success() {
require('../../app');
require('../../pages/content-card/content-card?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/content-title/content-title?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/l-sticky/l-sticky?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/l-sticky-item/l-sticky-item?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/index?hash=6a4bde1742360e3ae1b3418fcccd80c530c00dad');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}