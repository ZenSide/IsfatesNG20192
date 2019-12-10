import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';
import {PubComponent} from './pub/pub.component';
import {FooterComponent} from './footer/footer.component';
import {AccueilComponent} from './accueil/accueil.component';
import {ContactComponent} from './contact/contact.component';
import {ArticleListComponent} from './article-list/article-list.component';
import {SingleArticleComponent} from './single-article/single-article.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
        declarations: [
                AppComponent,
                HeaderComponent,
                MenuComponent,
                PubComponent,
                FooterComponent,
                AccueilComponent,
                ContactComponent,
                ArticleListComponent,
                SingleArticleComponent
        ],
        imports: [
                BrowserModule,
                AppRoutingModule,
                HttpClientModule
        ],
        providers: [],
        bootstrap: [AppComponent]
})
export class AppModule {
}
