import asyncio
import os
import logging

from aiogram import Bot, Dispatcher, types, F
from aiogram.filters import Command, CommandStart
from aiogram.types import Message
from aiogram.utils.markdown import hbold
from dotenv import load_dotenv
from keyboards import register_keyboard

load_dotenv('.env')
token = os.getenv('TOKEN_API')
admin_id = os.getenv('ADMIN_ID')
bot = Bot(token)
dp = Dispatcher()


async def start_bot(bot: Bot):
    await bot.send_message(admin_id, text='Я запустил бота!')

dp.startup.register(start_bot)
# dp.message.register(get_start, Command(commands='start'))

# регистрируем хэндлеры регистрации
# dp.message.register(start_register, F.text=='Зарегистрироваться на сайте')
# dp.message.register(register_name, RegisterState.regName)
# dp.message.register(register_phone, RegisterState.regPhone)


@dp.message(CommandStart())
async def command_start_handler(message: Message) -> None:
    # await get_start(message, bot)
    await message.answer(f"Hello, {hbold(message.from_user.full_name)}!",
                         reply_markup=register_keyboard,
                         parse_mode='HTML')


async def main() -> None:
    # await set_commands(bot)

    try:
        await dp.start_polling(bot, skip_updates=True)
    # except Exception as _ex:
    #     print(f'Ошибка - {_ex}')
    finally:
        await bot.session.close()

if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)
    asyncio.run(main())

