'use strict';



const store = (function(){
  // const list = [
  //   { id: 1, title: 'Facebook', ratings: 5, expanded: false },
  //   { id: 2, title: 'Youtube', ratings: 3, expanded: false },
  //   { id: 3, title: 'Google', ratings: 4, expanded: false }
  // ];

  const adding = false;

  const addItem = function(item) {
    this.list.push(item);
  };



  return {
    list: [],
    adding,
    addItem
  };
}() );

