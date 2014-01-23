var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) {
			uniqueId = "Don't call this twice without a uniqueId";
		}
		if (timers[uniqueId]) {
			clearTimeout (timers[uniqueId]);
		}
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();

function hideLevelThree() {
	$(".level3column").hide();
}
function showLevelThree() {
	$(".level3column").show();
}

function controlColumn() {
	$('.triangle').click(function() {
		if ($(this).hasClass('up')) {
			$(this).removeClass('up');
			$(this).parents('.dark-gray').next().slideUp();
		} else {
			$(this).addClass('up');
			$(this).parents('.dark-gray').next().slideDown();
		}
	});
}

function toggleColumn() {
	$('.triangle').not(".binded").addClass("binded").click(function() {
		$(this).toggleClass('up');
		$(this).parents('.dark-gray').next().toggle();
	});
}

function clearUp() {
	$('.triangle').removeClass('up');
}

$(document).ready(function() {
	if ($(document).width() > 991) {
		showLevelThree();
		clearUp();
	} else {
		hideLevelThree();
		toggleColumn();
	}
});		

$(window).resize(function () {
	waitForFinalEvent(function(){
		if ($(document).width() > 991) {
			showLevelThree();
			clearUp();
		} else {
			hideLevelThree();
			toggleColumn();
		}
	}, 500, "some unique string");
});