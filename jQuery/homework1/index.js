$('document').ready(function () {
    $('#firstbutton').click(function () {
        if ($(this).text() === 'Fade in') {
            $('#firstp').fadeIn();
            $(this).text('Fade out');
        } else {
            $('#firstp').fadeOut();
            $(this).text('Fade in');
        }
    });

    $('#secondbutton').click(function () {
        $('#secondp').append('<p class="newClass">This is a new paragraph appended to secondp.</p>');

    });

    $('#thirdbutton').click(function () {
        if ($('#thirdp').css('color') === 'rgb(0, 128, 0)') {
            $('#thirdp').css('color', 'red');
        } else {
            $('#thirdp').css('color', 'green'); // 
        }
    });

    $('#fourthbutton').click(function () {
        $('.sec1').toggle();
    });

    $('#rest').click(function () {
        $('.newClass').remove();
        $('.sec1').show();
        $('#thirdp').css('color', 'green');
        $('#firstp').fadeIn();
        $('#firstbutton').text('Fade out');

    });

});