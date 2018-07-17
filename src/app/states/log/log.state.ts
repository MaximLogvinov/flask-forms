import { LogPage } from './log.page';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

/**
 * Metada of home state
 *
 *
 */
export const logState = {
    parent: 'layout',
    name: 'log',
    url: '/log?{sortEvent=string}&{sortStatus=str}&{page=integer}&{size=int}',
    views: {
        header: { component: HeaderComponent },
        $default: { component: LogPage },
        footer: { component: FooterComponent }
    },
    params: {
        page: '1',
        size: '5',
        sortStatus: 's',
        sortEvent: 'e',
    },
};
