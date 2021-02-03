import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let spy: jasmine.Spy;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [NgbModule, HttpClientModule],
      schemas: [
        NO_ERRORS_SCHEMA,
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the chart', () => {
    const element = fixture.nativeElement.querySelector('app-pie-chart');
    expect(element).toBeTruthy();
  });

  it('should not have data before init', () => {
    expect(component.data.length).toBe(0);
  });

  it('should call ngoninit', () => {
    spy = spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should call generatePieChart', () => {
    const mockData = {
      comics: {available: 30},
      series: {available: 50}
    }
    spy = spyOn(component, 'generatePieChart').and.callThrough();
    component.generatePieChart(mockData);
    expect(spy).toHaveBeenCalled();
  });

  it('should call showItemDetails', () => {
    const mockData = {
      comics: {available: 30},
      series: {available: 50}
    }
    spy = spyOn(component, 'showItemDetails').and.callThrough();
    component.showItemDetails(mockData);
    expect(spy).toHaveBeenCalled();
  });

});
