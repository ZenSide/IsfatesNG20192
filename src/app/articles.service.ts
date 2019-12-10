import {Injectable} from '@angular/core';
import {Article} from './models/article.model';

@Injectable({
        providedIn: 'root'
})
export class ArticlesService {

        public articles: Article[] = [
                {title: 'Titre 1', content: 'blabla'},
                {title: 'Titre 2', content: 'blabla 2'},
                {title: 'Titre 3', content: 'blabla 2'},
        ];

        constructor() {
        }
}
