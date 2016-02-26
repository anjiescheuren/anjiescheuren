$(function() {
  var apiRoot1 = 'http://api.giphy.com/v1/gifs/3ornjMThnISHhr4xKE?api_key=dc6zaTOxFJmzC';
  var apiRoot2 = 'http://api.giphy.com/v1/gifs/3ornjRMoa2QP6vhT7a?api_key=dc6zaTOxFJmzC';

  $.ajax({
            url: apiRoot1,
            method: "GET",
            data: {},
            dataType: "json",
            jsonCallback: "info"
        })
  .done(function(data) {
    var url = data.data.images.original.url;
    console.log(url);
    $('.goodwill').html('<img class="goodwill" src="/images/goodwill.gif">');
  })

  $.ajax({
            url: apiRoot2,
            method: "GET",
            data: {},
            dataType: "json",
            jsonCallback: "info"
        })
  .done(function(data) {
    var url2 = data.data.images.original.url;
    console.log(url2);
    $('.gif').html('<img class="gif" src="/images/slideshow.gif">');
  })
});


