jQuery(document).ready(function() {
  $(document).ready(function () {
      $('.grid').isotope({
          itemSelector: '.grid-item',
          layoutMode: 'masonryHorizontal',
          masonryHorizontal: {
              rowHeight: 50,
              gutter: 10
          }
      });
  });
});
