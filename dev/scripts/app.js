// changes colour of active pages menu link
$(document).ready(function() {
    $("[href]").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });
});

$( document ).ready(function() {
  var ELECTRICITY_GROWTH_RATE = 1.06
  
  $("#range").on("input change", rangeUpdated);
  $("#current-monthly-cost").on("input change", costUpdated);

  function costUpdated() {
    var currentCost = this.value    
    var years = $("#range").val();
    calculateTotalCost(currentCost, years)    
  }
  
  function rangeUpdated() {
    var years = this.value;
    var currentCost = $("#current-monthly-cost").val();
    calculateTotalCost(currentCost, years)
  }
  
  function calculateTotalCost(currentCost, years) {
    if (!currentCost || !years) return;
    var totalCost = (currentCost * 12) * Math.pow(ELECTRICITY_GROWTH_RATE, years);
    $(".home-range-result").text("$" + Math.round(totalCost))
  }
});