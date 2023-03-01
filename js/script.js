
var elms = document.getElementsByClassName( 'splide' );


for ( var i = 0; i < elms.length; i++ ) {
  new Splide( elms[ i ], {
   type   : 'loop',
   drag   : 'free',
   snap   : true,
   perPage: 3,
 }).mount();
}