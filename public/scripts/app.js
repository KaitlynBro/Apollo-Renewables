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
  var ELECTRICITY_GROWTH_RATE = 0.06;

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
    // var totalCost = (currentCost * 12) * ((Math.pow(ELECTRICITY_GROWTH_RATE, years) - 1) / (ELECTRICITY_GROWTH_RATE - 1))
    var totalCost = currentCost * 12 * years * (1 + ELECTRICITY_GROWTH_RATE * years);
    return Math.round(totalCost);
  }

  function updateTotalCost(currentCost, years) {
    if (!currentCost || !years) return;
    var totalCost = calculateTotalCost(currentCost, years);
    $(".home-range-result").text("$" + totalCost);
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0EsRUFBRSxRQUFGLEVBQVksS0FBWixDQUFrQixZQUFXO0FBQ3pCLElBQUUsUUFBRixFQUFZLElBQVosQ0FBaUIsWUFBVztBQUN4QixRQUFJLEtBQUssSUFBTCxJQUFhLE9BQU8sUUFBUCxDQUFnQixJQUFqQyxFQUF1QztBQUNuQyxRQUFFLElBQUYsRUFBUSxRQUFSLENBQWlCLFFBQWpCO0FBQ0g7QUFDSixHQUpEO0FBS0gsQ0FORDs7QUFTQSxFQUFHLFFBQUgsRUFBYyxLQUFkLENBQW9CLFlBQVc7QUFDN0IsTUFBSSwwQkFBMEIsSUFBOUI7O0FBRUEsSUFBRSxRQUFGLEVBQVksRUFBWixDQUFlLGNBQWYsRUFBK0IsWUFBL0I7QUFDQSxJQUFFLHVCQUFGLEVBQTJCLEVBQTNCLENBQThCLGNBQTlCLEVBQThDLFdBQTlDOztBQUVBLFdBQVMsV0FBVCxHQUF1QjtBQUNyQixRQUFJLGNBQWMsS0FBSyxLQUF2QjtBQUNBLFFBQUksUUFBUSxFQUFFLFFBQUYsRUFBWSxHQUFaLEVBQVo7QUFDQSxvQkFBZ0IsV0FBaEIsRUFBNkIsS0FBN0I7QUFDRDs7QUFFRCxXQUFTLFlBQVQsR0FBd0I7QUFDdEIsUUFBSSxRQUFRLEtBQUssS0FBakI7QUFDQSxRQUFJLGNBQWMsRUFBRSx1QkFBRixFQUEyQixHQUEzQixFQUFsQjtBQUNBLG9CQUFnQixXQUFoQixFQUE2QixLQUE3QjtBQUNEOztBQUVELFdBQVMsa0JBQVQsQ0FBNEIsV0FBNUIsRUFBeUMsS0FBekMsRUFBZ0Q7QUFDOUMsUUFBSSxDQUFDLFdBQUQsSUFBZ0IsQ0FBQyxLQUFyQixFQUE0QjtBQUM1QixRQUFJLHFCQUFzQixjQUFjLEVBQWYsR0FBcUIsS0FBSyxHQUFMLENBQVMsdUJBQVQsRUFBa0MsUUFBUSxDQUExQyxDQUE5QztBQUNBO0FBQ0E7QUFDQSxRQUFJLFlBQWEsY0FBYyxFQUFmLEdBQXFCLEtBQXJCLElBQThCLElBQUssMEJBQTBCLEtBQTdELENBQWhCO0FBQ0EsV0FBTyxLQUFLLEtBQUwsQ0FBVyxTQUFYLENBQVA7QUFDRDs7QUFFRCxXQUFTLGVBQVQsQ0FBeUIsV0FBekIsRUFBc0MsS0FBdEMsRUFBNkM7QUFDM0MsUUFBSSxDQUFDLFdBQUQsSUFBZ0IsQ0FBQyxLQUFyQixFQUE0QjtBQUM1QixRQUFJLFlBQVksbUJBQW1CLFdBQW5CLEVBQWdDLEtBQWhDLENBQWhCO0FBQ0EsTUFBRSxvQkFBRixFQUF3QixJQUF4QixDQUE2QixNQUFNLFNBQW5DO0FBQ0Q7QUFDRixDQWhDRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIGNoYW5nZXMgY29sb3VyIG9mIGFjdGl2ZSBwYWdlcyBtZW51IGxpbmtcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICQoXCJbaHJlZl1cIikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaHJlZiA9PSB3aW5kb3cubG9jYXRpb24uaHJlZikge1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5cblxuJCggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcbiAgdmFyIEVMRUNUUklDSVRZX0dST1dUSF9SQVRFID0gMC4wNjtcbiAgXG4gICQoXCIjcmFuZ2VcIikub24oXCJpbnB1dCBjaGFuZ2VcIiwgcmFuZ2VVcGRhdGVkKTtcbiAgJChcIiNjdXJyZW50LW1vbnRobHktY29zdFwiKS5vbihcImlucHV0IGNoYW5nZVwiLCBjb3N0VXBkYXRlZCk7XG5cbiAgZnVuY3Rpb24gY29zdFVwZGF0ZWQoKSB7XG4gICAgdmFyIGN1cnJlbnRDb3N0ID0gdGhpcy52YWx1ZTtcbiAgICB2YXIgeWVhcnMgPSAkKFwiI3JhbmdlXCIpLnZhbCgpO1xuICAgIHVwZGF0ZVRvdGFsQ29zdChjdXJyZW50Q29zdCwgeWVhcnMpO1xuICB9XG4gIFxuICBmdW5jdGlvbiByYW5nZVVwZGF0ZWQoKSB7XG4gICAgdmFyIHllYXJzID0gdGhpcy52YWx1ZTtcbiAgICB2YXIgY3VycmVudENvc3QgPSAkKFwiI2N1cnJlbnQtbW9udGhseS1jb3N0XCIpLnZhbCgpO1xuICAgIHVwZGF0ZVRvdGFsQ29zdChjdXJyZW50Q29zdCwgeWVhcnMpO1xuICB9XG4gIFxuICBmdW5jdGlvbiBjYWxjdWxhdGVUb3RhbENvc3QoY3VycmVudENvc3QsIHllYXJzKSB7XG4gICAgaWYgKCFjdXJyZW50Q29zdCB8fCAheWVhcnMpIHJldHVybjtcbiAgICB2YXIgY29zdEluU2VsZWN0ZWRZZWFyID0gKGN1cnJlbnRDb3N0ICogMTIpICogTWF0aC5wb3coRUxFQ1RSSUNJVFlfR1JPV1RIX1JBVEUsIHllYXJzIC0gMSk7XG4gICAgLy8gaHR0cHM6Ly9tYXRoLnN0YWNrZXhjaGFuZ2UuY29tL3F1ZXN0aW9ucy8xOTk3OTY5L2Zvcm11bGEtZm9yLWNhbGN1bGF0aW5nLWN1bXVsYXRpdmUtY29zdC13aGVuLXByaWNlLWluY3JlYXNlcy1lYWNoLXllYXJcbiAgICAvLyB2YXIgdG90YWxDb3N0ID0gKGN1cnJlbnRDb3N0ICogMTIpICogKChNYXRoLnBvdyhFTEVDVFJJQ0lUWV9HUk9XVEhfUkFURSwgeWVhcnMpIC0gMSkgLyAoRUxFQ1RSSUNJVFlfR1JPV1RIX1JBVEUgLSAxKSlcbiAgICB2YXIgdG90YWxDb3N0ID0gKGN1cnJlbnRDb3N0ICogMTIpICogeWVhcnMgKiAoMSArIChFTEVDVFJJQ0lUWV9HUk9XVEhfUkFURSAqIHllYXJzKSlcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh0b3RhbENvc3QpXG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHVwZGF0ZVRvdGFsQ29zdChjdXJyZW50Q29zdCwgeWVhcnMpIHtcbiAgICBpZiAoIWN1cnJlbnRDb3N0IHx8ICF5ZWFycykgcmV0dXJuO1xuICAgIHZhciB0b3RhbENvc3QgPSBjYWxjdWxhdGVUb3RhbENvc3QoY3VycmVudENvc3QsIHllYXJzKTtcbiAgICAkKFwiLmhvbWUtcmFuZ2UtcmVzdWx0XCIpLnRleHQoXCIkXCIgKyB0b3RhbENvc3QpOyAgICBcbiAgfSAgXG59KTtcbiJdfQ==
