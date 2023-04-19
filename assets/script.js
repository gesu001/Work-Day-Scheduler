$(function () {
  var timeDisplayEl = $('#currentDay')
  var btnEl = $('i');
  
  function displayTime() {
  var currentDay = dayjs().format('dddd, MMMM DD');
  timeDisplayEl.text(currentDay);
  }
  
  function backgroundColor () {
    var rows = document.getElementsByClassName("row");
    var currentHour = parseInt(dayjs().format('H')); 
    
    Array.from(rows).forEach(row => {
        var rowId = row.id;
        var rowHour = parseInt(rowId.split("_")[1]);
        
        if (currentHour === rowHour) {
          row.classList.add("present") 
        } else if (currentHour < rowHour) {
          row.classList.add("future")
        } else if (currentHour > rowHour) {
          row.classList.add("past")
        }
    })
  }
  
  function handleTaskSubmit(event){
    event.preventDefault();
    var tasktime = $(this).parent().parent().attr('id')
    var taskContent  = $(this).parent().prev().val().trim()
    if (!taskContent){
      return;
    }
    localStorage.setItem(tasktime, taskContent);
  }
  
  function readTaskFromStorage() {
    var textEl = $('textarea')
    textEl.each(function(){
      var key = $(this).parent().attr('id')
      var value = localStorage.getItem(key)
      $(this).text(value);
      if (!value) {
        return
      }
  })
}
  readTaskFromStorage();
  displayTime();
  backgroundColor ()
  btnEl.on('click', handleTaskSubmit);
  })
  