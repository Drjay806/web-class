$(document).ready(function () {
  $("#1card").hide();
  $("#2card").hide();
  $("#3card").hide();
  $("#infoCardCell").hide();
  $("#suadTable").hide();
});

function plusBottonGone() {
  $("#plusButton").hide();
  $("#1card").show();
  $("#suadTable").hide();
  $("#infoCardCell").show();
}

function arrowforward() {
  $("#1card").hide();
  $("#2card").show();
}

function arrowforward2() {
  $("#3card").show();
  $("#2card").hide();
}

function arrowback() {
  $("#1card").show();
  $("#2card").hide();
}

function arrowback2() {
  $("#3card").hide();
  $("#2card").show();
}

function done() {
  $("#plusButton").show();
  $("#suadTable").show();
  $("#3card").hide();
}

function submitCell() {}

$(document).ready(function () {
  $(".collapsible").collapsible();
});

$(document).ready(function () {
  $("select").formSelect();
});

$(document).ready(function () {
  $(".datepicker").datepicker();
});
