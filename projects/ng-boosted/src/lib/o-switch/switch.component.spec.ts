import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { OSwitchComponent } from './switch.component';

describe('OSwitchComponent', () => {
  let component: OSwitchComponent;
  let fixture: ComponentFixture<OSwitchComponent>;
  let input;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [FormsModule],
      declarations: [ OSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OSwitchComponent);
    component = fixture.componentInstance;
    input  = fixture.debugElement.query(By.css('.custom-control-input'));
    fixture.detectChanges();
  });

  it('should create Switch Component', () => {
    expect(component).toBeTruthy();
  });

  it('The value of toggled should be false', () => {
    expect(component.toggled).toBeFalsy();
  });

  it('The id name of the input tag should be Input#1', () => {
    component.inputId = 'Input#1';
    fixture.detectChanges();
    const inputTagHtml: HTMLElement = fixture.debugElement.nativeElement;
    expect(inputTagHtml.querySelector('input').getAttribute('id')).toEqual('Input#1');
  });

  it('Simulate a click on the input with subscription to the output', () => {
    component.toggled = true;
    component.inputId = 'Input#2';
    input.triggerEventHandler('click', null);

    fixture.detectChanges();

    component.isChecked.subscribe(inputtoggled => expect(inputtoggled).toBeFalsy());
  });

});
