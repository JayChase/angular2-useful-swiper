## angular2-useful-swiper

Use iDangero.us's great slider [Swiper](http://idangero.us/swiper/#.V9C3w4VOLaI) in Angular 2.

#### Quick links
[Plunker template](http://embed.plnkr.co/qM4jHG/), 
[Swiper homepage](http://idangero.us/swiper/#.WTiywWiGNhE)

### Install

```bash
npm install --save angular2-useful-swiper
```

### Setup

Add Swiper to your single page

```html
  <link href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.3.1/css/swiper.min.css" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.3.1/js/swiper.js"></script>
```

..or with angular-cli you can add the package

```bash
npm install --save swiper
```

then add the js and css to angular-cli.json


```json
    "styles": [
        "styles.css",
        "../node_modules/swiper/dist/css/swiper.css"        
    ],
    "scripts": [
        "../node_modules/swiper/dist/js/swiper.js"                
    ],
```

#### SystemJS

In the SystemJs config file (systemjs.config.js) add a mapping for the package

```javascript
var map = {
    ...
    'angular2-useful-swiper': 'node_modules/angular2-useful-swiper/lib'
};
```

and add the package to the list of packages.

 ```javascript
var packages = {
    ...
    'angular2-useful-swiper': { main: 'swiper.module.js', defaultExtension: 'js' }
};
```

#### or for angular-cli

Just install the package and then import the module as below.

### How to use it

Import the **SwiperModule** at the appropiate level in your app.

For example in **app.module.ts**

```javascript
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { MdCardModule } from '@angular2-material/card';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';
import { MdInputModule } from '@angular2-material/input';

import { SwiperModule } from 'angular2-useful-swiper';

import { AppComponent }   from './app.component';
import { DemoComponent }   from './demo.component';

@NgModule({
    imports: [
        BrowserModule,
        MdCardModule,
        MdToolbarModule,
        MdButtonModule,
        SwiperModule
    ],
    declarations: [
        AppComponent,
        DemoComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

Add the swiper component to your component to create a slider and add the content as you normally would to set up a slider (see the official [demos](http://idangero.us/swiper/demos/#.V9C73YVOLaI) for more information).
Note, you don't need to include the **swiper-container** div just the content, but the slides should be contained in a **swiper-wrapper** div and have the class **swiper-slide**.

```html
 <my-component>
       <swiper [config]="config">
        <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
                <div class="swiper-slide">Slide 6</div>
                <div class="swiper-slide">Slide 7</div>
                <div class="swiper-slide">Slide 8</div>
                <div class="swiper-slide">Slide 9</div>
                <div class="swiper-slide">Slide 10</div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
            <!-- Add Arrows -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </swiper>
 </my-component>
```

Set the config for the swiper in you component and bind it to the component config property as above.

```javascript
export class MyComponent implements OnInit {

    config: SwiperOptions = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30
        };
```

Set the height and width of the component. It can be targeted by its name ##swiper##

```css
swiper{
    height: 300px;
    width: 400px;
}
```

The component also checks for the contents of swiper-wrapper being changed and calls update on the swiper when they are. 
This allows for dynamic slide lists as you can see from the demo in this repo.

```html
<swiper [config]="config">
    <div class="swiper-wrapper">
        <img class="swiper-slide" *ngFor="let image of images" [src]="image">
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
</swiper>
```

**note for Bootstrap users**

To ensure the swiper works will with a column layout you may need to set the box-sizing to border-box on the swiper-wrapper.

```css
.swiper-wrapper {
    box-sizing: border-box;
}
```

#### Manually initializing the Swiper

By default the Swiper will be created in the **AfterViewChecked** event of the component. If the swiper is not going to have been rendered at this time (if it is on a hidden tab for example), it is best to handle the initialization manually.
To do this use the component's **initialize** property and only set it's value to true when ready. This will then initialize the Swiper the next time the next AfterViewChecked event is fired to ensure the DOM is ready. 

```html
<mdl-tabs mdl-ripple mdl-tab-active-index="0">
	<mdl-tab-panel mdl-tab-panel-title="Tab1">
		
	</mdl-tab-panel>
	<mdl-tab-panel mdl-tab-panel-title="Tab2" #panel>
		<swiper [config]="config" class="wrap1" [initialize]="panel.isActive">
			<div class="swiper-wrapper wrap1">
				<img class="swiper-slide" *ngFor="let image of trigger.images" [src]="image">
			</div>
			<div class="swiper-pagination"></div>
			<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>
		</swiper>
	</mdl-tab-panel>	
</mdl-tabs>
```

#### Accessing the Swiper instance

When a new instance of Swiper is created it is set as a property on the component. You can then access this by using a [template reference](https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ref-vars).
For example add the template reference **#usefulSwiper**

```html
<swiper [config]="config" #usefulSwiper>
    <div class="swiper-wrapper">
        <img class="swiper-slide" *ngFor="let image of images" [src]="image">
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
</swiper>
```

..and then you can use the reference to access the **swiper** property.

```html
<button (click)="usefulSwiper.swiper.createLoop()">loop</button>
```

To access the swiper instance and all of it's properties, methods and events use a viewchild to get the component.swiper property.

```typescript
 @ViewChild('usefulSwiper') usefulSwiper: SwiperComponent;

 ...

  next() {
    this.usefulSwiper.swiper.slideNext();
  }
```

### Future

Next step is to improve the TypeScript integration by creating an interface for the options. Maybe also create some content templates for frequently used sliders. 
