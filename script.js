
$(function () {
// background-color function
var currentHour = dayjs().format('H'); 

var rows = document.getElementsByClassName("row");
var rowNum = Array.from(rows).forEach(function(row) {
  rowNum = row.id;
  rowHour=parseInt(rowNum)
  if (rowNum) {
    if (rowNum === currentHour) {
      addClass(row, "present");
    } else if ((rowNum > currentHour) && (currentHour > rowNum-8)) {
      addClass(row, "future");
    } else if (rowNum < currentHour){
      addClass(row, "past");
    } 
  }
});

function addClass(element, classname) {
  element.classList.add(classname);
}

// code to display the current date in the header of the page.

var currentDay = dayjs().format('dddd, MMMM DD');
$('#currentDay').text(currentDay)


// click event for each timeblock
function task9() {
btn9 = $('#9').children('button')
btn9.on('click', function(event){
event.preventDefault();
tasktime = $('#9').children('div').text()
taskContent = $('#9').children().eq(1).val()

var hour_9 = {
    taskhour: tasktime,
    taskitem: taskContent
};

localStorage.setItem("hour_9", JSON.stringify(hour_9));

});

function renderMessage9(event) {
  var lastitem = JSON.parse(localStorage.getItem("hour_9"));
  $('#9').children().eq(1).val(lastitem.taskitem);
  if (!lastitem) {
    return;
  }
  }
renderMessage9();
}


function task10() {
  btn10 = $('#10').children('button')
  btn10.on('click', function(event){
  event.preventDefault();
  tasktime = $('#10').children('div').text()
  taskContent = $('#10').children().eq(1).val()
  
  var hour_10 = {
      taskhour: tasktime,
      taskitem: taskContent
  };
  
  localStorage.setItem("hour_10", JSON.stringify(hour_10));

  });
  
  function renderMessage10(event) {
    var lastitem = JSON.parse(localStorage.getItem("hour_10"));
    $('#10').children().eq(1).val(lastitem.taskitem);
    if (!lastitem) {
      return;
    }
    }
renderMessage10();
  }

  



  function task11() {
    btn11 = $('#11').children('button')
    btn11.on('click', function(event){
    event.preventDefault();
    tasktime = $('#11').children('div').text()
    taskContent = $('#11').children().eq(1).val()
    
    var hour_11 = {
        taskhour: tasktime,
        taskitem: taskContent
    };
    
    localStorage.setItem("hour_11", JSON.stringify(hour_11));
    });
    
    
    function renderMessage11(event) {
        var lastitem = JSON.parse(localStorage.getItem("hour_11"));
        $('#11').children().eq(1).val(lastitem.taskitem);
        if (!lastitem) {
          return;
        }
        }
    renderMessage11();
      }




    function task12() {
      btn12 = $('#12').children('button')
      btn12.on('click', function(event){
      event.preventDefault();
      tasktime = $('#12').children('div').text()
      taskContent = $('#12').children().eq(1).val()
      
      var hour_12 = {
          taskhour: tasktime,
          taskitem: taskContent
      };
      
      localStorage.setItem("hour_12", JSON.stringify(hour_12));
      });
      
      
      function renderMessage12(event) {
          var lastitem = JSON.parse(localStorage.getItem("hour_12"));
          $('#12').children().eq(1).val(lastitem.taskitem);
          if (!lastitem) {
            return;
          }
          }
      renderMessage12();
      
        }
        
  

      
    function task13() {
      btn13 = $('#13').children('button')
      btn13.on('click', function(event){
      event.preventDefault();
      tasktime = $('#13').children('div').text()
      taskContent = $('#13').children().eq(1).val()
      
      var hour_13 = {
          taskhour: tasktime,
          taskitem: taskContent
      };
      
      localStorage.setItem("hour_13", JSON.stringify(hour_13));
      });
      
      
      function renderMessage13(event) {
          var lastitem = JSON.parse(localStorage.getItem("hour_13"));
          $('#13').children().eq(1).val(lastitem.taskitem);
          if (!lastitem) {
            return;
          }
          }
      renderMessage13();
      
        }
        



      function task14() {
        btn14 = $('#14').children('button')
        btn14.on('click', function(event){
        event.preventDefault();
        tasktime = $('#14').children('div').text()
        taskContent = $('#14').children().eq(1).val()
        
        var hour_14 = {
            taskhour: tasktime,
            taskitem: taskContent
        };
        
        localStorage.setItem("hour_14", JSON.stringify(hour_14));
        });
        
        
        function renderMessage14(event) {
            var lastitem = JSON.parse(localStorage.getItem("hour_14"));
            $('#14').children().eq(1).val(lastitem.taskitem);
            if (!lastitem) {
              return;
            }
            }
        renderMessage14();
        
          }
          
       

        function task15() {
          btn15 = $('#15').children('button')
          btn15.on('click', function(event){
          event.preventDefault();
          tasktime = $('#15').children('div').text()
          taskContent = $('#15').children().eq(1).val()
          
          var hour_15 = {
              taskhour: tasktime,
              taskitem: taskContent
          };
          
          localStorage.setItem("hour_15", JSON.stringify(hour_15));
          });
          
          
          function renderMessage15(event) {
              var lastitem = JSON.parse(localStorage.getItem("hour_15"));
              $('#15').children().eq(1).val(lastitem.taskitem);
              if (!lastitem) {
                return;
              }
              }
          renderMessage15();
          
            }
            
        


          function task16() {
            btn16 = $('#16').children('button')
            btn16.on('click', function(event){
            event.preventDefault();
            tasktime = $('#16').children('div').text()
            taskContent = $('#16').children().eq(1).val()
            
            var hour_16 = {
                taskhour: tasktime,
                taskitem: taskContent
            };
            
            localStorage.setItem("hour_16", JSON.stringify(hour_16));
            });
            
            
            function renderMessage16(event) {
                var lastitem = JSON.parse(localStorage.getItem("hour_16"));
                $('#16').children().eq(1).val(lastitem.taskitem);
                if (!lastitem) {
                  return;
                }
                }
            renderMessage16();
            
              }

            function task17() {
              btn17 = $('#17').children('button')
              btn17.on('click', function(event){
              event.preventDefault();
              tasktime = $('#17').children('div').text()
              taskContent = $('#17').children().eq(1).val()
              
              var hour_17 = {
                  taskhour: tasktime,
                  taskitem: taskContent
              };
              
              localStorage.setItem("hour_17", JSON.stringify(hour_17));
              });
              
              
              function renderMessage17(event) {
                  var lastitem = JSON.parse(localStorage.getItem("hour_17"));
                  $('#17').children().eq(1).val(lastitem.taskitem);
                  if (!lastitem) {
                    return;
                  }
                  
                  }
              renderMessage17();
              
                }
                task17();
                task16();
                task9();
                task10();
                task11();
                task12();
                task13();
                task14();
                task15();
               
               
})