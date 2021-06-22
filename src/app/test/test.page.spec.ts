import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { testPage } from './test.page';

describe('testPage', () => {
  let component: testPage;
  let fixture: ComponentFixture<testPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ testPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(testPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
