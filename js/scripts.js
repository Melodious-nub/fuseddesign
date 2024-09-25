$(function () {
    // Set the end date to 1st November 2024
    var endDate = new Date(2024, 10, 1, 0, 0, 0); // November is month 10 because months are zero-based

    // Format the end date to match the required format (MM/DD/YYYY HH:MM:SS)
    var month = endDate.getMonth() + 1; // Months are zero-based, so we add 1
    var day = endDate.getDate();
    var year = endDate.getFullYear();
    var hours = endDate.getHours();
    var minutes = endDate.getMinutes();
    var seconds = endDate.getSeconds();

    // Format the date string to MM/DD/YYYY HH:MM:SS
    var formattedDate = month + '/' + day + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds;

    $('#timer').countdown({
        date: formattedDate, // Countdown to 1st November 2024
        offset: +2,          // Adjust offset as needed for your timezone
        day: 'Day',
        days: 'Days'
    }, function () {
        // This function will be called when the countdown ends
        // console.log("Countdown finished!");
    });
});