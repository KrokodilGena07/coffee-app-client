import {ProductChildren} from '@/modules/orderPanel/models/ProductChildren';

export interface OrderProduct extends ProductChildren {
    count: number;
}