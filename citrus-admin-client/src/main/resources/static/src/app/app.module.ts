import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header.component';
import { SidebarComponent } from './components/sidebar.component';
import { LogComponent } from './components/log.component';
import { ComingComponent } from './components/coming.component';
import { TestResultComponent } from './components/test.result.component';

import { AlertConsole } from './components/alert.console';
import { AlertDialog } from './components/alert.dialog';
import {FileSelectComponent} from "./components/file-select/file-select.component";
import {SetupComponent} from "./components/setup.component";
import {ConfigurationModule} from "./components/configuration/configuration.module";
import {UtilComponentsModule} from "./components/util/util.module";
import {ServiceModule} from "./service/service.module";
import {ProjectModule} from "./components/project/project.module";
import {UtilModule} from "./util/util.module";
import {TestModule} from "./components/test/test.module";
import {StateModule} from "./state.module";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        AppRoutingModule,
        ConfigurationModule,
        UtilComponentsModule,
        UtilModule,
        ServiceModule,
        ProjectModule,
        TestModule,
        StateModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        SidebarComponent,
        LogComponent,
        ComingComponent,
        TestResultComponent,
        AlertConsole,
        AlertDialog,
        SetupComponent,
        FileSelectComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}