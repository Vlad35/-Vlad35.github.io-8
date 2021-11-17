$(function () {
	function obj1() {
		$(".head-class").hide(-2000),
			$(".head-class").show(2000);
	};
	obj1();
});

function openForm() {
	document.getElementById("ID").style.display = "block";
};

function closeForm() {
	document.getElementById("ID").style.display = "none";
};

function SendClick() {
	window.history.replaceState(null, " ", "zadanie8.html");
	document.title = "NewTitleNow";
};