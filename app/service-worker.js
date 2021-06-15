/* eslint-disable no-undef */
//This is the service worker with the Advanced caching

const CACHE = "cache-v1.0.1";
const precacheFiles = [...new Set([
  'https://sapui5.hana.ondemand.com/resources/sap-ui-core.js',
  'https://sapui5.hana.ondemand.com/resources/sap/ui/core/library-preload.js',
  'https://sapui5.hana.ondemand.com/resources/sap/m/library-preload.js',
  'https://sapui5.hana.ondemand.com/resources/sap/ui/mdc/library-preload.js',
  'https://sapui5.hana.ondemand.com/resources/sap/f/library-preload.js',
  'https://sapui5.hana.ondemand.com/resources/sap/ui/layout/library-preload.js',
  'https://sapui5.hana.ondemand.com/resources/sap/fe/core/library-preload.js',
  'https://sapui5.hana.ondemand.com/resources/sap/fe/navigation/library-preload.js',
  'https://sapui5.hana.ondemand.com/resources/sap/fe/placeholder/library-preload.js',
  'https://sapui5.hana.ondemand.com/resources/sap/ui/fl/library-preload.js',
  'https://sapui5.hana.ondemand.com/resources/sap/ushell/library-preload.js',
  'https://sapui5.hana.ondemand.com/resources/sap/ui/core/themes/sap_fiori_3/library.css',
  'https://sapui5.hana.ondemand.com/resources/sap/m/themes/sap_fiori_3/library.css',
  'https://sapui5.hana.ondemand.com/resources/sap/ui/mdc/themes/sap_fiori_3/library.css',
  'https://sapui5.hana.ondemand.com/resources/sap/ui/layout/themes/sap_fiori_3/library.css',
  'https://sapui5.hana.ondemand.com/resources/sap/f/themes/sap_fiori_3/library.css',
  'https://sapui5.hana.ondemand.com/resources/sap/ui/core/messagebundle_en_GB.properties',
  'https://sapui5.hana.ondemand.com/resources/sap/m/messagebundle_en_GB.properties',
  'https://sapui5.hana.ondemand.com/resources/sap/fe/placeholder/themes/sap_fiori_3/library.css',
  'https://sapui5.hana.ondemand.com/resources/sap/ui/fl/themes/sap_fiori_3/library.css',
  'https://sapui5.hana.ondemand.com/resources/sap/ui/mdc/messagebundle_en_GB.properties',
  'https://sapui5.hana.ondemand.com/resources/sap/ui/mdc/messagebundle_en.properties',
  'https://sapui5.hana.ondemand.com/resources/sap/ui/mdc/messagebundle.properties',
  'https://sapui5.hana.ondemand.com/resources/sap/ui/core/themes/sap_fiori_3/library-parameters.json',
  'https://sapui5.hana.ondemand.com/resources/sap/m/themes/sap_fiori_3/library-parameters.json',
  'https://sapui5.hana.ondemand.com/resources/sap/ui/mdc/themes/sap_fiori_3/library-parameters.json',
  'https://sapui5.hana.ondemand.com/resources/sap/ui/layout/themes/sap_fiori_3/library-parameters.json',
  'https://sapui5.hana.ondemand.com/resources/sap/f/themes/sap_fiori_3/library-parameters.json',
  'https://sapui5.hana.ondemand.com/resources/sap/fe/placeholder/themes/sap_fiori_3/library-parameters.json',
  'https://sapui5.hana.ondemand.com/resources/sap/ui/fl/themes/sap_fiori_3/library-parameters.json',
  'https://sapui5.hana.ondemand.com/resources/sap/ushell/themes/sap_fiori_3/library.css',
  'https://sapui5.hana.ondemand.com/resources/sap/ui/core/themes/sap_fiori_3/fonts/72-Regular.woff2',
  'https://sapui5.hana.ondemand.com/resources/sap/ui/fl/messagebundle_en_GB.properties',
  'https://sapui5.hana.ondemand.com/resources/sap/ui/unified/library-preload.js',
  'https://sapui5.hana.ondemand.com/resources/sap/ui/unified/themes/sap_fiori_3/library.css',
  'https://sapui5.hana.ondemand.com/resources/sap-ui-version.json',
  'https://sapui5.hana.ondemand.com/resources/sap/f/messagebundle_en_GB.properties',
  'https://sapui5.hana.ondemand.com/resources/sap/ui/core/themes/sap_fiori_3/fonts/72-Bold.woff2',
  'https://sapui5.hana.ondemand.com/resources/sap/ui/core/themes/base/fonts/SAP-icons.woff2',
  'https://sapui5.hana.ondemand.com/resources/sap/ui/core/cldr/en_GB.json',
  'https://sapui5.hana.ondemand.com/resources/sap/fe/templates/library-preload.js',
  'https://sapui5.hana.ondemand.com/resources/sap/fe/macros/library-preload.js',
  'https://sapui5.hana.ondemand.com/resources/sap/suite/ui/microchart/library-preload.js',
  'https://sapui5.hana.ondemand.com/resources/sap/collaboration/library-preload.js',
  'https://sapui5.hana.ondemand.com/resources/sap/suite/ui/commons/library-preload.js',
  'https://sapui5.hana.ondemand.com/resources/sap/fe/macros/messagebundle_en_GB.properties',
  'https://sapui5.hana.ondemand.com/resources/sap/fe/macros/messagebundle_en_GB.properties',
  'https://sapui5.hana.ondemand.com/resources/sap/fe/core/messagebundle_en_GB.properties',
  'https://sapui5.hana.ondemand.com/resources/sap/fe/core/messagebundle_en_GB.properties',
  'https://sapui5.hana.ondemand.com/resources/sap/fe/core/messagebundle_en_GB.properties',
  'https://sapui5.hana.ondemand.com/resources/sap/fe/templates/messagebundle_en_GB.properties',
  'https://sapui5.hana.ondemand.com/resources/sap/ui/thirdparty/hyphenopoly/hyphenopoly.bundle.js',
  'https://sapui5.hana.ondemand.com/resources/sap/ui/thirdparty/hyphenopoly/hyphenEngine.wasm',
  'https://sapui5.hana.ondemand.com/resources/sap/ui/thirdparty/hyphenopoly/patterns/en-us.hpb',
  "/index.html",
  "/",
  "/dist/controller/App-dbg.controller.js",
  "/dist/Component.js",
  "/dist/Component-preload.js",
  "/dist/Component-dbg.js",
  "/dist/view/App.view.xml",
  "/dist/controller/App.controller.js"
])];
// set up functions

