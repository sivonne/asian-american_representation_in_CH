$(document).ready(function(){
    console.log('scripts loaded');

//Google Charts for Data Viz, Sourced from DATA USA
    google.charts.load("current", {packages:["corechart"]});
          google.charts.setOnLoadCallback(drawChart);
          function drawChart() {
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

          //Google Books API, shows two books about Asian-American studies, then some CSS to make the book flip when hovered over
          google.books.load();
            function alertNotFound() {
                    alert("could not embed the book!");
                  }
            function initialize() {
                  var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
                  viewer.load('ISBN:0759104808');
                  var viewer2 = new google.books.DefaultViewer(document.getElementById('viewerCanvas2'));
                  viewer2.load('ISBN:076199176X');
                }
          google.books.setOnLoadCallback(initialize);

  //DATA USA API AJAX Call; for some reason had difficulty getting it to work with a chart or graph, but was able to get it to print to the console so I left this code below to show.
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
        }
      });

//NEWS API to retrieve recent news about Asian-American representation in the news (there seems to be more relevant news closer to the bottom for some reason)
//news API key
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
//for loop for every article, returns a thumbnail pic, text, headline, byline and author
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
  //places html in the news section at the bottom of the first page
  $('.news-section').html(html);
  }
  });

//to close hamburger menu with cool JS function
  function myFunction(x) {
      x.classList.toggle("change");
  }



  });
