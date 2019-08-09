import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchClickComponent } from './search-click.component';

describe('SearchClickComponent', () => {
  let component: SearchClickComponent;
  let fixture: ComponentFixture<SearchClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
