

var row1 = document.querySelector('#hour-0')
var row2 = document.querySelector('#hour-1')
var row3 = document.querySelector('#hour-2')
var row4 = document.querySelector('#hour-3')
var row5 = document.querySelector('#hour-4')
var row6 = document.querySelector('#hour-5')
var row7 = document.querySelector('#hour-6')
var row8 = document.querySelector('#hour-7')
var row9 = document.querySelector('#hour-8')


$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));


$('#hour-0 .description').val(localStorage.getItem('hour-0'));
$('#hour-1 .description').val(localStorage.getItem('hour-1'));
$('#hour-2 .description').val(localStorage.getItem('hour-2'));
$('#hour-3 .description').val(localStorage.getItem('hour-3'));
$('#hour-4 .description').val(localStorage.getItem('hour-4'));
$('#hour-5 .description').val(localStorage.getItem('hour-5'));
$('#hour-6 .description').val(localStorage.getItem('hour-6'));
$('#hour-7 .description').val(localStorage.getItem('hour-7'));
$('#hour-8 .description').val(localStorage.getItem('hour-8'));

function timeTracker () {
    var currentHour = moment().hour()
    $(".time-row").each(function () {
        var rowHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log( rowHour, currentHour)
    })
    if (rowHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }
    else if (rowHour === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
    }
    else {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
    }
    timeTracker();
}