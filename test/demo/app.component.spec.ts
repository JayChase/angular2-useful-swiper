import { Component} from '@angular/core';
import {
    async,
    inject,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';

import { AppComponent } from '../../demo/app.component';

describe('App component', () => {
    var testTemplate = '<div>TEST</div>';

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent]
        });
    });

    it('should build without error', async(() => {
        TestBed.overrideComponent(AppComponent, {
            set: {
                template: testTemplate
            }
        });

        TestBed.compileComponents().then(() => {
            var fixture = TestBed.createComponent(AppComponent);
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;

            expect(compiled).not.toBeNull();
        });
    }));
});