const install = event => {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(precacheFiles);
    }).catch(function (error) {
      console.error(error);
    })
  );
};

const deleteCaches = () => {
  console.info('[SW MAINTENANCE]');

  caches.keys().then(list =>
    list
      .filter(l => [CACHE].indexOf(l) < 0)
      .forEach(l => caches.delete(l)));
};

const offlineFirst = async (event, cache) => {

  let response = await cache.match(event.request);

  if (response) console.info('[SW IN CACHE]', event.request.url);
  if (response) return response;

  response = await fetch(event.request);
  cache.put(event.request, response.clone());

  return response;
};

const onlineFirst = async (event, cache) => {
  let response;

  try {
    response = await fetch(event.request);
    if (response) console.info('[SW FETCHED]', event.request.url);
    if (response) cache.put(event.request, response.clone());
  } catch (e) {
    if (response) console.info('[SW FETCH FAILED]', event.request.url);
    response = await cache.match(event.request);
  }

  return response;
};

const applicationRegex = /^\/orders\/(.*)|^\/$|index|auth/i;

const fetchListener = async event => {
  const url = new URL(event.request.url);
  const cacheName = CACHE; //applicationRegex.test(url.pathname) ? APP_CACHE_NAME : DATA_CACHE_NAME;
  const cacheFunction = applicationRegex.test(url.pathname) ? onlineFirst : offlineFirst;

  // don't try to handle e.g. data: URIs, don't check any request that is not GET either
  if (event.request.method !== 'GET' || event.request.headers.has('range')) return;
  if (!url.protocol.startsWith('http')) return;
  if (/auth/.test(url)) return;
  
  console.info('[SW]', url.href)
  
  event.respondWith(
    caches
      .open(cacheName)
      .then(cache => cacheFunction(event, cache))
  )
};

self.addEventListener('activate', event => deleteCaches(event));
self.addEventListener('install', event => install(event));
self.addEventListener('fetch', async event => await fetchListener(event));