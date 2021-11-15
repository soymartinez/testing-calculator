import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { UiComponent } from './ui.component';

// describe('UiComponent', () => {
//   let component: UiComponent;
//   let fixture: ComponentFixture<UiComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [UiComponent],
//       imports: [FormsModule]
//     })
//       .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(UiComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should render tittle Área del circulo', () => {
  //   let de = fixture.debugElement.query(By.css('.text-area'));
  //   let el: HTMLElement = de.nativeElement;
  //   // Assert
  //   expect(el.innerText).toContain('Área del circulo');
  // });

  // it('should call area method', () => {
  //   // Arrange
  //   let result = '';
  //   component.radio = '1';
  //   // Act
  //   component.area();
  //   result = component.result;
  //   // Assert
  //   expect(result).toBe('3.14');
  // });

  // it('should add area when I click the calculate button', () => {
  //   // Arrange 
  //   component.radio = '2.5';
  //   let additionButton = fixture.debugElement.query(By.css('.btn'));
  //   // Act
  //   additionButton.triggerEventHandler('click', null);
  //   // Assert
  //   expect(component.result).toBe('19.63');
  // });

  // it('should render area in div h2', () => {
  //   // Arrange
  //   component.radio = '5';
  //   // Act
  //   component.area();
  //   fixture.detectChanges();
  //   let de = fixture.debugElement.query(By.css('.resultado h2'));
  //   let el: HTMLElement = de.nativeElement;
  //   // Assert
  //   expect(el.innerText).toContain('78.50');
  // });

  // it('should only accept numbers', () => {
  //   // Arrange
  //   let result = '';
  //   component.radio = 'e+';
  //   // Act
  //   component.area();
  //   result = component.result;
  //   // Assert
  //   expect(result).toBe('NaN');
  // });

  // it('should accept decimals', () => {
  //   // Arrange
  //   let result = '';
  //   component.radio = '14.55';
  //   // Act
  //   component.area();
  //   result = component.result;
  //   // Assert
  //   expect(result).toBe('664.75');
  // });

  // it('should capture the typed', () => {
  //   // Arrange
  //   let result = '';
  //   component.radio = '123';
  //   // Act
  //   component.area();
  //   result = component.result;
  //   // Assert
  //   expect(result).toBe('47505.06');
  // });
// });