import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import imgs from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import {
    faPlus,
    faEllipsisVertical,
    faLanguage,
    faKeyboard,
    faCoins,
    faGear,
    faVideo,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import Menu from '../Popper/Menu';
import { faCircleQuestion, faMoon, faUser } from '@fortawesome/free-regular-svg-icons';
import { InboxIcon, MessageIcon } from '~/components/Icons/Index';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>,
        title: 'English',
        subMenu: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Keyboard shortcuts',
    },
];
const currentUser = true;

function Header() {
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
            title: 'View profile',
            to: '/@mixi',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>,
            title: 'LIVE studio',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>,
            title: 'Dark mode',
        },
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={imgs.logo} alt="tiktok" />
                {/* Search */}
                <Search />
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button className={cx('upload')} leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Tippy content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    {/* <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon> */}
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    {/* <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon> */}
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button className={cx('upload')} leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avarta')}
                                alt="Teo Em"
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a187c4dfa896a5ea449a4c5d3927b20a~c5_100x100.jpeg?x-expires=1667426400&x-signature=DGhI0oAaaC1G1tOjYJxvuFuf%2Btg%3D"
                            ></Image>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
