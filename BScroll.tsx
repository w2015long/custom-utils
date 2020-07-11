import React, {useRef, useEffect, forwardRef} from 'react';
import BScroll from 'better-scroll';
import styles from './index.css'
let bs;
interface ScrollProps {
    children: any;
    moveDistance?: number;
}
export default function Scroll(props: ScrollProps) {
    const wrapper = useRef();
    useEffect(() => {
        bs = new BScroll(wrapper.current, {
            scrollX: true
        });
        bs.refresh();
        bs.disable();
    }, [wrapper]);
    useEffect(() => {
        bs.enable();
        const  isAble = -props.moveDistance > -10 && -props.moveDistance < Math.abs(bs.maxScrollX) + 20;
        console.log(props.moveDistance);
        if (isAble) {
            handleScrollBy(props.moveDistance, 0);
        }
        bs.disable();
    }, [props.moveDistance]);
    function handleScrollBy(x: number, y: number, time = 300) {
        bs.scrollTo(x, y, time);
    }
    return (
        <div className={styles.wrapper} ref={wrapper}>
            {props.children}
        </div>
    );
}
