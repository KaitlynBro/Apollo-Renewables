// changes colour of active pages menu link
$(document).ready(function() {
    $("[href]").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });
});


$( document ).ready(function() {
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
    var costInSelectedYear = (currentCost * 12) * Math.pow(ELECTRICITY_GROWTH_RATE, years - 1);
    // https://math.stackexchange.com/questions/1997969/formula-for-calculating-cumulative-cost-when-price-increases-each-year
    var totalCost = (currentCost * 12) * ((Math.pow(ELECTRICITY_GROWTH_RATE, years) - 1) / (ELECTRICITY_GROWTH_RATE - 1))
    return Math.round(totalCost)
  }
  
  function updateTotalCost(currentCost, years) {
    if (!currentCost || !years) return;
    var totalCost = calculateTotalCost(currentCost, years);
    $(".home-range-result").text("$" + totalCost);    
  }  
});
