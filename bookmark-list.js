/* globals store, $ */
'use strict';

const bookmarkList = (function () {



  function generateBookmarkElement(item) {
    return `
    <form>
      <div class="default-bookmark-list>  
        <span class="bookmark-item" data-item-id="${item.id}">Title: ${item.title}</span>
        <span class="bookmark-rating">Rating:</span>
        <span class="bookmark-rating-star">
        <span><input type="radio" name="rating" id="str5" value="5"><label for="str5"></label></span>
        <span><input type="radio" name="rating" id="str4" value="4"><label for="str4"></label></span>
        <span><input type="radio" name="rating" id="str3" value="3"><label for="str3"></label></span>
        <span><input type="radio" name="rating" id="str2" value="2"><label for="str2"></label></span>
        <span><input type="radio" name="rating" id="str1" value="1"><label for="str1"></label></span>
        <button type="button" id="booklist-item-toggle">more</button>  
      </div>
    </form>
    <div class="bookmark-list-expanded"></div>
     `;
  }

  function generateBookmarkItemsString(bookmarkList) {
    const items = bookmarkList.map(item => generateBookmarkElement(item));
    return items.join('');
  }
  
 

  function render() {


    let items = store.list;
    // if (store.expanded) {
    //   items = store.list.filter(item => !item.expanded);
    // }
    console.log(items);
    const bookmarkItemsString = generateBookmarkItemsString(items);
    $('.js-bookmark-list').html(bookmarkItemsString);
  }
  //   console.log(render());

  //EVENT LISTNER FUNCTIONS BELOW -------------------------------------------
 


  //   function expandWireframe() {
  //     $('#booklist-item-toggle').click(function () {
  //       $('.bookmark-list-expanded').slideToggle('slow');
  //     });
  //   }
  
  function bindEventListeners() {
    // expandWireframe();
   
  }
  return {
    bindEventListeners: bindEventListeners,
    render: render
    
  };

}());