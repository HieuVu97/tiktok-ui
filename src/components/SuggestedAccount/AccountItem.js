import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './SuggestedAccount.module.scss';

import { Wrapper as PopperWrapper } from '../Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

const renderPreview = (props) => {
    return (
        <div tabIndex="-1" {...props}>
            <PopperWrapper>
                <AccountPreview />
            </PopperWrapper>
        </div>
    );
};

function AccountItem() {
    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} render={renderPreview} placement="bottom">
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/3d61ebee610a3aad86d91d147fda035c.jpeg?x-expires=1672174800&x-signature=FREcwSnhno9cBzYaclbNl6eTn24%3D"
                        alt=""
                    ></img>
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>tattoochair</strong>
                            <FontAwesomeIcon className={cx('ckeck-icon')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Tattoo Chair </p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
AccountItem.propsType = {};
export default AccountItem;
