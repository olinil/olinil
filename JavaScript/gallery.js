var splide = new Splide( '.splide' );
var bar    = splide.root.querySelector( '.my-slider-progress-bar' ); // Corrected class name

// Updates the bar width whenever the carousel moves:
splide.on( 'mounted move', function () {
  var end  = splide.Components.Controller.getEnd() + 1;
  var rate = Math.min( ( splide.index + 1 ) / end, 1 );
  bar.style.width = String( 100 * rate ) + '%';
} );
  
splide.mount();