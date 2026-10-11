// Energy Works — shared premium micro-interactions
// Nav glass-on-scroll + gentle IntersectionObserver reveal.
(function(){
  var header = document.querySelector('header');
  if(header){
    var onScroll = function(){
      if(window.scrollY > 24){ header.classList.add('is-scrolled'); }
      else { header.classList.remove('is-scrolled'); }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
  }

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.reveal');
  if(revealEls.length){
    if(reduceMotion || !('IntersectionObserver' in window)){
      revealEls.forEach(function(el){ el.classList.add('in-view'); });
    } else {
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(function(el){ io.observe(el); });
    }
  }
})();
