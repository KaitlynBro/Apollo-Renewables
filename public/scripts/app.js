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

//calculation set #1 - remove if peter says calc is wrong

// $( document ).ready(function() {
//   var ELECTRICITY_GROWTH_RATE = 1.06

//   $("#range").on("input change", rangeUpdated);
//   $("#current-monthly-cost").on("input change", costUpdated);

//   function costUpdated() {
//     var currentCost = this.value    
//     var years = $("#range").val();
//     calculateTotalCost(currentCost, years)    
//   }

//   function rangeUpdated() {
//     var years = this.value;
//     var currentCost = $("#current-monthly-cost").val();
//     calculateTotalCost(currentCost, years)
//   }

//   function calculateTotalCost(currentCost, years) {
//     if (!currentCost || !years) return;
//     var totalCost = (currentCost * 12) * Math.pow(ELECTRICITY_GROWTH_RATE, years);
//     $(".home-range-result").text("$" + Math.round(totalCost))
//   }
// });

// calculation set #2 - refactor if peter says this calc is better/correct

$(document).ready(function () {
  var ELECTRICITY_GROWTH_RATE = 1.06;

  $("#range").on("input change", rangeUpdated);
  $("#current-monthly-cost").on("input change", costUpdated);

  function costUpdated() {
    var currentCost = this.value;
    var years = $("#range").val();
    updateTotalCost(currentCost, years);
  }

  function rangeUpdated() {
    var years = this.value;
    var currentCost = $("#current-monthly-cost").val();
    updateTotalCost(currentCost, years);
  }

  function calculateTotalCost(currentCost, years) {
    if (!currentCost || !years) return;
    var costInSelectedYear = currentCost * 12 * Math.pow(ELECTRICITY_GROWTH_RATE, years - 1);
    // https://math.stackexchange.com/questions/1997969/formula-for-calculating-cumulative-cost-when-price-increases-each-year
    var totalCost = currentCost * 12 * ((Math.pow(ELECTRICITY_GROWTH_RATE, years) - 1) / (ELECTRICITY_GROWTH_RATE - 1));
    return Math.round(totalCost);
  }

  function updateTotalCost(currentCost, years) {
    if (!currentCost || !years) return;
    var totalCost = calculateTotalCost(currentCost, years);
    $(".home-range-result").text("$" + totalCost);
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0EsRUFBRSxRQUFGLEVBQVksS0FBWixDQUFrQixZQUFXO0FBQ3pCLElBQUUsUUFBRixFQUFZLElBQVosQ0FBaUIsWUFBVztBQUN4QixRQUFJLEtBQUssSUFBTCxJQUFhLE9BQU8sUUFBUCxDQUFnQixJQUFqQyxFQUF1QztBQUNuQyxRQUFFLElBQUYsRUFBUSxRQUFSLENBQWlCLFFBQWpCO0FBQ0g7QUFDSixHQUpEO0FBS0gsQ0FORDs7QUFRQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFHLFFBQUgsRUFBYyxLQUFkLENBQW9CLFlBQVc7QUFDN0IsTUFBSSwwQkFBMEIsSUFBOUI7O0FBRUEsSUFBRSxRQUFGLEVBQVksRUFBWixDQUFlLGNBQWYsRUFBK0IsWUFBL0I7QUFDQSxJQUFFLHVCQUFGLEVBQTJCLEVBQTNCLENBQThCLGNBQTlCLEVBQThDLFdBQTlDOztBQUVBLFdBQVMsV0FBVCxHQUF1QjtBQUNyQixRQUFJLGNBQWMsS0FBSyxLQUF2QjtBQUNBLFFBQUksUUFBUSxFQUFFLFFBQUYsRUFBWSxHQUFaLEVBQVo7QUFDQSxvQkFBZ0IsV0FBaEIsRUFBNkIsS0FBN0I7QUFDRDs7QUFFRCxXQUFTLFlBQVQsR0FBd0I7QUFDdEIsUUFBSSxRQUFRLEtBQUssS0FBakI7QUFDQSxRQUFJLGNBQWMsRUFBRSx1QkFBRixFQUEyQixHQUEzQixFQUFsQjtBQUNBLG9CQUFnQixXQUFoQixFQUE2QixLQUE3QjtBQUNEOztBQUVELFdBQVMsa0JBQVQsQ0FBNEIsV0FBNUIsRUFBeUMsS0FBekMsRUFBZ0Q7QUFDOUMsUUFBSSxDQUFDLFdBQUQsSUFBZ0IsQ0FBQyxLQUFyQixFQUE0QjtBQUM1QixRQUFJLHFCQUFzQixjQUFjLEVBQWYsR0FBcUIsS0FBSyxHQUFMLENBQVMsdUJBQVQsRUFBa0MsUUFBUSxDQUExQyxDQUE5QztBQUNBO0FBQ0EsUUFBSSxZQUFhLGNBQWMsRUFBZixJQUFzQixDQUFDLEtBQUssR0FBTCxDQUFTLHVCQUFULEVBQWtDLEtBQWxDLElBQTJDLENBQTVDLEtBQWtELDBCQUEwQixDQUE1RSxDQUF0QixDQUFoQjtBQUNBLFdBQU8sS0FBSyxLQUFMLENBQVcsU0FBWCxDQUFQO0FBQ0Q7O0FBRUQsV0FBUyxlQUFULENBQXlCLFdBQXpCLEVBQXNDLEtBQXRDLEVBQTZDO0FBQzNDLFFBQUksQ0FBQyxXQUFELElBQWdCLENBQUMsS0FBckIsRUFBNEI7QUFDNUIsUUFBSSxZQUFZLG1CQUFtQixXQUFuQixFQUFnQyxLQUFoQyxDQUFoQjtBQUNBLE1BQUUsb0JBQUYsRUFBd0IsSUFBeEIsQ0FBNkIsTUFBTSxTQUFuQztBQUNEO0FBQ0YsQ0EvQkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBjaGFuZ2VzIGNvbG91ciBvZiBhY3RpdmUgcGFnZXMgbWVudSBsaW5rXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAkKFwiW2hyZWZdXCIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmhyZWYgPT0gd2luZG93LmxvY2F0aW9uLmhyZWYpIHtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuXG4vL2NhbGN1bGF0aW9uIHNldCAjMSAtIHJlbW92ZSBpZiBwZXRlciBzYXlzIGNhbGMgaXMgd3JvbmdcblxuLy8gJCggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcbi8vICAgdmFyIEVMRUNUUklDSVRZX0dST1dUSF9SQVRFID0gMS4wNlxuICBcbi8vICAgJChcIiNyYW5nZVwiKS5vbihcImlucHV0IGNoYW5nZVwiLCByYW5nZVVwZGF0ZWQpO1xuLy8gICAkKFwiI2N1cnJlbnQtbW9udGhseS1jb3N0XCIpLm9uKFwiaW5wdXQgY2hhbmdlXCIsIGNvc3RVcGRhdGVkKTtcblxuLy8gICBmdW5jdGlvbiBjb3N0VXBkYXRlZCgpIHtcbi8vICAgICB2YXIgY3VycmVudENvc3QgPSB0aGlzLnZhbHVlICAgIFxuLy8gICAgIHZhciB5ZWFycyA9ICQoXCIjcmFuZ2VcIikudmFsKCk7XG4vLyAgICAgY2FsY3VsYXRlVG90YWxDb3N0KGN1cnJlbnRDb3N0LCB5ZWFycykgICAgXG4vLyAgIH1cbiAgXG4vLyAgIGZ1bmN0aW9uIHJhbmdlVXBkYXRlZCgpIHtcbi8vICAgICB2YXIgeWVhcnMgPSB0aGlzLnZhbHVlO1xuLy8gICAgIHZhciBjdXJyZW50Q29zdCA9ICQoXCIjY3VycmVudC1tb250aGx5LWNvc3RcIikudmFsKCk7XG4vLyAgICAgY2FsY3VsYXRlVG90YWxDb3N0KGN1cnJlbnRDb3N0LCB5ZWFycylcbi8vICAgfVxuICBcbi8vICAgZnVuY3Rpb24gY2FsY3VsYXRlVG90YWxDb3N0KGN1cnJlbnRDb3N0LCB5ZWFycykge1xuLy8gICAgIGlmICghY3VycmVudENvc3QgfHwgIXllYXJzKSByZXR1cm47XG4vLyAgICAgdmFyIHRvdGFsQ29zdCA9IChjdXJyZW50Q29zdCAqIDEyKSAqIE1hdGgucG93KEVMRUNUUklDSVRZX0dST1dUSF9SQVRFLCB5ZWFycyk7XG4vLyAgICAgJChcIi5ob21lLXJhbmdlLXJlc3VsdFwiKS50ZXh0KFwiJFwiICsgTWF0aC5yb3VuZCh0b3RhbENvc3QpKVxuLy8gICB9XG4vLyB9KTtcblxuLy8gY2FsY3VsYXRpb24gc2V0ICMyIC0gcmVmYWN0b3IgaWYgcGV0ZXIgc2F5cyB0aGlzIGNhbGMgaXMgYmV0dGVyL2NvcnJlY3RcblxuJCggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcbiAgdmFyIEVMRUNUUklDSVRZX0dST1dUSF9SQVRFID0gMS4wNjtcbiAgXG4gICQoXCIjcmFuZ2VcIikub24oXCJpbnB1dCBjaGFuZ2VcIiwgcmFuZ2VVcGRhdGVkKTtcbiAgJChcIiNjdXJyZW50LW1vbnRobHktY29zdFwiKS5vbihcImlucHV0IGNoYW5nZVwiLCBjb3N0VXBkYXRlZCk7XG5cbiAgZnVuY3Rpb24gY29zdFVwZGF0ZWQoKSB7XG4gICAgdmFyIGN1cnJlbnRDb3N0ID0gdGhpcy52YWx1ZTtcbiAgICB2YXIgeWVhcnMgPSAkKFwiI3JhbmdlXCIpLnZhbCgpO1xuICAgIHVwZGF0ZVRvdGFsQ29zdChjdXJyZW50Q29zdCwgeWVhcnMpO1xuICB9XG4gIFxuICBmdW5jdGlvbiByYW5nZVVwZGF0ZWQoKSB7XG4gICAgdmFyIHllYXJzID0gdGhpcy52YWx1ZTtcbiAgICB2YXIgY3VycmVudENvc3QgPSAkKFwiI2N1cnJlbnQtbW9udGhseS1jb3N0XCIpLnZhbCgpO1xuICAgIHVwZGF0ZVRvdGFsQ29zdChjdXJyZW50Q29zdCwgeWVhcnMpO1xuICB9XG4gIFxuICBmdW5jdGlvbiBjYWxjdWxhdGVUb3RhbENvc3QoY3VycmVudENvc3QsIHllYXJzKSB7XG4gICAgaWYgKCFjdXJyZW50Q29zdCB8fCAheWVhcnMpIHJldHVybjtcbiAgICB2YXIgY29zdEluU2VsZWN0ZWRZZWFyID0gKGN1cnJlbnRDb3N0ICogMTIpICogTWF0aC5wb3coRUxFQ1RSSUNJVFlfR1JPV1RIX1JBVEUsIHllYXJzIC0gMSk7XG4gICAgLy8gaHR0cHM6Ly9tYXRoLnN0YWNrZXhjaGFuZ2UuY29tL3F1ZXN0aW9ucy8xOTk3OTY5L2Zvcm11bGEtZm9yLWNhbGN1bGF0aW5nLWN1bXVsYXRpdmUtY29zdC13aGVuLXByaWNlLWluY3JlYXNlcy1lYWNoLXllYXJcbiAgICB2YXIgdG90YWxDb3N0ID0gKGN1cnJlbnRDb3N0ICogMTIpICogKChNYXRoLnBvdyhFTEVDVFJJQ0lUWV9HUk9XVEhfUkFURSwgeWVhcnMpIC0gMSkgLyAoRUxFQ1RSSUNJVFlfR1JPV1RIX1JBVEUgLSAxKSlcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh0b3RhbENvc3QpXG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHVwZGF0ZVRvdGFsQ29zdChjdXJyZW50Q29zdCwgeWVhcnMpIHtcbiAgICBpZiAoIWN1cnJlbnRDb3N0IHx8ICF5ZWFycykgcmV0dXJuO1xuICAgIHZhciB0b3RhbENvc3QgPSBjYWxjdWxhdGVUb3RhbENvc3QoY3VycmVudENvc3QsIHllYXJzKTtcbiAgICAkKFwiLmhvbWUtcmFuZ2UtcmVzdWx0XCIpLnRleHQoXCIkXCIgKyB0b3RhbENvc3QpOyAgICBcbiAgfSAgXG59KTtcbiJdfQ==
