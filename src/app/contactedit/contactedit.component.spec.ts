import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacteditComponent } from './contactedit.component';

describe('ContacteditComponent', () => {
  let component: ContacteditComponent;
  let fixture: ComponentFixture<ContacteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContacteditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContacteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
