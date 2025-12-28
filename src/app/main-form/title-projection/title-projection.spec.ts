import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleProjection } from './title-projection';

describe('TitleProjection', () => {
  let component: TitleProjection;
  let fixture: ComponentFixture<TitleProjection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleProjection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleProjection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
