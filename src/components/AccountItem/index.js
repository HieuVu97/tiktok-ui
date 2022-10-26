import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classname from 'classnames/bind';
import styles from './Account.module.scss';

const cx = classname.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b8b061a1078f977fd11b58dcd6c14bce.jpeg?x-expires=1665709200&x-signature=RQe59w%2B%2FGUZ6Ql5iPKBDgXZyzvI%3D"
                alt="Hieu"
            ></img>
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Hieu Vu</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>hieuvu</span>
            </div>
        </div>
    );
}

export default AccountItem;
