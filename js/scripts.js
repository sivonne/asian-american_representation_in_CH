$(document).ready(function(){
    console.log('scripts loaded');

    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }














    //DATA USA API AJAX Call

  //   var url =
  //   'https://api.datausa.io/api/?sort=desc&force=acs.yg_race&show=geo&sumlevel=all&year=all&geo=16000US3711800';
  // //   var data = [];
  //   var html = '';
  //   var years = [];
  //     $.ajax({
  //       type:'GET',
  //       url:url,
  //       dataType:'json',
  //       async:true,
  //       data:data,
  //       success:function(data){
  //         console.log(data);
  //         //charts js
  //         var ctx = $("#myChart");
  //         var myChart = new Chart(ctx,{
  //         type: 'pie',
  //         data:{
  //           datasets: [{
  //           data: [10, 20, 30]
  //   }],
  //         },
  //         options: options
  //     });
  //   }
  // });
  var dataPoints = [];
  var chart = new CanvasJS.Chart("chartContainer",{
      title:{
          text:"Rendering Chart with dataPoints from External JSON"
      },
      data: [{
          type: "line",
          dataPoints : dataPoints,
      }]
  });
  $.getJSON("https://api.datausa.io/api/?sort=desc&force=acs.yg_race&show=geo&sumlevel=all&year=all&geo=16000US3711800", function(data) {
      $.each(data, function(key, value){
          dataPoints.push({x: value[0], y: parseInt(value[1])});
      });
      chart.render();
  });









//           var ctx = $("#myChart");
//           var myChart = new Chart(ctx, {
//           type: 'bar',
//           dataType:'json',
//           async:true,
//           data: {
//               labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//               datasets: [{
//                   label: '# of Votes',
//                   data: [],
//                   backgroundColor: [
//                       'rgba(255, 99, 132, 0.2)',
//                       'rgba(54, 162, 235, 0.2)',
//                       'rgba(255, 206, 86, 0.2)',
//                       'rgba(75, 192, 192, 0.2)',
//                       'rgba(153, 102, 255, 0.2)',
//                       'rgba(255, 159, 64, 0.2)'
//                   ],
//                   borderColor: [
//                       'rgba(255,99,132,1)',
//                       'rgba(54, 162, 235, 1)',
//                       'rgba(255, 206, 86, 1)',
//                       'rgba(75, 192, 192, 1)',
//                       'rgba(153, 102, 255, 1)',
//                       'rgba(255, 159, 64, 1)'
//                   ],
//                   borderWidth: 1
//               }]
//           },
//           options: {
//               scales: {
//                   yAxes: [{
//                       ticks: {
//                           beginAtZero:true
//                       }
//                   }]
//               }
//           }
//       });
// }
// });


//Google Books API
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












    // var url =
    // 'http://api.datausa.io/attrs/search/?q=chapel+hill+asian';
    // var data = [];
    // var html = '';
    // var i = '';
    // var articles = [];
    //   $.ajax({
    //     type:'GET',
    //     url:url,
    //     dataType:'json',
    //     async:true,
    //     data:data,
    //     success:function(data){
    //       console.log(data);
    //       articles = data.articles;
    //
    //       articles.forEach(function(article){
    //       console.log(article.title);
    //       html += '<div class="latest-news flex">';
    //         html +='<img class="thumbnail" src="'+ article.urlToImage + '">';
    //         html += '<div class="text">';
    //         //must have url to actual article for copyright
    //         html += '<a href="' + article.url + '" target="_blank">';
    //         html += '<h2 class="headline">' + article.title + '</h2>';
    //         html += '<h4 class="byline">by '+ article.author + ', <em>' + article.source.name + '</em></h4>';
    //         html += '</a></div';
    //       html += '</div>';
    //
    // });
    //   $('#census-section').html(html);
    // }
    // });
    //














//dropdown JS

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function dropsDown() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }
// dropsDown('#myDropdown');
// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

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
}














  });
