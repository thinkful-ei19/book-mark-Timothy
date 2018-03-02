'use strict';
/* global bookmarkList, $, store, api, addBookMark, detailedBookmark  */

$(document).ready(function () {
  bookmarkList.bindEventListeners();
  addBookMark.bindEventListeners();
  detailedBookmark.bindEventListeners();
  bookmarkList.render();

  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));

    bookmarkList.render();

    //     const item = store.items[0];
    //     console.log('current name: ' + item.name);
    //     store.findAndUpdateName(item.id, { name: 'Ham'});
    //     console.log('new name: ' + item.name);
    //     shoppingList.render();

  });
});