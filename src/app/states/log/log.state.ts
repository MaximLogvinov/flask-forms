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
    url: '/log?sortField&sortDirection&page&size',
    views: {
        header: { component: HeaderComponent },
        $default: { component: LogPage },
        footer: { component: FooterComponent }
    },
    params: {
        page: '1',
        size: '5',
        sortField: 'status',
        sortDirection: 'asc'
        // sortEvent: 'name,asc'
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
            }
        }
    ]
};
