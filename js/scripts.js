$(document).ready(function(){
    console.log('scripts loaded');
//dropdown JS

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropsDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}
dropsDown('#myDropdown');
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//news key
var mykey = config.MY_KEY;
var url =
'https://newsapi.org/v2/everything?q=chapel+hill+representation&from=2018-11-15&sortBy=publishedAt&apiKey='+ mykey;
var url2 = 'https://newsapi.org/v2/everything?q=chapel+hill+asian+americans&from=2018-11-15&sortBy=publishedAt&apiKey='+ mykey;
var urlArray = [url, url2];
var data = [];
var html = '';
var articles = [];
var i = '';
for(i=0; i < urlArray.length; i++){
  $.ajax({
    type:'GET',
    url:urlArray[i],
    dataType:'json',
    async:true,
    data:data,
    success:function(data){
      console.log(data.articles);
      articles = data.articles;

      articles.forEach(function(article){
      console.log(article.title);
      html += '<div class="latest-news flex">';
        html +='<img class="thumbnail" src="'+ article.urlToImage + '">';
        html += '<div class="text">';
        //must have url to actual article for copyright
        html += '<a href="' + article.url + '" target="_blank">';
        html += '<h2 class="headline">' + article.title + '</h2>';
        html += '<h4 class="byline">by '+ article.author + ', <em>' + article.source.name + '</em></h4>';
        html += '</a></div';
      html += '</div>';

  });
  $('#news-section').html(html);
  }
  });
} //close for loop





          //   $.scrollify({
          //   section : "section",
          //   sectionName : "section-name",
          //   interstitialSection : "",
          //   easing: "easeOutExpo",
          //   scrollSpeed: 1100,
          //   offset : 0,
          //   scrollbars: true,
          //   standardScrollElements: "",
          //   setHeights: true,
          //   overflowScroll: true,
          //   updateHash: true,
          //   touchScroll:true,
          //   before:function() {},
          //   after:function() {},
          //   afterResize:function() {},
          //   afterRender:function() {}
          // });
          // $.scrollify.move("#second-section");
          // $.scrollify.move("#third-section");
          // $.scrollify.move("#fourth-section");
          // $.scrollify.move("#fifth-section");

  });
