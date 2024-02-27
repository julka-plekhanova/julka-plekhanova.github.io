let tg = window.Telegram.WebApp;
var MainButton = tg.MainButton;
var BackButton = tg.BackButton;

//MainButton.show();
BackButton.show();
tg.expand();
//var WebApp = window.Telegram.WebApp;

tg.showAlert(`Добро пожаловать, @${tg.initDataUnsafe.user.first_name}.`);

MainButton.textColor = '#FFFFFF';
MainButton.color = '#00FF00';

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function(){
	if (MainButton.isVisible) {
		MainButton.hide();
	}
	else {
		MainButton.setText("Вы выбрали кота1!");
		item = "1";
		MainButton.show();
	}
});

btn2.addEventListener("click", function(){
	if (MainButton.isVisible) {
		MainButton.hide();
	}
	else {
		MainButton.setText("Вы выбрали кота2!");
		item = "2";
		MainButton.show();
	}
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});