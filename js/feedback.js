$(document).ready(function () {

    //list of areas
    var areaNames = [
        "Orchard",
        "Bugis",
        "Marsiling",
        "Yew Tee",
        "Jurong East",
        "Paya Lebar"];

    $("#id_area").autocomplete({
        source: areaNames
    });

    //datepicker functionality
    $("#id_last_visit").datepicker(
            {minDate: -360, maxDate: "+0D", dateFormat: "dd/mm/yy"});

    $.fn.raty.defaults.path = 'js/img';

    $('#id_rating').raty({
        cancel: false,
        scoreName: 'rate_us',
        number: 5,
        score: 3
    });

    $("#slider").slider({
        value: 3,
        min: 0,
        max: 8,
        step: 1,
        slide: function (event, ui) {
            $("#num").val(ui.value);
        }
    });
    $("#num").val($("#slider").slider("value"));

    $("form").validate({
        rules: {
            visitor_name: {
                required: true
            },
            area: {
                required: true
            },
            visitor_comments: {
                required: true
            },
            last_visit: {
                required: true,
                pattern: /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/
            }
        },
        messages: {
            visitor_name: {
                required: "Please enter your name"
            },
            area: {
                required: "Please enter your area."
            },
            visitor_comments: {
                required: "Please enter your comments."
            },
            last_visit: {
                required: "Please enter your last visit",
                pattern: "Please enter the correct format DD/MM/YYYY"
            }
        },
        submitHandler: function () {
            return true;
        }
    });

});



