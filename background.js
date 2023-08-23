import { moodListMap } from './moodListMap.js';

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ mood: 'unknown, pick one' });

  chrome.contextMenus.create({
    id: 'suggest-playlist',
    title: 'Suggest a playlist',
    contexts: ['page']
  });

  chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === 'suggest-playlist') {
      chrome.storage.sync.get('mood', function (data) {
        const mood = data.mood;
        chrome.tabs.create({ url: moodListMap[mood][Math.floor(Math.random() * moodListMap[mood].length)] });
      });
    }
  });

  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.mood) {
      chrome.contextMenus.update(
        'suggest-playlist',
        {
          title: `Suggest ${request.mood === "energetic" ? "an" : "a"} ${request.mood} playlist`
        }
      );
    }
  });
});