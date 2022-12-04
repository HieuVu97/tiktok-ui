import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
const cx = classNames.bind(styles);
function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={null} />
                <MenuItem title="Following" to={config.routes.following} icon={null} />
                <MenuItem title="LIVE" to={config.routes.live} icon={null} />
            </Menu>
        </aside>
    );
}

export default SideBar;