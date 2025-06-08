export function getPrice(price: number) {
    const format = new Intl.NumberFormat('ru-RU', {
        style: 'currency', currency: 'RUB'
    });
    return format.format(price);
}