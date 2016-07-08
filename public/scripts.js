$(document).ready(function() {

    $('#balanceButton').on('click', function() {

        $.ajax({
            url: '/balance',
            method: 'GET'
        }).then(function(response) {
            $('#appendBalance').empty();
            $('#appendBalance').append(response).hide().fadeIn();
            console.log(response);
        }).fail(function(response) {
            console.log('error', response);
        });

    });

});
