import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSaveComponent } from './contact-save.component';

describe('ContactSaveComponent', () => {
  let component: ContactSaveComponent;
  let fixture: ComponentFixture<ContactSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
