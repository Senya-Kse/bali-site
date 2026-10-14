// ============================================================
// ДАННЫЕ РЕСТОРАНА BALI
// Все цены ТЕСТОВЫЕ (демо). Замените на актуальные перед запуском.
// ============================================================

const RESTAURANT = {
  name: "BALI",
  address: "Санкт-Петербург, ул. Савушкина, д. 98",
  mapQuery: "Санкт-Петербург, ул. Савушкина, 98",
  phones: {
    booking: "+7 812 331-56-69",
    banquet: ["+7 812 922-15-57", "+7 812 927-83-04"]
  },
  email: "restoran.bali@mail.ru",
  hours: {
    "Пн–Пт": "12:00 – 00:00",
    "Сб–Вс": "12:00 – 00:00"
  },
  socials: {
    telegram: "https://t.me/Balirestaurant",
    whatsapp: "https://wa.me/79119221557",
    vk: "https://vk.com/restaurant_bali",
    max: "https://max.ru/u/f9LHodD0cOIdOBYtw522qrHjP2eHsV0UpTpJ3lsUu8oBzBaOb-ohrnm7RI4",
    youtube: "https://www.youtube.com/channel/UCdnQzX4ZpecLOOzG60WsJxA"
  },
  // Куда отправлять заявки с формы. Пока пусто: форма работает в режиме демо.
  // Вариант: Formspree (https://formspree.io) -> вставить URL вида https://formspree.io/f/xxxx
  formEndpoint: ""
};

// Категории меню
const MENU_CATEGORIES = [
  { id: "hot", title: "Горячие блюда" },
  { id: "salad", title: "Салаты и закуски" },
  { id: "soup", title: "Супы" },
  { id: "dessert", title: "Десерты" },
  { id: "drink", title: "Напитки" },
  { id: "kids", title: "Детское меню" }
];

// Позиции меню (демо). tags: veg, spicy, glutenfree, new
const MENU_ITEMS = [
  { id: 1, cat: "salad", name: "Салат с тигровыми креветками", desc: "Микс салатов, авокадо, манго, кунжутная заправка", price: 690, weight: "220 г", tags: ["new"] },
  { id: 2, cat: "salad", name: "Овощной салат с тофу", desc: "Огурец, томаты, зелень, соевый соус, тофу", price: 520, weight: "200 г", tags: ["veg"] },
  { id: 3, cat: "salad", name: "Спринг-роллы с курицей", desc: "Рисовая бумага, овощи, соус чили-сладкий", price: 450, weight: "180 г", tags: ["spicy"] },
  { id: 4, cat: "soup", name: "Том Ям с креветками", desc: "Классический тайский суп с лемонграссом и кокосовым молоком", price: 590, weight: "350 г", tags: ["spicy"] },
  { id: 5, cat: "soup", name: "Крем-суп из тыквы", desc: "Тыква, имбирь, кокосовые сливки, кунжут", price: 480, weight: "300 г", tags: ["veg", "glutenfree"] },
  { id: 6, cat: "hot", name: "Курица терияки", desc: "Куриное филе в соусе терияки с рисом и кунжутом", price: 640, weight: "310 г", tags: [] },
  { id: 7, cat: "hot", name: "Лосось на гриле", desc: "Филе лосося, овощи гриль, соус беурр блан", price: 1290, weight: "250 г", tags: ["glutenfree"] },
  { id: 8, cat: "hot", name: "Лапша удон с говядиной", desc: "Удон, говядина, перец, соус хойсин", price: 720, weight: "330 г", tags: ["spicy"] },
  { id: 9, cat: "hot", name: "Паста с грибами", desc: "Паста феттучини, белые грибы, пармезан, сливки", price: 620, weight: "280 г", tags: ["veg"] },
  { id: 10, cat: "dessert", name: "Чизкейк «Матча»", desc: "Выпечка с зелёным чаем матча", price: 390, weight: "120 г", tags: ["veg", "new"] },
  { id: 11, cat: "dessert", name: "Панна-кота с манго", desc: "Ванильная панна-кота, соус из манго", price: 350, weight: "150 г", tags: ["veg", "glutenfree"] },
  { id: 12, cat: "drink", name: "Чай «Сенча»", desc: "Японский зелёный чай, 500 мл", price: 280, weight: "500 мл", tags: ["veg"] },
  { id: 13, cat: "drink", name: "Лимонад «Мохито»", desc: "Лайм, мята, содовая", price: 320, weight: "400 мл", tags: ["veg"] },
  { id: 14, cat: "kids", name: "Куриные наггетсы", desc: "Наггетсы с картофелем фри", price: 350, weight: "180 г", tags: [] },
  { id: 15, cat: "kids", name: "Детская паста с сыром", desc: "Паста с сыром и овощами", price: 290, weight: "200 г", tags: ["veg"] }
];

const TAG_LABELS = {
  veg: "Вегетарианское",
  spicy: "Острое",
  glutenfree: "Без глютена",
  new: "Новинка"
};

// Бизнес-ланч (демо)
const BUSINESS_LUNCH = {
  hours: "Пн–Пт, 12:00 – 15:00",
  price: 650,
  includes: ["Салат дня", "Горячее блюдо на выбор", "Напиток"]
};

// Залы
const HALLS = [
  {
    id: "panoramic",
    name: "Панорамный зал",
    capacity: 100,
    description: "Светлый зал с панорамными окнами. Выход на террасу с видом на реку и Елагин остров. Подходит для коктейлей, приветственных фуршетов и камерных встреч.",
    features: ["Естественный свет", "Отдельный вход для гостей", "Переход на террасу"],
    minCheck: 1500,
    image: "img/panoramic.webp"
  },
  {
    id: "aurora",
    name: "Банкетный зал Aurora Hall",
    capacity: 150,
    description: "Большой банкетный зал для свадеб, юбилеев и корпоративов. Есть сцена, танцпол и оборудование для презентаций.",
    features: ["Сцена и танцпол", "Проектор и звук", "Зонирование пространства"],
    minCheck: 2500,
    image: "img/aurora.webp"
  },
  {
    id: "terrace",
    name: "Летняя терраса",
    capacity: 60,
    description: "Открытая терраса с видом на реку. Сезонная работа: открыта в тёплое время года.",
    features: ["Вид на реку", "Сезонная работа", "Выход из Панорамного зала"],
    minCheck: 1200,
    image: "img/terrace.webp"
  },
  {
    id: "kids",
    name: "Детская комната",
    capacity: 20,
    description: "Комната для детских праздников с аниматором по предварительной договорённости.",
    features: ["Детское меню", "Аниматор по запросу"],
    minCheck: 800,
    image: "img/kids.webp"
  }
];

// Банкетные форматы и цены за гостя (демо)
const BANQUET_FORMATS = [
  { id: "wedding", name: "Свадьба", pricePerGuest: 3200 },
  { id: "birthday", name: "День рождения", pricePerGuest: 2400 },
  { id: "graduation", name: "Выпускной", pricePerGuest: 2200 },
  { id: "corporate", name: "Корпоратив", pricePerGuest: 2800 },
  { id: "outside", name: "Выездная регистрация", pricePerGuest: 1800 }
];

// Услуги дополнительно (демо)
const EXTRA_SERVICES = [
  { id: "decor", name: "Оформление зала", price: 25000 },
  { id: "music", name: "Музыкальное сопровождение (DJ)", price: 35000 },
  { id: "photo", name: "Фотозона", price: 12000 },
  { id: "cake", name: "Торт (за кг)", price: 2500 }
];
