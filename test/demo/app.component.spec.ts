import { Component} from '@angular/core';
import {
    async,
    inject,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';

import { AppComponent } from '../../demo/app.component';

describe('App component', () => {
    const testTemplate = '<div>TEST</div>';

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent]
        });
    });

    it('should build without error', async(() => {
        TestBed.overrideComponent(AppComponent, {
            set: {
                template: testTemplate,
                templateUrl: null
            }
        });

        TestBed.compileComponents().then(() => {
            const fixture = TestBed.createComponent(AppComponent);
            fixture.detectChanges();
            const compiled = fixture.debugElement.nativeElement;

            expect(compiled).not.toBeNull();
        });
    }));
});