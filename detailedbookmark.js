/* globals $, detailedBookmark */
'use strict';
const detailedBookmark = (function(){
  function expandBookMarkForm() {
    return `
  <span class="bookmark-Description">Description:</span>
  <span class="bookmark-rating">URL:</span>
    `;
  }

  function expandAddingBookmarkForm() {

    event.preventDefault();
    const formStr = expandBookMarkForm();
    $('.bookmark-list-expanded').html(formStr);

  }

  function handleAddBookmark() {
    $('#book-list-item-toggle').click(function () {
      console.log('add button clicked');
      expandAddingBookmarkForm();
    });
  }
  function bindEventListeners() {
    handleAddBookmark();
  }
  return {
    bindEventListeners
  };
}()
);








// function getItemIdFromElement(item) {
//   return $(item)
//     .closest('.js-item-element')
//     .data('item-id');
// }
  
// function handleItemCheckClicked() {
//   $('.js-shopping-list').on('click', '.js-item-toggle', event => {
//     const id = getItemIdFromElement(event.currentTarget);
//     store.findAndToggleChecked(id);
//     render();
//   });
// }