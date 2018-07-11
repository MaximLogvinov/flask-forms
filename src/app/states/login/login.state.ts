import { LoginPage } from './login.page';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

/**
 * Metada of home state
 *
 *
 */
export const loginState = {
    name: 'login',
    url: '/login',
    views: {
        header: { component: HeaderComponent },
        $default: { component: LoginPage },
        footer: { component: FooterComponent }
        },
    resolve: [
        {
            token: 'people',
            deps: [],
            resolveFn: () => {
                return new Promise(( resolve, reject ) => {
                    setTimeout(resolve, 2 * 1000);
                });
            }
        }
    ]
};
