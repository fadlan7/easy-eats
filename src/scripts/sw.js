/* eslint-disable no-restricted-globals */
import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');
  event.waitUntil(CacheHelper.cachingAppShell(
    [...assets,
      './',
      'https://fonts.googleapis.com/icon?family=Material+Icons&display=swap',
      'https://image.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg',
      'https://image.freepik.com/free-vector/error-404-concept-landing-page_52683-12188.jpg'
    ]));
  // TODO: Caching App Shell Resource
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');
  event.waitUntil(CacheHelper.deleteOldCache());
  // TODO: Delete old caches
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);
  event.respondWith(CacheHelper.revalidateCache(event.request));
  // TODO: Add/get fetch request to/from caches
});
