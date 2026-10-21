# 🚗 Car Showroom SPA

Тестове завдання: вебзастосунок автосалону з каталогом автомобілів, фільтрацією та можливістю додавання відгуків.

## 🔗 Live Demo
[car-showroom-inky-kappa.vercel.app](https://car-showroom-inky-kappa.vercel.app)

## 🛠 Стек технологій
- **Core:** React 19, TypeScript, Vite
- **Routing:** React Router v7
- **Server State & Caching:** TanStack Query (React Query)
- **Forms & Validation:** React Final Form
- **UI & Layout:** Material-UI (MUI), Mobile-first верстка (420px – 1440px)
- **HTTP Client:** Axios
- **Data Persistence:** Гібридне збереження (DummyJSON API + `localStorage`)

## 🚀 Основний функціонал
1. **Каталог автомобілів:** Отримання та кешування списку авто через DummyJSON API.
2. **Фільтрація та сортування:** Пошук за назвою та брендом, сортування за ціною (зростання / спадання).
3. **Детальна сторінка автомобіля:** Повні характеристики, динамічний роутинг (`/vehicles/:vehicleId`).
4. **Система відгуків:** Об'єднання відгуків з API та нових користувацьких коментарів, збережених у `localStorage`.
5. **Валідація форм:** Перевірка обов'язкових полів та обмеження довжини тексту.

## 📦 Встановлення та локальний запуск

```bash
# 1. Клонувати репозиторій
git clone [https://github.com/Gawaka/CarShowroom.git](https://github.com/Gawaka/CarShowroom.git)

# 2. Перейти в папку проєкту
cd CarShowroom

# 3. Встановити залежності
npm install

# 4. Запустити локальний сервер розробки
npm run dev

# 5. Збірка проєкту для продакшену
npm run build

# 6. Попередній перегляд продакшен-збірки
npm run preview