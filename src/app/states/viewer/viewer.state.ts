import { ViewerPage } from './viewer.page';
// components
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
// services
import { CRFService } from '../../services/CRF.service';
import { Transition } from '@uirouter/angular';
/**
 * Metada of home state
 *
 *
 */
export const viewerState = {
    parent: 'layout',
    name: 'viewer',
    url: '/viewer/{token}',
    views: {
        header: { component: HeaderComponent },
        $default: { component: ViewerPage },
        footer: { component: FooterComponent }
    },
    params: {
        token: '6BHhTZ1sWeQj' // default value
    },
    resolve: [
        {
            token: 'viewer',
            deps: [ CRFService, Transition ],
            resolveFn: ( crf, trans ) => {
                // setting initial ( current ) CRF token
                crf.token = trans.params().token;
            }
        }
    ]
};
