from aiogram.types import WebAppInfo, ReplyKeyboardMarkup, KeyboardButton, InlineKeyboardButton, InlineKeyboardMarkup

web_app = WebAppInfo(url='https://julka-plekhanova.github.io/')
register_keyboard = InlineKeyboardMarkup(inline_keyboard=[
    [
        InlineKeyboardButton(
            text='Посмотреть котов!', web_app=web_app
        )
    ]
])
# , resize_keyboard=True)
# , one_time_keyboard=True)
# , input_field_placeholder='Для продолжения нажмите кнопку ниже')