// const obs = new IntersectionObserver(entries =>
//     {
//         entries.forEach(entry=>{
//             if(entry.isIntersecting){
//                 document.querySelectorAll(".About").classList.add("fadeIn");
//             }
//         })
//         obs.observe(document.querySelector(".container"));
//     })

// // const OnScroll = new IntersectionObserver(function(
//   entries,
//   OnScroll
// ){
//   entries.forEach(entry =>{
//     if(!entry.isIntersecting) {
//       return;
//     }else{
//       entry.target.classList.add("appear");
//       OnScroll.unobserve(entry.target);
//     }
//   })
// })

// $(document).on("scroll", function() {
//     var pageTop = $(document).scrollTop();
//     var pageBottom = pageTop + $(window).height();
//     var tags = $(".About");
  
//     for (var i = 0; i < tags.length; i++) {
//       var tag = tags[i];
  
//       if ($(tag).position().top < pageBottom) {
//         $(tag).addClass("visible");
//       } else {
//         $(tag).removeClass("visible");
//       }
//     }
//   });
$(document).ready(function() {
      $(window).scroll( function(){
          $('.fadein').each( function(i){
              var itemBottom = $(this).offset().top + $(this).outerHeight();
              var bottom = $(window).scrollTop() + $(window).height();
              if( bottom > itemBottom ){
                  $(this).animate({'opacity':'1'},1000);
              }
          });
      });
  });
  