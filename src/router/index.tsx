import {RouteObject} from 'react-router-dom';
import LazyMain from '@/pages/main/LazyMain';
import LazyOrders from '@/pages/orders/LazyOrders';

export const routes: RouteObject[] = [
    {path: '/orders', element: <LazyOrders/>},
    {path: '*', element: <LazyMain/>},
];