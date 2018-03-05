/* globals api, $, store, bookmarkList */
'use strict';
const addBookMark = (function(){

  function addBookMarkForm() {
    return `
    <div>
        <form id="add-bookmark">
        <div class="add-bookmark-form">
            <label>Site Name</label>
            <input type="text" class="form-control" id="website-name" placeholder="Website Name">
        </div> 
        <div class="add-bookmark-form">
            <label>Site URL</label>
            <input type="text" class="form-control" id="website-URL" placeholder="Website URL">
        </div> 
        <div class="add-bookmark-form">
            <label>Site Description</label>
            <input type="text" class="form-control" id="website-description" placeholder="Description(optional)">
        </div> 
        <button type="submit" class="add-bookmark-btn">add</button>
        </form>
    </div>
        `;
  }
  //click the '+' button to invoke 'addBookMarkForm function' to append
  // new html file that contains the form for adding new element
  //or is it better to already have it on the html doc and give class 'hidden' and
  //when clicking the + button, removing 'hidden' class to show the form 
  function expandAddingBookmarkForm() {

    event.preventDefault();
    const formString = addBookMarkForm();
    $('.add-bookmark-form').html(formString);

  }

  function handleAddBookmark() {
    console.log('hello');
    $('.add-bookmark-button').click(function () {
      console.log('add button clicked');
      expandAddingBookmarkForm();
    });
  }

  function saveBookmark() {
    $('.add-bookmark-form').on('click','.add-bookmark-btn', function (event) {
      event.preventDefault();
      const newBookmarkTitle = $('#website-name').val();

      $('#website-name').val('');
      const newBookmarkURL = $('#website-URL').val();
      $('#website-URL').val('');

      const newBookmarkDescription = $('#website-description').val();
      $('#website-description').val('');

      api.createItem(newBookmarkTitle, newBookmarkURL, newBookmarkDescription, (newItem) => {
        store.addItem(newItem);
        bookmarkList.render();

      });
    });
  }

  function bindEventListeners() {
    handleAddBookmark();
    saveBookmark();


  }
  return {
    bindEventListeners
  };
}());