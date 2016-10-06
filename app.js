var calendar = angular.module('calApp', []);

calendar.controller('CalendarCtrl', function CalendarController($scope) {
    function init() {
        var data = [];
        for (var i = 1; i <= 31; i++) {
            data.push({
                day: i,
                message: '',
                class : "calendar-day"
            });
        }
        $scope.days = data;
      
        $scope.calendar = {
          activeDay : -1,
          hideInput : true
        }
    }

    init();
  
    $scope.dayClick = function(index) {
      // change the background color to grey. change unselected days back to white.
      for(var i = 0; i < $scope.days.length; i++) {
        if(i == index) {
          $scope.days[index].class = "calendar-day clicked";
        } else {
          $scope.days[i].class = "calendar-day";
        }
      }
      
      // set the input's default text to this day's message
      $scope.calendar.inputText = $scope.days[index].message;
      $scope.calendar.activeDay = index;
      
      // show input bar
      $scope.calendar.hideInput = false;
    };
    
    $scope.done = function() { 
      $scope.days[$scope.calendar.activeDay].class = "calendar-day";
      $scope.calendar.activeDay = -1;
      $scope.calendar.hideInput = true;
    };
});

calendar.filter('dayOfWeek', function () {
  return function(input) {
    var weekDay = "";
    switch (input%7) {
    case 0:
        weekDay = "Sun";
        break;
    case 1:
        weekDay = "Mon";
        break;
    case 2:
        weekDay = "Tue";
        break;
    case 3:
        weekDay = "Wed";
        break;
    case 4:
        weekDay = "Thu";
        break;
    case 5:
        weekDay = "Fri";
        break;
    case 6:
        weekDay = "Sat";
    }
    return input + " " + weekDay; 
  }
});