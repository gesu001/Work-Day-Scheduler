
$(function () {

  var timeDisplayEl = $('#currentDay')
  var btnEl = $('i');

function displayTime() {
var currentDay = dayjs().format('dddd, MMMM DD');
timeDisplayEl.text(currentDay);
}

function backgroundColor() {
  var currentHour = dayjs().format('H'); 
  var rows = document.getElementsByClassName("row");
  Array.from(rows).forEach(function(row) {
    var rowHour = row.id;
    if (rowHour) {
      if (rowHour === currentHour) {
        addClass(row, "present");
      } else if (rowHour > currentHour) {
        addClass(row, "future");
      } else if (rowHour < currentHour) {
        addClass(row, "past");
      } 
  }
  function addClass(element, classname) {
    element.classList.add(classname);
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
  var tasktime = $(this).parent().parent().attr('id')
  var task = localStorage.getItem(tasktime);
  $(this).parent().prev().val(task)
  if (!task) {
    return
  } 
}

readTaskFromStorage();

displayTime();
backgroundColor();

btnEl.on('click', handleTaskSubmit);

})
