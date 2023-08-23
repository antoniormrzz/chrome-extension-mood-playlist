import { moodListMap } from './moodListMap.js';

chrome.storage.sync.get('mood', function (data) {
  document.getElementById('title').innerHTML = 'Your mood was ' + data.mood + '!';
});

document.getElementById('energetic-button').addEventListener('click', function () {
  chrome.tabs.create({ url: moodListMap.energetic[Math.floor(Math.random() * moodListMap.energetic.length)] });
  chrome.storage.sync.set({ mood: 'energetic' });
  chrome.runtime.sendMessage({ mood: 'energetic' });
});

document.getElementById('calm-button').addEventListener('click', function () {
  chrome.tabs.create({ url: moodListMap.calm[Math.floor(Math.random() * moodListMap.calm.length)] });
  chrome.storage.sync.set({ mood: 'calm' });
  chrome.runtime.sendMessage({ mood: 'calm' });
});

document.getElementById('sad-button').addEventListener('click', function () {
  chrome.tabs.create({ url: moodListMap.sad[Math.floor(Math.random() * moodListMap.sad.length)] });
  chrome.storage.sync.set({ mood: 'sad' });
  chrome.runtime.sendMessage({ mood: 'sad' });
});
