import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Type } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchService } from 'src/app/services/search.service';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [SearchBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getTags on init', () => {
    let service = fixture.debugElement.injector.get<SearchService>(
      SearchService as Type<SearchService>
    );
    let serviceSpy = spyOn(service, 'getTags').and.callThrough();
    component.ngOnInit();
    expect(serviceSpy).toHaveBeenCalled();
  });

  it('should call searchClicked when search icon clicked', fakeAsync(() => {
    spyOn(component, 'searchClicked');

    let button =
      fixture.debugElement.nativeElement.querySelector('.search-btn');
    button.click();
    tick();
    expect(component.searchClicked).toHaveBeenCalled();
  }));
});
