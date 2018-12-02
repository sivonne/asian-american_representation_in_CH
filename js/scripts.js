$(document).ready(function(){
    console.log('scripts loaded');

//news key
var mykey = config.MY_KEY;




            $.scrollify({
            section : "section",
            sectionName : "section-name",
            interstitialSection : "",
            easing: "easeOutExpo",
            scrollSpeed: 1100,
            offset : 0,
            scrollbars: true,
            standardScrollElements: "",
            setHeights: true,
            overflowScroll: true,
            updateHash: true,
            touchScroll:true,
            before:function() {},
            after:function() {},
            afterResize:function() {},
            afterRender:function() {}
          });
          $.scrollify.move("#second-section");
          $.scrollify.move("#third-section");
          $.scrollify.move("#fourth-section");
          $.scrollify.move("#fifth-section");

  });
