import {ProductChildren} from '@/modules/orderPanel/models/ProductChildren';

export interface ProductParent {
    id: number;
    image: string;
    name: string;
    items: ProductParent[] | ProductChildren[];
}