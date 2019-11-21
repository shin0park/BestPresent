// 캐싱 스토리지에 저장될 이름
var CACHE_NAME = 'pwa-offline-v1';
// 캐싱할 파일 목록
var filesToCache = [
    '/**.*',
    '/css/app.css',
    '/images/icons/192px.png',
    '/images/icons/512px.png',
    '/favicon.png',
    '/manifest.json',
    '/',
    ''

];
//서비스워커 설치(웹 자원 캐싱)
//self 란 serviceworker 파일의 window 를 가리킨다 window-page 에 대한 정보
//서비스 워커에서는 window 가 정의 안되어 있어서 대신에 self 를 사용.
self.addEventListener('install', function (event) {
    console.log('[Service Worker] Install');
    event.waitUntil(
        //로직
        //install 이 끝날때까지 이 안의 로직들이 끝나기 전까지 event끝나지 않는다
        caches.open(CACHE_NAME)//PWA파일
            .then(function (cache) {
                //PWA 파일에 다 집어 넣어라
                return cache.addAll(filesToCache);
            }).catch(function (error) {
            return console.log(error);
        })
        //caches - 캐시 스토리지 접근할 수 있는 예약어
    );
});
self.addEventListener('fetch', function (event) {
    console.log('[Service Worker] Fetch', event.request);
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                return response || fetch(event.request);
            }).catch(function (err) {
            return console.log(err);

        })
        //event.request - 화면에서 리소스 요청하는 request
        //match - 해당 request 와 맞는 cache 가 있는지
    );

});
self.addEventListener('activate', function (event) {
    //기존의 cache 를 비우고 새로운 cache 를 추가
    var newCacheList = ['pwa-offline-v1'];
    event.waitUntil(
      caches.keys().then(function (cacheList) {
          return Promise.all(
              cacheList.map(function (cacheName) {
                  if(newCacheList.indexOf(cacheName) === -1){
                      return caches.delete(cacheName);
                  }
              })
          )
      }).catch(function (err) {
          return console.log(err);
      })
    );
    
})