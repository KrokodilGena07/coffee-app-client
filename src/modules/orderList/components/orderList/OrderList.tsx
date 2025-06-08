import React, {FC, useEffect, useState} from 'react';
import styles from './OrderList.module.css';
import {useOrders} from '@/store/useOrders';
import {Order} from '@/models/Order';
import {getPaymentMethod} from '@/modules/orderList/utils/getPaymentMethod';
import Close from '../../assets/svg/close.svg';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import {getPrice} from '@/utils/getPrice';

const OrderInfo: FC<{order: Order}> = ({order}) => {
    return (
        <>
            <p>
                <span className={styles.Title}>Номер</span>: {order.orderNumber}
            </p>
            <p>
                <span className={styles.Title}>Стоимость</span>: {getPrice(order.price)}
            </p>
            <p>
                <span className={styles.Title}>Оплата</span>: {getPaymentMethod(order.paymentMethod)}
            </p>
            <div>
                {order.items.map((item, index) =>
                    <div
                        key={index}
                        className={styles.OrderItem}
                    >
                        <span>{index + 1}.</span>
                        <span>{item.name}</span>
                        <span>{item.size}</span>
                        <span>{getPrice(item.price)}</span>
                    </div>
                )}
            </div>
        </>
    );
}

export const OrderList: FC = () => {
    const {orders} = useOrders();

    const [order, setOrder] = useState<Order>(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
    const [orderList, setOrderList] = useState<Order[]>(null);
    const [modalFlag, setModalFlag] = useState(false);

    const openModal = (order: Order) => {
        setOrder(order);
        setModalFlag(true);
    };

    useEffect(() => {
        setOrderList(orders.reverse());
        return () => {};
    }, []);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsMobile(window.innerWidth <= 1000);
        });

        return window.removeEventListener('resize', () => {
            setIsMobile(window.innerWidth <= 1000);
        })
    }, [window.innerWidth]);

    return (
        <div
            className={isMobile ? styles.Freeze : ''}
        >
            {modalFlag &&
                <div
                    className={styles.Modal}
                >
                    <div className={styles.ModalHeader}>
                        <Close
                            className={styles.HeaderButton}
                            onClick={() => setModalFlag(false)}
                        />
                    </div>
                    <div className={styles.ModalBody}>
                        <OrderInfo order={order}/>
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
                <div>
                    ТУТ БУДЕТ МЕНЮ
                </div>
            </header>
            <div className={styles.Orders}>
                {!isMobile &&
                    <aside
                        className={styles.Sidebar}
                    >
                        {order &&
                            <div className={styles.SelectedOrder}>
                                <OrderInfo order={order}/>
                            </div>
                        }
                    </aside>
                }
                <main className={styles.OrderList}>
                    {orderList?.map(order =>
                        <div
                            key={order.id}
                            className={styles.Order}
                            onClick={isMobile ? () => openModal(order) : () => setOrder(order)}
                        >
                            <p>{order.orderNumber}</p>
                            <p>{getPrice(order.price)}</p>
                            <p>{new Date(order.date).toLocaleTimeString()}</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};