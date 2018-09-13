import { LogPage } from './log.page';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CRFService } from '../../services/CRF.service';
import { Transition } from '@uirouter/angular';

/**
 * Metada of home state
 *
 *
 */
export const logState = {
    parent: 'layout',
    name: 'log',
    url: '/log/{token}?sortField&sortDirection&page&size',
    views: {
        header: { component: HeaderComponent },
        $default: { component: LogPage },
        footer: { component: FooterComponent }
    },
    params: {
        token: '', // token field is empty because we setting initial token value in viewer state
        page: '1',
        size: '5',
        sortField: 'status',
        sortDirection: 'asc'
    },
    resolve: [
        {
            token: 'crflist',
            deps: [ CRFService, Transition ],
            resolveFn: ( crf, trans ) => {
                // setting initial page values
                crf.page = trans.params().page;
                crf.size = trans.params().size;
                crf.sortField = trans.params().sortField;
                crf.sortDirection = trans.params().sortDirection;
                // setting token value which we get from viewer
                crf.token = trans.params().token;
                console.log(crf.token);
            }
        }
    ]
};
