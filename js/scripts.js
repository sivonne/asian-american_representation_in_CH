$(document).ready(function(){
    console.log('scripts loaded');

//Google Charts for Data Viz, Sourced from DATA USA
    google.charts.load("current", {packages:["corechart"]});
          google.charts.setOnLoadCallback(homeChart);
          google.charts.setOnLoadCallback(deconstructChart);

          function homeChart() {
            var data = google.visualization.arrayToDataTable([
              ['Race', 'Percentage'],
              ['White',     .684],
              ['Asian',     .126],
              ['Black',  .097],
              ['Hispanic', .059],
              ['Multiracial',    .027],
              ['Other',    .004],
              ['Native',    .003],
              ['Islander',    .00022]
            ]);
            var options = {
              title: 'Demographics for Chapel Hill, NC as of 2016',
              subtitle:'Source: DATA USA',
              pieHole: 0.3,
            };

            var chart = new google.visualization.PieChart(document.getElementById('donutchart'));

            chart.draw(data, options);
          }
                    function deconstructChart() {
                      var data = google.visualization.arrayToDataTable([
                        ['Race', 'Percentage'],
                        ['Asian Indian',     1486],
                        ['Chinese',    3507],
                        ['Filipino',  297],
                        ['Japanese', 170],
                        ['Korean',    995],
                        ['Vietnamese',    253],
                        ['Other Asian Ethnicities',    789],

                      ]);

                      var options = {
                        title: 'Demographics for Chapel Hill, NC as of 2016',
                        subtitle:'Source: US Census Factfinder',
                        pieHole: 0.3,
                      };
//
                      var chart = new google.visualization.PieChart(document.getElementById('donut-chart1'));

                      chart.draw(data, options);
                    }//closes deconstructChart function


          //Google Books API, shows two books about Asian-American studies, then some CSS to make the book flip when hovered over
          google.books.load();
            function alertNotFound() {
                    alert("could not embed the book!");
                  }//closes alertNotFound function
            function initialize() {
                  var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
                  viewer.load('ISBN:0759104808');
                  var viewer2 = new google.books.DefaultViewer(document.getElementById('viewerCanvas2'));
                  viewer2.load('ISBN:076199176X');
                }//closes initialize()
                //calls function
          google.books.setOnLoadCallback(initialize);

  //DATA USA API AJAX Call; for some reason had difficulty getting it to work with a chart or graph, but was able to get it to print to the console so I left this code below to show the information.
    var url =
    'https://api.datausa.io/api/?sort=desc&force=acs.yg_race&show=geo&sumlevel=all&year=all&geo=16000US3711800';
  //   var data = [];
    var html = '';
    var years = [];
      $.ajax({
        type:'GET',
        url:url,
        dataType:'json',
        async:true,
        data:data,
        success:function(data){
          console.log(data);
        }//closes success function
      });//closes DATA USA Ajax call

//NEWS API to retrieve recent news about Asian-American representation in the news (there seems to be more relevant news closer to the bottom for some reason)
//news API key in config.js
var mykey = config.MY_KEY;
var url =
'https://newsapi.org/v2/everything?q=asian+american+representation&from=2018-11-25&sortBy=publishedAt&apiKey='+ mykey;
var data = [];
var html = '';
var articles = [];
var i = '';
//AJAX call
  $.ajax({
    type:'GET',
    url:url,
    dataType:'json',
    async:true,
    data:data,
    //prints name of articles in console for debugging
    success:function(data){
      console.log(data.articles);
      articles = data.articles;
      // function checksIfNull(article) {
      //   if(article.author != 'null'){
      //     html += article.author;
      //    }
      // }
//for loop for every article, returns a thumbnail pic, text, headline, byline and author
      articles.forEach(function(article){
      console.log(article.author);
      //added this in to weed out some somewhat off-topic sources that don't fit the story
      if(article.source.name != "Nih.gov"){
      html += '<div class="latest-news flex">';
        html += '<div class="text">';
        //must have url to actual article for copyright
        html += '<a href="' + article.url + '" target="_blank">';
        html += '<h4 class="headline">' + article.title + '</h4>';
        html +='<img class="thumbnail" src="'+ article.urlToImage + '">';
        html += '<h5 class="byline">by '+ article.author + ', <em>' + article.source.name + '</em></h5>';
        //added a description as well, so you can see the relevance to the main story
        html += '<p class="description"> ' + article.description + '</p>'
        html += '</a></div';
        html += '</div>';
      }//closes if statement
    });//closes forEach loop
    //places html in the news section at the bottom of the first page
    $('#news-section').html(html);
  }//closes success function
});//closes AJAX for News API


//to close hamburger menu with cool JS function
  function myFunction(x) {
      x.classList.toggle("change");
  }
//
// var toTopButton;
//
// function toTop(){
//   this.getElementById('#arrow').link
// }
// When the user scrolls down 20px from the top of the document, show the button
//for the "scroll to top" button, source code from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

//can't get to function correctly yet
function goToTop(){
  $('#arrow').onclick.scrollTo('#main-title');

}









  });
  //Google Charts info: https://developers.google.com/chart/interactive/docs/basic_multiple_charts
