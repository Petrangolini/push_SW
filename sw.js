const staticChacheName="site-static-v2";
const dynamicCache="dynamic-chace";

const filesToCache = [
    '/',
   '/js/anim.js',
   '/js/app.js',
    '/js/color.js',
    '/js/materialize.min.js',
    '/pages/timeline.html',
    '/pages/offline.html',
    '/css/animate.css',
    '/css/materialize.min.css',
    '/css/style.css',
    '/css/timeline.css',
    'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'
  
];



self.addEventListener('install',evt=>{
    console.log('Attempting to install service worker and cache static assets');
    
    evt.waitUntil(
    caches.open(staticChacheName)
    .then(cache => {
      return cache.addAll(filesToCache);
    })
  );

});

self.addEventListener('activate',evt=>{
    //console.log("service worker has been activated");
    evt.waitUntil(
        caches.keys().then(keys =>{

            return Promise.all(keys
            .filter(key => key !== staticChacheName && key!== dynamicCache )
            .map(key => caches.delete(key))
            )
        })
    );
});

self.addEventListener('fetch',evt=>{

    

        caches.match(evt.request).then(cacheRes =>{
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(dynamicCache).then(cache=>{
                    cache.put(evt.request.url,fetchRes.clone());
                    return fetchRes;
                })
            })
        }).catch(()=> caches.match('/pages/offline.html'))
    
});

self.addEventListener('push',()=>{
    self.registration.sendNotification('test message 13344',{})
});