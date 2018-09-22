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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0EsRUFBRSxRQUFGLEVBQVksS0FBWixDQUFrQixZQUFXO0FBQ3pCLElBQUUsUUFBRixFQUFZLElBQVosQ0FBaUIsWUFBVztBQUN4QixRQUFJLEtBQUssSUFBTCxJQUFhLE9BQU8sUUFBUCxDQUFnQixJQUFqQyxFQUF1QztBQUNuQyxRQUFFLElBQUYsRUFBUSxRQUFSLENBQWlCLFFBQWpCO0FBQ0g7QUFDSixHQUpEO0FBS0gsQ0FORDs7QUFTQSxFQUFHLFFBQUgsRUFBYyxLQUFkLENBQW9CLFlBQVc7QUFDN0IsTUFBSSwwQkFBMEIsSUFBOUI7O0FBRUEsSUFBRSxRQUFGLEVBQVksRUFBWixDQUFlLGNBQWYsRUFBK0IsWUFBL0I7QUFDQSxJQUFFLHVCQUFGLEVBQTJCLEVBQTNCLENBQThCLGNBQTlCLEVBQThDLFdBQTlDOztBQUVBLFdBQVMsV0FBVCxHQUF1QjtBQUNyQixRQUFJLGNBQWMsS0FBSyxLQUF2QjtBQUNBLFFBQUksUUFBUSxFQUFFLFFBQUYsRUFBWSxHQUFaLEVBQVo7QUFDQSxvQkFBZ0IsV0FBaEIsRUFBNkIsS0FBN0I7QUFDRDs7QUFFRCxXQUFTLFlBQVQsR0FBd0I7QUFDdEIsUUFBSSxRQUFRLEtBQUssS0FBakI7QUFDQSxRQUFJLGNBQWMsRUFBRSx1QkFBRixFQUEyQixHQUEzQixFQUFsQjtBQUNBLG9CQUFnQixXQUFoQixFQUE2QixLQUE3QjtBQUNEOztBQUVELFdBQVMsa0JBQVQsQ0FBNEIsV0FBNUIsRUFBeUMsS0FBekMsRUFBZ0Q7QUFDOUMsUUFBSSxDQUFDLFdBQUQsSUFBZ0IsQ0FBQyxLQUFyQixFQUE0QjtBQUM1QixRQUFJLHFCQUFzQixjQUFjLEVBQWYsR0FBcUIsS0FBSyxHQUFMLENBQVMsdUJBQVQsRUFBa0MsUUFBUSxDQUExQyxDQUE5QztBQUNBO0FBQ0EsUUFBSSxZQUFhLGNBQWMsRUFBZixJQUFzQixDQUFDLEtBQUssR0FBTCxDQUFTLHVCQUFULEVBQWtDLEtBQWxDLElBQTJDLENBQTVDLEtBQWtELDBCQUEwQixDQUE1RSxDQUF0QixDQUFoQjtBQUNBLFdBQU8sS0FBSyxLQUFMLENBQVcsU0FBWCxDQUFQO0FBQ0Q7O0FBRUQsV0FBUyxlQUFULENBQXlCLFdBQXpCLEVBQXNDLEtBQXRDLEVBQTZDO0FBQzNDLFFBQUksQ0FBQyxXQUFELElBQWdCLENBQUMsS0FBckIsRUFBNEI7QUFDNUIsUUFBSSxZQUFZLG1CQUFtQixXQUFuQixFQUFnQyxLQUFoQyxDQUFoQjtBQUNBLE1BQUUsb0JBQUYsRUFBd0IsSUFBeEIsQ0FBNkIsTUFBTSxTQUFuQztBQUNEO0FBQ0YsQ0EvQkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBjaGFuZ2VzIGNvbG91ciBvZiBhY3RpdmUgcGFnZXMgbWVudSBsaW5rXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAkKFwiW2hyZWZdXCIpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmhyZWYgPT0gd2luZG93LmxvY2F0aW9uLmhyZWYpIHtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuXG5cbiQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKSB7XG4gIHZhciBFTEVDVFJJQ0lUWV9HUk9XVEhfUkFURSA9IDEuMDY7XG4gIFxuICAkKFwiI3JhbmdlXCIpLm9uKFwiaW5wdXQgY2hhbmdlXCIsIHJhbmdlVXBkYXRlZCk7XG4gICQoXCIjY3VycmVudC1tb250aGx5LWNvc3RcIikub24oXCJpbnB1dCBjaGFuZ2VcIiwgY29zdFVwZGF0ZWQpO1xuXG4gIGZ1bmN0aW9uIGNvc3RVcGRhdGVkKCkge1xuICAgIHZhciBjdXJyZW50Q29zdCA9IHRoaXMudmFsdWU7XG4gICAgdmFyIHllYXJzID0gJChcIiNyYW5nZVwiKS52YWwoKTtcbiAgICB1cGRhdGVUb3RhbENvc3QoY3VycmVudENvc3QsIHllYXJzKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gcmFuZ2VVcGRhdGVkKCkge1xuICAgIHZhciB5ZWFycyA9IHRoaXMudmFsdWU7XG4gICAgdmFyIGN1cnJlbnRDb3N0ID0gJChcIiNjdXJyZW50LW1vbnRobHktY29zdFwiKS52YWwoKTtcbiAgICB1cGRhdGVUb3RhbENvc3QoY3VycmVudENvc3QsIHllYXJzKTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gY2FsY3VsYXRlVG90YWxDb3N0KGN1cnJlbnRDb3N0LCB5ZWFycykge1xuICAgIGlmICghY3VycmVudENvc3QgfHwgIXllYXJzKSByZXR1cm47XG4gICAgdmFyIGNvc3RJblNlbGVjdGVkWWVhciA9IChjdXJyZW50Q29zdCAqIDEyKSAqIE1hdGgucG93KEVMRUNUUklDSVRZX0dST1dUSF9SQVRFLCB5ZWFycyAtIDEpO1xuICAgIC8vIGh0dHBzOi8vbWF0aC5zdGFja2V4Y2hhbmdlLmNvbS9xdWVzdGlvbnMvMTk5Nzk2OS9mb3JtdWxhLWZvci1jYWxjdWxhdGluZy1jdW11bGF0aXZlLWNvc3Qtd2hlbi1wcmljZS1pbmNyZWFzZXMtZWFjaC15ZWFyXG4gICAgdmFyIHRvdGFsQ29zdCA9IChjdXJyZW50Q29zdCAqIDEyKSAqICgoTWF0aC5wb3coRUxFQ1RSSUNJVFlfR1JPV1RIX1JBVEUsIHllYXJzKSAtIDEpIC8gKEVMRUNUUklDSVRZX0dST1dUSF9SQVRFIC0gMSkpXG4gICAgcmV0dXJuIE1hdGgucm91bmQodG90YWxDb3N0KVxuICB9XG4gIFxuICBmdW5jdGlvbiB1cGRhdGVUb3RhbENvc3QoY3VycmVudENvc3QsIHllYXJzKSB7XG4gICAgaWYgKCFjdXJyZW50Q29zdCB8fCAheWVhcnMpIHJldHVybjtcbiAgICB2YXIgdG90YWxDb3N0ID0gY2FsY3VsYXRlVG90YWxDb3N0KGN1cnJlbnRDb3N0LCB5ZWFycyk7XG4gICAgJChcIi5ob21lLXJhbmdlLXJlc3VsdFwiKS50ZXh0KFwiJFwiICsgdG90YWxDb3N0KTsgICAgXG4gIH0gIFxufSk7XG4iXX0=
