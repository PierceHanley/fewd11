/*
Objectives:

1. Simplify it: find repetitive values and logic, and turn them into
   variables and functions.  For example, '$("#current-station")' is
   referred to very often... could you turn it into a variable?

2. Extend it: FM radio frequencies are only between 87.9 and 107.9.
   Change the "tuneUp" and "tuneDown" functions so that they wrap:
   tuning up from 107.9 should change the current station to 87.9,
   and tuning down from 87.9 should change the station to 107.9.
*/

"use strict";

function tuneUp() {
	var nextFreq = parseFloat($("#current-station").val()) + 0.2;
	$("#current-station").val(nextFreq.toFixed(1));
}

function tuneDown() {
	var prevFreq = parseFloat($("#current-station").val()) - 0.2;
	$("#current-station").val(prevFreq.toFixed(1));
}

$("#tune-up").click(tuneUp);
$("#tune-down").click(tuneDown);

$("#preset1").click(function() {
	if ($("#preset1").hasClass("unset")) {
		$("#preset1").text($("#current-station").val());
		$("#preset1").removeClass("unset");
	}

	$("#current-station").val($("#preset1").text());
});

$("#preset2").click(function() {
	if ($("#preset2").hasClass("unset")) {
		$("#preset2").text($("#current-station").val());
		$("#preset2").removeClass("unset");
	}

	$("#current-station").val($("#preset2").text());
});

$("#preset3").click(function() {
	if ($("#preset3").hasClass("unset")) {
		$("#preset3").text($("#current-station").val());
		$("#preset3").removeClass("unset");
	}

	$("#current-station").val($("#preset3").text());
});

$("#preset4").click(function() {
	if ($("#preset4").hasClass("unset")) {
		$("#preset4").text($("#current-station").val());
		$("#preset4").removeClass("unset");
	}

	$("#current-station").val($("#preset4").text());
});