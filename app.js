let tg = window.Telegram.WebApp;

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#00FF00';

tg.expand();

tg.MainButton.onClick(function(){
    tg.showAlert(`Добро пожаловать`);
//    , @${tg.initDataUnsafe.user.first_name}.`);
//	tg.sendData(item);
});
tg.MainButton.show();

//tg.showAlert(`Добро пожаловать, @${tg.initDataUnsafe.user.first_name}.`);



let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.onClick(function(){
    tg.showAlert(`Добро пожаловать, @${tg.initDataUnsafe.user.first_name}.`);
//	if (tg.MainButton.isVisible) {
//		tg.MainButton.hide();
//	}
//	else {
//		tg.MainButton.setText("Вы выбрали кота1!");
//		item = "1";
//		tg.MainButton.show();
//	}
});

btn2.onClick(function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали кота2!");
		item = "2";
		tg.MainButton.show();
	}
});

