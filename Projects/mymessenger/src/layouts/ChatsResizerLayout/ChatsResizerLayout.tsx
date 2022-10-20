import styles from './ChatsResizerLayout.module.scss'
import { useState, useRef, useEffect } from 'react';
import { CgSearch } from 'react-icons/cg';
import { BsPersonSquare, BsPersonCircle } from 'react-icons/bs';
import { TbMessages } from 'react-icons/tb';
import { useRouter } from 'next/router';

interface IChatsResizerLayout {
    children: any;
    chats: any;
}

const ChatsResizerLayout = (props: IChatsResizerLayout) => {
    const router = useRouter();
    const ref = useRef(null)
    const refResizer = useRef(null)

    useEffect(() => {
        const resizeanbleEle: any = ref.current;
        const style = window.getComputedStyle(resizeanbleEle);
        let width = parseInt(style.width, 10);
        let x = 0;
        let y = 0;

        const onMouseMoveUpRightSize = (event: any) => {
            const dx = event.clientX - x;
            x = event.clientX;
            width = width + dx;
            resizeanbleEle.style.width = `${width}px`;
        }

        const onMouseUpRightResize = (event: any) => {
            document.removeEventListener('mousemove', onMouseMoveUpRightSize);
        }

        const onMouseDownRightResize = (event: any) => {
            x = event.clientX;
            resizeanbleEle.style.left = style.left;
            resizeanbleEle.style.right = null;
            document.addEventListener('mousemove', onMouseMoveUpRightSize);
            document.addEventListener('mouseup', onMouseUpRightResize);
        }

        const resizerRight = refResizer.current;
        resizerRight.addEventListener('mousedown', onMouseDownRightResize);

        return () => {
            resizerRight.removeEventListener('mousedown', onMouseDownRightResize);
        }
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div ref={ref} className={styles.resizeable}>
                    <div className={styles.searchPanel}>
                        <CgSearch size={'20px'} color='' />
                        <input type="" placeholder='Search' />
                    </div>
                    <div className={styles.scroll}>
                        <div className={styles.chats}>
                            {props.chats}
                        </div>
                    </div>
                    <div className={styles.navigationPanel}>
                        <div className={styles.navigationButton}>
                            <BsPersonSquare size={'30px'} />
                        </div>
                        <div className={styles.navigationButton}>
                            <TbMessages size={'30px'} />
                        </div>
                        <div className={styles.navigationButton}>
                            <BsPersonCircle size={'30px'} />
                        </div>
                    </div>
                    <div ref={refResizer} className={styles.resizer}></div>
                </div>
            </div>
            <div className={styles.messenges}>
                {props.children}
            </div>
        </div >
    )
}

export default ChatsResizerLayout