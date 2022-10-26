import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import imgs from '~/components/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faUpload, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '../Popper';
import AccountItem from '../../../AccountItem';
const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        // setTimeout(() => {
        //     setSearchResult([1]);
        // }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={imgs.logo} alt="tiktok" />
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                {/* <Tippy
                    render={(attrs) => (
                        <div className="box" tabIndex="-1" {...attrs}>
                            My asdasd
                        </div>
                    )}
                >
                    <button>My button</button>
                </Tippy> */}
                <div className={cx('action')}>
                    <Button className={cx('upload')} leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    <Button primary>Log in</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
