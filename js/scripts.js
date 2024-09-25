$(function () {
    var now = new Date();
    var endDate = new Date();
    endDate.setDate(now.getDate() + 29); // Set the end date to 30 days from now

    // Format the end date to match the required format (MM/DD/YYYY HH:MM:SS)
    var month = endDate.getMonth() + 1; // Months are zero-based
    var day = endDate.getDate();
    var year = endDate.getFullYear();
    var hours = endDate.getHours();
    var minutes = endDate.getMinutes();
    var seconds = endDate.getSeconds();

    // Format the date string to MM/DD/YYYY HH:MM:SS
    var nextYear = month + '/' + day + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds;

    $('#timer').countdown({
        date: nextYear, // The end date set to 30 days from now
        offset: +2,
        day: 'Day',
        days: 'Days'
    }, function () {
        // This function will be called when the countdown ends
        // console.log("Countdown finished!");
    });
});


$(document).ready(function () {
    $('#contactForm').on('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Simulate form submission process (you can replace this with actual submission logic)
        // For example, you can use AJAX to send the form data to your backend

        // Show the success message
        $('#successMessage').fadeIn();

        // Optionally reset the form fields after showing the message
        $(this).trigger('reset');

        // If you want to hide the success message after a few seconds, uncomment the next lines:
        // setTimeout(function() {
        //     $('#successMessage').fadeOut();
        // }, 3000);
    });
});
