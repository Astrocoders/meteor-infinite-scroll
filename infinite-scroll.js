/* globals InfiniteScroll, jQuery*/

InfiniteScroll = class {
  /**
   * Initializes the InfiniteScroll instance
   * @param  {Selector} threshold String selector for the threshold element
   * @param  {Blaze.TemplateInstance} template  Optional
   * @return {InfiniteScroll}
   */
  constructor(threshold, template){
    if(threshold instanceof jQuery){
      this.threshold = threshold;
    } else {
      this.threshold = template ? template.$(threshold) : $(threshold);
    }
    this.infinite = $({});

    if(this.threshold.length === 0){
      console.error('[InfiniteScroll]', 'No threshold element was found!');
    }

    return this;
  }

  /**
   * Attaches an callback to the onInfinite event
   * @param  {Function} fn Callback
   * @return {jQuery}   Returns the fake jQuery instance so you can chain more
   *                    events.
   */
  onInfinite(fn){
    return this.infinite.on('onInfinite', fn);
  }

  /**
   * Stop the infinite event
   * @return {jQuery} jQuery instance with the threshold element
   */
  destroy(){
    return this.threshold.off('scroll.infinite');
  }

  /**
   * Starts the scroll.infinite event
   * @return {jQuery} jQuery instance with the threshold element
   */
  run(){
    return this.threshold.on('scroll.infinite', _.debounce(() => {
      let elem = this.threshold;
      let totalScroll = elem.get(0).scrollHeight - elem.outerHeight();
      let scrollTop = elem.scrollTop() + 10;
      if (totalScroll < scrollTop) {
        this.infinite.trigger('onInfinite');
      }
    }, 200));
  }
};
