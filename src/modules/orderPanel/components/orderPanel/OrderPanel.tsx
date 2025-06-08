import React, {FC, useMemo, useState} from 'react';
import styles from './orderPanel.module.css';
import {Link} from 'react-router-dom';
import logo from '@/modules/orderList/assets/images/logo.png';
import {products} from '@/modules/orderPanel/data/products';
import {ProductParent} from '@/modules/orderPanel/models/ProductParent';
import {ProductChildren} from '@/modules/orderPanel/models/ProductChildren';
import {getPrice} from '@/utils/getPrice';
import {OrderProduct} from '@/modules/orderPanel/models/OrderProduct';
import {PaymentMethod} from '@/models/PaymentMethod';
import {useOrders} from '@/store/useOrders';

export const OrderPanel: FC = () => {
    const [items, setItems] = useState<ProductParent[] | ProductChildren[]>(products);
    const [order, setOrder] = useState<OrderProduct[]>(
        JSON.parse(localStorage.getItem('CURRENT_ORDER') || '[]')
    );
    const [modalFlag, setModalFlag] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null);

    const {addOrder, orders} = useOrders();

    const openProduct = (items: ProductParent[] | ProductChildren[]) => {
        setItems(items);
    };

    const makeOrder = () => {
        addOrder({
            paymentMethod,
            price: resultPrice,
            date: Date.now(),
            id: Date.now(),
            orderNumber: orders.length + 1,
            items: order
        });
        setModalFlag(false);
        setOrder([]);
        localStorage.removeItem('CURRENT_ORDER');
    };

    const addToOder = (item: ProductChildren) => {
        setOrder(prev => {
            const index = order.findIndex(i => i.id === item.id);
            let newState;

            if (index !== -1) {
                order[index] = {
                    ...order[index],
                    count: order[index].count + 1
                };
                newState = [
                    ...prev.slice(0, index),
                    {...prev[index], count: prev[index].count + 1},
                    ...prev.slice(index + 1)
                ];
                setOrder(order);
            } else {
                newState = [...order, {...item, count: 1}];
                setOrder(newState);
            }

            localStorage.setItem('CURRENT_ORDER', JSON.stringify(newState));
            return newState;
        });
    };

    const resultPrice = useMemo(() => {
        let price = 0;
        order.forEach(item => price += item.price * item.count);
        return price;
    }, [order]);

    return (
        <div className={modalFlag ? styles.Freeze : ''}>
            {modalFlag &&
                <div
                    className={styles.Modal}
                    onClick={() => setModalFlag(false)}
                >
                    <div
                        className={styles.ModalChildren}
                        onClick={e => e.stopPropagation()}
                    >
                        <div className={styles.Methods}>
                            <div className={styles.Method}>
                                <h2
                                    onClick={() => setPaymentMethod('CARD')}
                                    className={paymentMethod === 'CARD' ? styles.SelectedMethod : ''}
                                >
                                    КАРТА
                                </h2>
                            </div>
                            <div className={styles.Method}>
                                <h2
                                    onClick={() => setPaymentMethod('CASH')}
                                    className={paymentMethod === 'CASH' ? styles.SelectedMethod : ''}
                                >
                                    НАЛИЧНЫЕ
                                </h2>
                            </div>
                            <div className={styles.Method}>
                                <h2
                                    onClick={() => setPaymentMethod('TRANSFER')}
                                    className={paymentMethod === 'TRANSFER' ? styles.SelectedMethod : ''}
                                >
                                    ПЕРЕВОД
                                </h2>
                            </div>
                        </div>
                        <button
                            className={styles.PrimaryButton}
                            disabled={!paymentMethod}
                            onClick={makeOrder}
                        >
                            Оплатить
                        </button>
                    </div>
                </div>
            }
            <header
                className={styles.Header}
            >
                <Link to='/'>
                    <img
                        src={logo}
                        alt="Главная"
                        height={40}
                    />
                </Link>
                <nav>
                    <Link
                        to='/orders'
                        className={styles.Link}
                    >
                        ЗАКАЗЫ
                    </Link>
                    <Link
                        to='/report'
                        className={styles.Link}
                    >
                        X-ОТЧЕТ
                    </Link>
                </nav>
            </header>
            <div className={styles.OrderPanel}>
                <aside className={styles.Sidebar}>
                    <div className={styles.SidebarItems}>
                        {order.map(item =>
                            <div
                                key={item.id}
                                className={styles.SidebarItem}
                            >
                                <p>{item.name}</p>
                                <p>{item.size}</p>
                                <p>{item.count}</p>
                                <p>{getPrice(item.price)}</p>
                            </div>
                        )}
                    </div>
                    <div className={styles.SidebarPanel}>
                        <p className={styles.SidebarText}>
                            <span className={styles.SidebarTitle}>Итог</span>: {getPrice(resultPrice)}
                        </p>
                        <button
                            className={styles.PrimaryButton}
                            onClick={() => setModalFlag(true)}
                        >
                            Оплатить
                        </button>
                    </div>
                </aside>
                <main className={styles.Panel}>
                    <div className={styles.Points}>
                        <p
                            onClick={() => setItems(products)}
                            className={styles.BasePoint}
                        >
                            Все
                        </p>
                    </div>
                    <div className={styles.PanelItems}>
                        {items.map(item =>
                            <div
                                key={item.id}
                                className={styles.Item}
                                onClick={() => 'price' in item ? addToOder(item) : openProduct(item.items)}
                            >
                                <img
                                    src={item.image}
                                    alt="ТОВАР"
                                    className={styles.ItemImage}
                                />
                                <p className={styles.ItemTitle}>
                                    {item.name} {'size' in item ? item.size : ''}
                                </p>
                                {'price' in item &&
                                    <p className={styles.ItemText}>{getPrice(item.price)}</p>
                                }
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};