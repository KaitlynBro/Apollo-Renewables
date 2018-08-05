(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// changes colour of active pages menu link
$(document).ready(function () {
  $("[href]").each(function () {
    if (this.href == window.location.href) {
      $(this).addClass("active");
    }
  });
});

$(document).ready(function () {
  var ELECTRICITY_GROWTH_RATE = 1.06;

  $("#range").on("input change", rangeUpdated);
  $("#current-monthly-cost").on("input change", costUpdated);

  function costUpdated() {
    var currentCost = this.value;
    var years = $("#range").val();
    calculateTotalCost(currentCost, years);
  }

  function rangeUpdated() {
    var years = this.value;
    var currentCost = $("#current-monthly-cost").val();
    calculateTotalCost(currentCost, years);
  }

  function calculateTotalCost(currentCost, years) {
    if (!currentCost || !years) return;
    var totalCost = currentCost * 12 * Math.pow(ELECTRICITY_GROWTH_RATE, years);
    $(".home-range-result").text("$" + Math.round(totalCost));
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0EsRUFBRSxRQUFGLEVBQVksS0FBWixDQUFrQixZQUFXO0FBQ3pCLElBQUUsUUFBRixFQUFZLElBQVosQ0FBaUIsWUFBVztBQUN4QixRQUFJLEtBQUssSUFBTCxJQUFhLE9BQU8sUUFBUCxDQUFnQixJQUFqQyxFQUF1QztBQUNuQyxRQUFFLElBQUYsRUFBUSxRQUFSLENBQWlCLFFBQWpCO0FBQ0g7QUFDSixHQUpEO0FBS0gsQ0FORDs7QUFRQSxFQUFHLFFBQUgsRUFBYyxLQUFkLENBQW9CLFlBQVc7QUFDN0IsTUFBSSwwQkFBMEIsSUFBOUI7O0FBRUEsSUFBRSxRQUFGLEVBQVksRUFBWixDQUFlLGNBQWYsRUFBK0IsWUFBL0I7QUFDQSxJQUFFLHVCQUFGLEVBQTJCLEVBQTNCLENBQThCLGNBQTlCLEVBQThDLFdBQTlDOztBQUVBLFdBQVMsV0FBVCxHQUF1QjtBQUNyQixRQUFJLGNBQWMsS0FBSyxLQUF2QjtBQUNBLFFBQUksUUFBUSxFQUFFLFFBQUYsRUFBWSxHQUFaLEVBQVo7QUFDQSx1QkFBbUIsV0FBbkIsRUFBZ0MsS0FBaEM7QUFDRDs7QUFFRCxXQUFTLFlBQVQsR0FBd0I7QUFDdEIsUUFBSSxRQUFRLEtBQUssS0FBakI7QUFDQSxRQUFJLGNBQWMsRUFBRSx1QkFBRixFQUEyQixHQUEzQixFQUFsQjtBQUNBLHVCQUFtQixXQUFuQixFQUFnQyxLQUFoQztBQUNEOztBQUVELFdBQVMsa0JBQVQsQ0FBNEIsV0FBNUIsRUFBeUMsS0FBekMsRUFBZ0Q7QUFDOUMsUUFBSSxDQUFDLFdBQUQsSUFBZ0IsQ0FBQyxLQUFyQixFQUE0QjtBQUM1QixRQUFJLFlBQWEsY0FBYyxFQUFmLEdBQXFCLEtBQUssR0FBTCxDQUFTLHVCQUFULEVBQWtDLEtBQWxDLENBQXJDO0FBQ0EsTUFBRSxvQkFBRixFQUF3QixJQUF4QixDQUE2QixNQUFNLEtBQUssS0FBTCxDQUFXLFNBQVgsQ0FBbkM7QUFDRDtBQUNGLENBdkJEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gY2hhbmdlcyBjb2xvdXIgb2YgYWN0aXZlIHBhZ2VzIG1lbnUgbGlua1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgJChcIltocmVmXVwiKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5ocmVmID09IHdpbmRvdy5sb2NhdGlvbi5ocmVmKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuJCggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcbiAgdmFyIEVMRUNUUklDSVRZX0dST1dUSF9SQVRFID0gMS4wNlxuICBcbiAgJChcIiNyYW5nZVwiKS5vbihcImlucHV0IGNoYW5nZVwiLCByYW5nZVVwZGF0ZWQpO1xuICAkKFwiI2N1cnJlbnQtbW9udGhseS1jb3N0XCIpLm9uKFwiaW5wdXQgY2hhbmdlXCIsIGNvc3RVcGRhdGVkKTtcblxuICBmdW5jdGlvbiBjb3N0VXBkYXRlZCgpIHtcbiAgICB2YXIgY3VycmVudENvc3QgPSB0aGlzLnZhbHVlICAgIFxuICAgIHZhciB5ZWFycyA9ICQoXCIjcmFuZ2VcIikudmFsKCk7XG4gICAgY2FsY3VsYXRlVG90YWxDb3N0KGN1cnJlbnRDb3N0LCB5ZWFycykgICAgXG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHJhbmdlVXBkYXRlZCgpIHtcbiAgICB2YXIgeWVhcnMgPSB0aGlzLnZhbHVlO1xuICAgIHZhciBjdXJyZW50Q29zdCA9ICQoXCIjY3VycmVudC1tb250aGx5LWNvc3RcIikudmFsKCk7XG4gICAgY2FsY3VsYXRlVG90YWxDb3N0KGN1cnJlbnRDb3N0LCB5ZWFycylcbiAgfVxuICBcbiAgZnVuY3Rpb24gY2FsY3VsYXRlVG90YWxDb3N0KGN1cnJlbnRDb3N0LCB5ZWFycykge1xuICAgIGlmICghY3VycmVudENvc3QgfHwgIXllYXJzKSByZXR1cm47XG4gICAgdmFyIHRvdGFsQ29zdCA9IChjdXJyZW50Q29zdCAqIDEyKSAqIE1hdGgucG93KEVMRUNUUklDSVRZX0dST1dUSF9SQVRFLCB5ZWFycyk7XG4gICAgJChcIi5ob21lLXJhbmdlLXJlc3VsdFwiKS50ZXh0KFwiJFwiICsgTWF0aC5yb3VuZCh0b3RhbENvc3QpKVxuICB9XG59KTsiXX0=
