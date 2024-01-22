
$(function () {
    // Added Current Day header with Dayjs
    $("#currentDay").text(dayjs().format('dddd, MMMM D, YYYY'));
    // Time Block function to display past, present, and future hours
    $(".time-block").each(function(){
      var currentHour = parseInt(dayjs().format('H'));
      var blockHour = parseInt($(this).attr('id').split("-")[1]);
      console.log(currentHour);
      console.log(blockHour)

      if(blockHour < currentHour){
        $(this).addClass("past");
      }
      else if(blockHour === currentHour){
        $(this).removeClass("past");
        $(this).addClass('present');
      }
      else{
        $(this).removeClass("past");
        $(this).removeClass('present');
        $(this).addClass("future");
      }
    })
    // Click event for Save Button
    $(".saveBtn").on("click", function(){
      var text = $(this).siblings(".description").val();
      var hour = $(this).parent().attr("id");
      // Hourly Local storage input saved
      localStorage.setItem(hour, text);
    })

    $("#hour-9 .description").val(localStorage.getItem('hour-9'));
    $("#hour-10 .description").val(localStorage.getItem('hour-10'));
    $("#hour-11 .description").val(localStorage.getItem('hour-11'));
    $("#hour-12 .description").val(localStorage.getItem('hour-12'));
    $("#hour-13 .description").val(localStorage.getItem('hour-13'));
    $("#hour-14 .description").val(localStorage.getItem('hour-14'));
    $("#hour-15 .description").val(localStorage.getItem('hour-15'));
    $("#hour-16 .description").val(localStorage.getItem('hour-16'));
    $("#hour-17 .description").val(localStorage.getItem('hour-17'));
  });
  