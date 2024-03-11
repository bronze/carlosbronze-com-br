// scroll-watcher.js

class ScrollWatcher {
  constructor(config) {
    this.config={
      region: document.body,
      selector: '[data-scrolled-into-view]',
      threshold: 0,
      triggerRatio: 0.01,
      rootMargin: '0px',
      root: null,
      ...config,
    };

    this.observer=new IntersectionObserver(this.handleIntersection.bind(this), {
      root: this.config.root,
      threshold: this.config.threshold,
      triggerRatio: this.config.triggerRatio,
      rootMargin: this.config.rootMargin,
    });

    this.addNodes();
  }

  handleIntersection(entries) {
    entries.forEach((entry) => {
      const direction=entry.boundingClientRect.y<0? 'up':'down';
      let inView=entry.intersectionRatio>=this.config.triggerRatio;
      if (!entry.target.hasAttribute('data-has-intersected')) {
        entry.target.setAttribute('data-has-intersected', 'true');

      }
      if (inView) {
        entry.target.setAttribute('data-scrolled-into-view', 'true');
        this.onInitialEnter(entry);
      } else {
        entry.target.setAttribute('data-scrolled-into-view', 'false');
        entry.target.setAttribute('data-scrolled-past-view', direction==='down'? 'false':'true');
      }
    });
  }

  addNodes() {
    const elements=Array.from(this.config.region.querySelectorAll(this.config.selector));
    elements.forEach((element) => {
      this.observer.observe(element);
    });
  }


  onInitialEnter(entry) {
    // This method is called when an element initially enters the viewport
    entry.target.setAttribute('data-has-intersected', 'true');
  }
}

export default ScrollWatcher;
