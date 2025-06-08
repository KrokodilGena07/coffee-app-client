import {create} from 'zustand/react';
import {immer} from 'zustand/middleware/immer';
import {Order} from '@/models/Order';

interface OrdersState {
    orders: Order[];
    cash: number;
    addOrder: (order: Order) => void;
    removeOrder: (id: number, price: number) => void;
}

export const useOrders = create<OrdersState>()(immer((set, get) => ({
    orders: JSON.parse(localStorage.getItem('ORDERS') || '[]'),
    cash: JSON.parse(localStorage.getItem('CASH') || '0'),
    addOrder: order => {
        const {cash, orders} = get();
        const newOrders = [...orders, order];
        const newCash = cash + order.price;

        set({orders: newOrders, cash: newCash});

        localStorage.setItem('ORDERS', JSON.stringify(newOrders));
        localStorage.setItem('CASH', JSON.stringify(newCash));
    },
    removeOrder: (id, price) => {
        const {cash, orders} = get();
        const newOrders = orders.filter(item => item.id !== id);
        const newCash = cash - price;

        set({orders: newOrders, cash: newCash});

        localStorage.setItem('ORDERS', JSON.stringify(newOrders));
        localStorage.setItem('CASH', JSON.stringify(newCash));
    }
})));