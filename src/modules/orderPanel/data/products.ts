import coffee from '../assets/coffee.jpg';
import lemonades from '../assets/lemonades.png';
import iceCoffee from '../assets/iceCoffee.png';
import tea from '../assets/tea.png';
import milkshake from '../assets/milkshake.png';
import cocktails from '../assets/coctails.png';
import milkCocktails from '../assets/milkCocktails.png';
import sandwiches from '../assets/sandwiches.png';
import panini from '../assets/panini.png';
import mojito from '../assets/mojito.png';
import redMojito from '../assets/redMojito.png';
import coconut from '../assets/coconut.png';
import summerMango from '../assets/summerMango.png';
import cappuccino from '../assets/cappuccino.png';

export const products = [
    {
        id: 1,
        image: cocktails,
        name: 'Б/А Койтейли',
        items: [
            {
                id: 11,
                image: mojito,
                name: 'Махито классический',
                size: 0.3,
                price: 169
            },
            {
                id: 12,
                image: mojito,
                name: 'Махито классический',
                size: 0.4,
                price: 199
            },
            {
                id: 13,
                image: redMojito,
                name: 'Махито клубничный',
                size: 0.3,
                price: 169
            },
            {
                id: 14,
                image: redMojito,
                name: 'Махито клубничный',
                size: 0.4,
                price: 199
            },
            {
                id: 15,
                image: coconut,
                name: 'Пинаколада',
                size: 0.3,
                price: 169
            },
            {
                id: 16,
                image: coconut,
                name: 'Пинаколада',
                size: 0.4,
                price: 199
            },
            {
                id: 17,
                image: summerMango,
                name: 'Летний манго',
                size: 0.3,
                price: 169
            },
            {
                id: 18,
                image: summerMango,
                name: 'Летний манго',
                size: 0.4,
                price: 199
            },
            {
                id: 19,
                image: coffee,
                name: 'Пакахонтас',
                size: 0.3,
                price: 169
            },
            {
                id: 110,
                image: coffee,
                name: 'Пакахонтас',
                size: 0.4,
                price: 199
            }
        ]
    },
    {
        id: 2,
        image: lemonades,
        name: 'Лимонады',
        items: [
            {
                id: 21,
                image: coffee,
                name: 'Лесные ягоды',
                size: 0.3,
                price: 130
            },
            {
                id: 22,
                image: coffee,
                name: 'Лесные ягоды',
                size: 0.4,
                price: 150
            },
            {
                id: 23,
                image: coffee,
                name: 'Тропический манго',
                size: 0.3,
                price: 130
            },
            {
                id: 24,
                image: coffee,
                name: 'Тропический манго',
                size: 0.4,
                price: 150
            },
            {
                id: 25,
                image: coffee,
                name: 'Апельсин',
                size: 0.3,
                price: 130
            },
            {
                id: 26,
                image: coffee,
                name: 'Апельсин',
                size: 0.4,
                price: 150
            }
        ]
    },
    {
        id: 3,
        image: coffee,
        name: 'Кофе',
        items: [
            {
                id: 31,
                image: coffee,
                name: 'Латте',
                items: [
                    {
                        id: 311,
                        image: coffee,
                        name: 'Латте',
                        size: 0.3,
                        price: 160
                    },
                    {
                        id: 312,
                        image: coffee,
                        name: 'Латте',
                        size: 0.4,
                        price: 190
                    }
                ]
            },
            {
                id: 32,
                image: cappuccino,
                name: 'Капучино',
                items: [
                    {
                        id: 321,
                        image: cappuccino,
                        name: 'Капучино',
                        size: 0.2,
                        price: 120
                    },
                    {
                        id: 322,
                        image: cappuccino,
                        name: 'Капучино',
                        size: 0.3,
                        price: 160
                    },
                    {
                        id: 323,
                        image: cappuccino,
                        name: 'Капучино',
                        size: 0.4,
                        price: 190
                    }
                ]
            },
            {
                id: 33,
                image: coffee,
                name: 'Эспрессо',
                items: [
                    {
                        id: 331,
                        image: coffee,
                        name: 'Эспрессо',
                        size: 0.03,
                        price: 100
                    },
                    {
                        id: 332,
                        image: coffee,
                        name: 'Эспрессо',
                        size: 0.05,
                        price: 130
                    }
                ]
            },
            {
                id: 34,
                image: coffee,
                name: 'Американо',
                items: [
                    {
                        id: 341,
                        image: coffee,
                        name: 'Американо',
                        size: 0.15,
                        price: 100
                    },
                    {
                        id: 342,
                        image: coffee,
                        name: 'Американо',
                        size: 0.2,
                        price: 140
                    },
                    {
                        id: 343,
                        image: coffee,
                        name: 'Американо',
                        size: 0.3,
                        price: 180
                    },
                    {
                        id: 344,
                        image: coffee,
                        name: 'Американо',
                        size: 0.4,
                        price: 200
                    }
                ]
            },
            {
                id: 35,
                image: coffee,
                name: 'Флэт Уайт',
                items: [
                    {
                        id: 351,
                        image: coffee,
                        name: 'Флэт Уайт',
                        size: 0.15,
                        price: 180
                    },
                    {
                        id: 352,
                        image: coffee,
                        name: 'Флэт Уайт',
                        size: 0.2,
                        price: 200
                    },
                    {
                        id: 353,
                        image: coffee,
                        name: 'Флэт Уайт',
                        size: 0.3,
                        price: 230
                    }
                ]
            },
            {
                id: 36,
                image: coffee,
                name: 'Раф-кофе',
                items: [
                    {
                        id: 361,
                        image: coffee,
                        name: 'Раф-кофе',
                        size: 0.2,
                        price: 140
                    },
                    {
                        id: 362,
                        image: coffee,
                        name: 'Раф-кофе',
                        size: 0.3,
                        price: 180
                    },
                    {
                        id: 363,
                        image: coffee,
                        name: 'Раф-кофе',
                        size: 0.4,
                        price: 220
                    }
                ]
            },
            {
                id: 37,
                image: coffee,
                name: 'Моккачино',
                items: [
                    {
                        id: 371,
                        image: coffee,
                        name: 'Моккачино',
                        size: 0.2,
                        price: 150
                    },
                    {
                        id: 372,
                        image: coffee,
                        name: 'Моккачино',
                        size: 0.3,
                        price: 200
                    },
                    {
                        id: 373,
                        image: coffee,
                        name: 'Моккачино',
                        size: 0.4,
                        price: 240
                    }
                ]
            },
            {
                id: 38,
                image: coffee,
                name: 'Горячий шоколад',
                items: [
                    {
                        id: 381,
                        image: coffee,
                        name: 'Горячий шоколад',
                        size: 0.2,
                        price: 140
                    },
                    {
                        id: 382,
                        image: coffee,
                        name: 'Горячий шоколад',
                        size: 0.3,
                        price: 190
                    },
                    {
                        id: 383,
                        image: coffee,
                        name: 'Горячий шоколад',
                        size: 0.4,
                        price: 230
                    }
                ]
            },
            {
                id: 39,
                image: coffee,
                name: 'Какао',
                items: [
                    {
                        id: 391,
                        image: coffee,
                        name: 'Какао',
                        size: 0.2,
                        price: 110
                    },
                    {
                        id: 392,
                        image: coffee,
                        name: 'Какао',
                        size: 0.3,
                        price: 140
                    },
                    {
                        id: 393,
                        image: coffee,
                        name: 'Какао',
                        size: 0.4,
                        price: 170
                    }
                ]
            },
            {
                id: 310,
                image: coffee,
                name: 'Оригинальный раф',
                items: [
                    {
                        id: 3101,
                        image: coffee,
                        name: 'Оригинальный раф',
                        size: 0.2,
                        price: 160
                    },
                    {
                        id: 3102,
                        image: coffee,
                        name: 'Оригинальный раф',
                        size: 0.3,
                        price: 190
                    },
                    {
                        id: 3103,
                        image: coffee,
                        name: 'Оригинальный раф',
                        size: 0.4,
                        price: 230
                    }
                ]
            },
            {
                id: 311,
                image: coffee,
                name: 'Матча латте',
                items: [
                    {
                        id: 3111,
                        image: coffee,
                        name: 'Матча латте',
                        size: 0.3,
                        price: 140
                    },
                    {
                        id: 3112,
                        image: coffee,
                        name: 'Матча латте',
                        size: 0.4,
                        price: 170
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        image: iceCoffee,
        name: 'Айс кофе',
        items: [
            {
                id: 41,
                image: coffee,
                name: 'Брауни',
                size: 0.3,
                price: 199
            },
            {
                id: 42,
                image: coffee,
                name: 'Брауни',
                size: 0.4,
                price: 230
            },
            {
                id: 43,
                image: coffee,
                name: 'Цитрусовая ваниль',
                size: 0.3,
                price: 199
            },
            {
                id: 44,
                image: coffee,
                name: 'Цитрусовая ваниль',
                size: 0.4,
                price: 230
            },
            {
                id: 45,
                image: coffee,
                name: 'Манго-маракуя',
                size: 0.3,
                price: 199
            },
            {
                id: 46,
                image: coffee,
                name: 'Манго-маракуя',
                size: 0.4,
                price: 230
            },
            {
                id: 47,
                image: coffee,
                name: 'Чернично-мятный',
                size: 0.3,
                price: 199
            },
            {
                id: 48,
                image: coffee,
                name: 'Чернично-мятный',
                size: 0.4,
                price: 230
            }
        ]
    },
    {
        id: 5,
        image: tea,
        name: 'Чай',
        items: [
            {
                id: 51,
                image: coffee,
                name: 'Чай',
                size: 0.2,
                price: 90
            },
            {
                id: 52,
                image: coffee,
                name: 'Чай',
                size: 0.3,
                price: 130
            },
            {
                id: 53,
                image: coffee,
                name: 'Чай',
                size: 0.4,
                price: 150
            }
        ]
    },
    {
        id: 6,
        image: milkshake,
        name: 'Милкшейки',
        items: [
            {
                id: 61,
                image: coffee,
                name: 'Мята-кокос',
                size: 0.3,
                price: 190
            },
            {
                id: 62,
                image: coffee,
                name: 'Мята-кокос',
                size: 0.4,
                price: 220
            },
            {
                id: 63,
                image: coffee,
                name: 'Банановый',
                size: 0.3,
                price: 190
            },
            {
                id: 64,
                image: coffee,
                name: 'Банановый',
                size: 0.4,
                price: 220
            },
            {
                id: 65,
                image: coffee,
                name: 'Клубничный',
                size: 0.3,
                price: 190
            },
            {
                id: 67,
                image: coffee,
                name: 'Клубничный',
                size: 0.4,
                price: 220
            },
            {
                id: 68,
                image: coffee,
                name: 'Радужный единорог',
                size: 0.3,
                price: 199
            },
            {
                id: 69,
                image: coffee,
                name: 'Радужный единорог',
                size: 0.4,
                price: 220
            },
            {
                id: 610,
                image: coffee,
                name: 'Сникерс',
                size: 0.3,
                price: 199
            },
            {
                id: 611,
                image: coffee,
                name: 'Сникерс',
                size: 0.4,
                price: 220
            },
            {
                id: 612,
                image: coffee,
                name: 'Ежевичный',
                size: 0.3,
                price: 199
            },
            {
                id: 613,
                image: coffee,
                name: 'Ежевичный',
                size: 0.4,
                price: 220
            },
            {
                id: 614,
                image: coffee,
                name: 'Взбитые сливки',
                price: 25
            }
        ]
    },
    {
        id: 7,
        image: milkCocktails,
        name: 'Молочнные коктейли',
        items: [
            {
                id: 71,
                name: 'С мороженым',
                image: milkshake,
                items: [
                    {
                        id: 711,
                        image: coffee,
                        name: 'Молочный коктейль',
                        size: 0.3,
                        price: 130
                    },
                    {
                        id: 712,
                        image: coffee,
                        name: 'Молочный коктейль',
                        size: 0.4,
                        price: 160
                    }
                ]
            },
            {
                id: 72,
                name: 'Без мороженого',
                image: milkshake,
                items: [
                    {
                        id: 721,
                        image: coffee,
                        name: 'Молочный коктейль',
                        size: 0.2,
                        price: 70
                    },
                    {
                        id: 722,
                        image: coffee,
                        name: 'Молочный коктейль',
                        size: 0.3,
                        price: 90
                    },
                    {
                        id: 723,
                        image: coffee,
                        name: 'Молочный коктейль',
                        size: 0.4,
                        price: 100
                    }
                ]
            }
        ]
    },
    {
        id: 8,
        image: sandwiches,
        name: 'Сэндвичи',
        items: [
            {
                id: 81,
                name: 'Классический 1шт',
                image: milkshake,
                price: 99
            },
            {
                id: 82,
                name: 'Классический 2шт',
                image: milkshake,
                price: 160
            },
            {
                id: 83,
                name: 'Панини 1шт',
                image: panini,
                price: 99
            },
            {
                id: 84,
                name: 'Панини 2шт',
                image: panini,
                price: 170
            },
            {
                id: 85,
                name: 'Дабл сэндвич',
                image: panini,
                price: 249
            }
        ]
    },
    {
        id: 9,
        image: sandwiches,
        name: 'Фирменное меню',
        items: [
            {
                id: 91,
                name: 'Персик раф с бел шок',
                image: milkshake,
                price: 190,
                size: 0.3
            },
            {
                id: 92,
                name: 'Персик раф с бел шок',
                image: milkshake,
                price: 220,
                size: 0.4
            },
            {
                id: 93,
                name: 'Капучино спелая груша',
                image: panini,
                price: 190,
                size: 0.3
            },
            {
                id: 94,
                name: 'Капучино спелая груша',
                image: panini,
                price: 220,
                size: 0.4
            },
            {
                id: 95,
                name: 'Латте малина-кокос',
                image: panini,
                price: 190,
                size: 0.3
            },
            {
                id: 96,
                name: 'Латте малина-кокос',
                image: panini,
                price: 220,
                size: 0.4
            },
            {
                id: 190,
                name: 'Раф банан-карамель',
                image: panini,
                price: 170,
                size: 0.3
            },
            {
                id: 98,
                name: 'Раф банан-карамель',
                image: panini,
                price: 220,
                size: 0.4
            }
        ]
    },
    {
        id: 10,
        image: sandwiches,
        name: 'Сезонное меню',
        items: [
            {
                id: 101,
                name: 'Раф яблочный синнабон',
                image: milkshake,
                price: 190,
                size: 0.3
            },
            {
                id: 102,
                name: 'Раф яблочный синнабон',
                image: milkshake,
                price: 220,
                size: 0.4
            },
            {
                id: 103,
                name: 'Латте цитрус',
                image: panini,
                price: 190,
                size: 0.3
            },
            {
                id: 104,
                name: 'Латте цитрус',
                image: panini,
                price: 220,
                size: 0.4
            },
            {
                id: 105,
                name: 'Банановое какао',
                image: panini,
                price: 190,
                size: 0.3
            },
            {
                id: 106,
                name: 'Банановое какао',
                image: panini,
                price: 220,
                size: 0.4
            },
            {
                id: 107,
                name: 'Лавандавая матча',
                image: panini,
                price: 170,
                size: 0.3
            },
            {
                id: 108,
                name: 'Лавандавая матча',
                image: panini,
                price: 220,
                size: 0.4
            }
        ]
    },
    {
        id: 11,
        image: sandwiches,
        name: 'Премиум меню',
        items: [
            {
                id: 111,
                name: 'Сочное манго',
                image: milkshake,
                price: 210,
                size: 0.3
            },
            {
                id: 112,
                name: 'Сочное манго',
                image: milkshake,
                price: 239,
                size: 0.4
            },
            {
                id: 113,
                name: 'Клубника со сливками',
                image: panini,
                price: 210,
                size: 0.3
            },
            {
                id: 114,
                name: 'Клубника со сливками',
                image: panini,
                price: 239,
                size: 0.4
            },
            {
                id: 115,
                name: 'Морозная вишня',
                image: panini,
                price: 210,
                size: 0.3
            },
            {
                id: 116,
                name: 'Морозная вишня',
                image: panini,
                price: 239,
                size: 0.4
            },
            {
                id: 117,
                name: 'Лимонный тарт с бананом',
                image: panini,
                price: 210,
                size: 0.3
            },
            {
                id: 118,
                name: 'Лимонный тарт с бананом',
                image: panini,
                price: 239,
                size: 0.4
            }
        ]
    }
];