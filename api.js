'use strict';
/*global $, api */
const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Timothy';

  function getItems(callback) {
    
    $.getJSON(BASE_URL + '/bookmarks', callback);// response => callback(response));
  }

  function createItem(title, url, desc, rating, callback){
    const newItem = JSON.stringify({title,url,desc,rating});

    $.ajax({
      'url': BASE_URL + '/bookmarks',
      'method': 'POST',
      'contentType': 'application/json',
      'data': newItem,
      'success': callback
    });

  }

  function updateItem(id, updateData, callback){
    const updateItemJSON = JSON.stringify(updateData);
    console.log(updateItemJSON);
    $.ajax({
      'url': BASE_URL + '/bookmarks/' + id,
      'method': 'PATCH',
      'contentType': 'application/json',
      'data': updateItemJSON,
      'success': callback
    });
  }

  return {
    getItems: getItems,
    createItem: createItem,
    updateItem: updateItem
  };
}());
