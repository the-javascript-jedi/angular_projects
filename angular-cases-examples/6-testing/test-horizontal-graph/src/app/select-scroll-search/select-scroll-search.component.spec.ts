import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';

import { SelectScrollSearchComponent } from './select-scroll-search.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { async, of } from 'rxjs';

describe('SelectScrollSearchComponent', () => {
  let component: SelectScrollSearchComponent;
  let fixture: ComponentFixture<SelectScrollSearchComponent>;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectScrollSearchComponent ],
      imports: [HttpClientTestingModule]
    })
    fixture = TestBed.createComponent(SelectScrollSearchComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expect variables to be initialized', () => {
    expect(component).toBeTruthy(); // Trigger change detection
    fixture.detectChanges();
    // Check that the component's name property was updated
    expect(component.apiEndpoint).toEqual('games');
    expect(component.defaultDropdownValue).toEqual('');
  });

  it('verify selectListItem function', () => {
    // if selectListItem
    component.selectListItem('');
    // else selectListItem
    component.selectListItem('test');
    expect(component.selectListItem).toBeDefined();
  });

  it('verify select focusSearchKeyUp function', () => {
    component.focusSearchKeyUp();
    expect(component.focusSearchKeyUp).toBeDefined();
  });

  it('verify clearSearchText function', () => {
    component.clearSearchText();
    expect(component.clearSearchText).toBeDefined();
  });

});
//============================================================================================//
// ngAfterViewInit
describe('SearchDropdownComponent', () => {
  let component: SelectScrollSearchComponent;
  let fixture: ComponentFixture<SelectScrollSearchComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SelectScrollSearchComponent],
      // providers: [ApiDataService]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(SelectScrollSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search for data when keyup event is triggered', fakeAsync(() => {
    const searchInput = fixture.debugElement.query(By.css('.search-input')).nativeElement;
    let result1={id: 0, description: "Halo: Combat Evolved", contribution: 1.93705}
    const loadResponseSpy = spyOn(component, 'loadResponse').and.returnValue(of([result1]));
    
    searchInput.value = 'test';
    searchInput.dispatchEvent(new Event('keyup'));
    tick(400);
    
    expect(loadResponseSpy).toHaveBeenCalledWith('test');
    expect(component.responseData).toEqual([result1]);
  }));
});


//============================================================================================//
// ngOnInit
describe('SearchDropdownComponent', () => {
  let component: SelectScrollSearchComponent;
  let fixture: ComponentFixture<SelectScrollSearchComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SelectScrollSearchComponent],
      // providers: [ApiDataService]
    }).compileComponents();
  }));
 beforeEach(() => {
    fixture = TestBed.createComponent(SelectScrollSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 it('should load response data and set dropdown value in init', () => {
    let result1={id: 0, description: "Halo: Combat Evolved", contribution: 1.93705}
    const loadResponseSpy = spyOn(component, 'loadResponse').and.returnValue(of([result1]));
    component.defaultDropdownValue='test';
    component.ngOnInit();
    expect(loadResponseSpy).toHaveBeenCalled();
    expect(component.responseData).toEqual([result1]);
  });
})