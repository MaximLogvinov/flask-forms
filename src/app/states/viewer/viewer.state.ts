import { ViewerPage } from './viewer.page';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

/**
 * Metada of home state
 *
 *
 */
export const viewerState = {
    parent: 'layout',
    name: 'viewer',
    url: '/viewer',
    views: {
        header: { component: HeaderComponent },
        $default: { component: ViewerPage },
        footer: { component: FooterComponent }
    },
};
