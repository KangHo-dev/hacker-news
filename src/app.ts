import Router from './core/router';
import { NewsFeedView, NewsDetailView } from './page';
import { Store } from './types';

const pagingSize = Number(10);

const store: Store = {
    currentPage: 1,
    pagingSize: 10,
    feeds: [],
};

declare global {
    interface Window {
        store: Store;
    }
}

window.store = store;


const router: Router = new Router();
const newsFeedView = new NewsFeedView('root');
const newsDetailView = new NewsDetailView('root');

router.setDefaultPage(newsFeedView);

router.addRoutePath('/page/', newsFeedView);
router.addRoutePath('/show/', newsDetailView);

router.route();