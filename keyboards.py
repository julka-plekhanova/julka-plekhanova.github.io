from aiogram.types import WebAppInfo, ReplyKeyboardMarkup, KeyboardButton

web_app = WebAppInfo(url='site_url')
register_keyboard = ReplyKeyboardMarkup(keyboard=[
    [
        KeyboardButton(
            text='Посмотреть котов!', web_app=web_app
        )
    ]
], resize_keyboard=True, one_time_keyboard=True, input_field_placeholder='Для продолжения нажмите кнопку ниже')