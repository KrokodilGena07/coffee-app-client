export function getPaymentMethod(method: 'CASH' | 'CARD' | 'TRANSFER') {
    switch (method) {
        case 'CASH': return 'НАЛИЧНЫЕ';
        case 'CARD': return 'КАРТА';
        case 'TRANSFER': return 'ПЕРЕВОД';
    }
}