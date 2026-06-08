import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosNgrxComponent } from './todos-ngrx.component';

describe('TodosNgrxComponent', () => {
  let component: TodosNgrxComponent;
  let fixture: ComponentFixture<TodosNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosNgrxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
