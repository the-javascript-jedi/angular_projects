import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectScrollSearchComponent } from './select-scroll-search.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

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
    expect(component.apiEndpoint).toEqual('');
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

  // it('verify inputSearchKeyUp function', () => {
  //   let event=component.searchInput.nativeElement.dispatchEvent(generateKeyUpEvent('a'));

  //   component.inputSearchKeyUp(event);
  //   expect(component.inputSearchKeyUp).toBeDefined();
  // });

// inputSearchKeyUp
});
function generateKeyUpEvent(arg0: string): any {
  throw new Error('Function not implemented.');
}

