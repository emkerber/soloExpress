$(document).ready(function(){

  $('#balanceButton').on('click', function(){

    $.ajax({
      url: '/balance',
      method: 'GET'
    }).then(function(response){
      $("#appendBalance").empty();
      $('#appendBalance').append(response);
      console.log(response);
    }).fail(function(response){
      console.log('error', response);
    })

  })



});
