import { Fragment } from 'react';
import Header from '../../Header/Header';
import s from './Layout.module.scss';

const Layout = (props) => {
    return <Fragment>
        <Header />
        <main className={s.main}>{props.children}</main>
    </Fragment>
}

export default Layout;