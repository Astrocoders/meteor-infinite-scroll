InfiniteScroll
==============

## Usage

```js
let infiniteScroll = new InfiniteScroll('.overflow-scroll');

infiniteScroll.onInfinite(function(){
  // what to do when user are scrolls until the bottom of the threshold element
});

// then call .run to start listening to the scrolling
infinite.run();
```

Optionally you can pass a `template`, so InfiniteScroll.

```js
Template.Foo.onRendered(function(){
  // With the template passed to the InfiniteScroll constructor
  // it will be able to query for the threshold element with template.$.
  this.infinite = new InfiniteScroll('.overflow-scroll', this);
  this.infinite.onInfinite(function(){
    console.log('You like to scroll!');
  });
});

Template.Foo.onDestroyed(function(){
  this.infinite.destroy(); // remove the event listener from the scroll event.
})
```
