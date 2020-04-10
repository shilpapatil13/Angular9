import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CompareComponent } from './compare/compare.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FundListModalComponent } from './fund-list-modal/fund-list-modal.component';
import { PerformanceGraphComponent } from './common/performance-graph/performance-graph.component';
import { FundDetailsComponent } from './common/fund-details/fund-details.component';
import { FundReturnsComponent } from './common/fund-returns/fund-returns.component';
import { ProsAndConsComponent } from './common/pros-and-cons/pros-and-cons.component';
import { RatingComponent } from './common/rating/rating.component';
import { InvestmentComponent } from './common/investment/investment.component';
import { CompareFundComponent } from './common/compare-fund/compare-fund.component';
import { CompareChartComponent } from './compare-chart/compare-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DetailsComponent,
    CompareComponent,
    FundListModalComponent,
    PerformanceGraphComponent,
    FundDetailsComponent,
    FundReturnsComponent,
    ProsAndConsComponent,
    RatingComponent,
    InvestmentComponent,
    CompareChartComponent,
    CompareFundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
