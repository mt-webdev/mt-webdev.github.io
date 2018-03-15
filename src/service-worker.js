const appCache = 'mtwd-cv-0.1.05';

const CACHED_FILES = [
    '/',
    'templates/home.html',
    'templates/notFound.html',
    'main.bundle.js',
    'vendor.bundle.js',
    'polyfills.bundle.js',
    'main.css',
    'images/MTWD_384x384.svg',
    'images/picture.jpg',
    'vendor.css'
];


self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(appCache).then(cache => cache.addAll(CACHED_FILES))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
            .catch(error => new Response('Dang it! This error again. Retry?!'))
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => Promise.all(
            cacheNames
                .filter(cacheName => cacheName.startsWith('mtwd-cv-') && cacheName !== appCache)
                .map(cacheName => caches.delete(cacheName))
        )));
});

self.addEventListener('message', message => {
    if (message.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});
