let tg = window.Telegram.WebApp;

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2CAB37';

tg.expand();

//tg.MainButton.onClick(function(){
//    tg.showAlert(`Добро пожаловать`);
////    , @${tg.initDataUnsafe.user.first_name}.`);
////	tg.sendData(item);
//});

let item = "";

tg.showAlert(`v5`);

let btn1 = document.getElementById(`baton`);
btn1.onclick = function()
{
   alert(`you clicked me`);
}
//let btn2 = document.getElementById("btn2");




//btn1.addEventListener('onClick', function(){
//btn1.onclick = btn1OnClick;
////});
//
//btn2.onClick(function(){
//	if (tg.MainButton.isVisible) {
//		tg.MainButton.hide();
//	}
//	else {
//		tg.MainButton.setText("Вы выбрали кота2!");
//		item = "2";
//		tg.MainButton.show();
//	}
//});

tg.onEvent('mainButtonClicked', function(){
//	tg.showAlert(`Добро пожаловать`);
    tg.sendData(item);
});




