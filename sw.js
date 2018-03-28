const appCache = 'mtwd-cv-0.1.10';

const CACHED_FILES = [
    '/',
    'templates/home.html',
    'templates/notFound.html',
    'main.bundle.js',
    'main.css',
    'vendor.bundle.js',
    'vendor.css',
    'polyfills.bundle.js',
    'images/MTWD_384x384.svg',
    'src/images/picture.jpg',
    'src/images/picture_small.jpg',
    'src/icons/web-fonts-with-css/webfonts/fa-solid-900.woff2',
    'src/icons/web-fonts-with-css/webfonts/fa-brands-400.woff2',
    'src/icons/web-fonts-with-css/webfonts/fa-solid-900.woff',
    'src/icons/web-fonts-with-css/webfonts/fa-brands-400.woff',
    'src/icons/web-fonts-with-css/webfonts/fa-solid-900.ttf',
    'src/icons/web-fonts-with-css/webfonts/fa-brands-400.ttf',
    'vendor.css',
    'styles.bundle.js',
    'styles.css'
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
