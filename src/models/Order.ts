import {Product} from '@/models/Product';
import {PaymentMethod} from '@/models/PaymentMethod';

export interface Order {
    id: number;
    orderNumber: number;
    price: number;
    items: Product[];
    paymentMethod: PaymentMethod;
    date: number;
}