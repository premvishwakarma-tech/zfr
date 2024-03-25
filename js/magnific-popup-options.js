// $(document).ready(function() {
//   // MagnificPopup
//   var magnifPopup = function() {
//     $('.popup-image').magnificPopup({
//       type: 'image',
//       removalDelay: 300,
//       mainClass: 'mfp-with-zoom',
//       gallery:{
//         enabled:true
//       },
//       zoom: {
//         enabled: true, // By default it's false, so don't forget to enable it

//         duration: 300, // duration of the effect, in milliseconds
//         easing: 'ease-in-out', // CSS transition easing function

//         // The "opener" function should return the element from which popup will be zoomed in
//         // and to which popup will be scaled down
//         // By defailt it looks for an image tag:
//         opener: function(openerElement) {
//         // openerElement is the element on which popup was initialized, in this case its <a> tag
//         // you don't need to add "opener" option if this code matches your needs, it's defailt one.
//         return openerElement.is('img') ? openerElement : openerElement.find('img');
//         }
//       }
//     });
//   };
  
//   // Call the functions 
//   magnifPopup();

// });

$(document).ready(function() {
  // MagnificPopup
  var magnifPopup = function() {
    // Initialize popup for images
    $('.popup-image').magnificPopup({
      type: 'image', // Specifies the content type to be an image
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery:{
        enabled:true // Enables gallery feature for images
      },
      zoom: {
        enabled: true,
        duration: 300,
        easing: 'ease-in-out',
        opener: function(openerElement) {
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
    
    // Initialize popup for videos
    $('.popup-video').magnificPopup({
      type: 'iframe', // Specifies the content type to be an iframe, useful for videos
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
      gallery:{
        enabled:true // Enables gallery feature for videos, if needed
      },
      zoom: {
        enabled: true,
        duration: 300,
        easing: 'ease-in-out',
        opener: function(openerElement) {
          return openerElement.is('video') ? openerElement : openerElement.find('video');
        }
      }
    });
  };
  
  // Call the functions
  magnifPopup();
});
