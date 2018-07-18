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
    url: '/log?sortStatus&sortEvent&page&size',
    views: {
        header: { component: HeaderComponent },
        $default: { component: LogPage },
        footer: { component: FooterComponent }
    },
    params: {
        page: '1',
        size: '5',
        sortStatus: 'status,asc',
        sortEvent: 'name,asc'
    },
    resolve: [
        {
            token: 'crf',
            deps: [ CRFService, Transition ],
            resolveFn: ( crf, trans ) => {
                crf.page = trans.params().page;
                crf.size = trans.params().size;
                crf.sortStatus = trans.params().sortStatus;
                crf.sortEvent = trans.params().sortEvent;
                console.log(crf.page, crf.size, crf.sort);
                console.log( trans.params() );
            }
        }
    ]
};
