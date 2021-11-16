import { circle } from "./circle.component";

describe('Circle Unit Tests', () => {
    
    it('should return Error if radio is empty', () => {
        // Arrange
        let result: any = 0;
        // Act
        result = circle('');
        // Assert
        expect(result).toBe('0.00');
    })

    it('should return Error if radio is 0', () => {
        // Arrange
        let result: any = 0;
        // Act
        result = circle(0);
        // Assert
        expect(result).toBe('0.00');
    })

    it('should return Error if an error occurs', () => {
        // Arrange
        let result: any = 0;
        // Act
        result = circle('69+');
        // Assert
        expect(result).toBe('NaN');
    })

    it('should return 314 when radius is 10', () => {
        // Arrange
        let result: any = 0;
        // Act
        result = circle(10);
        // Assert
        expect(result).toBe('314.00');
    })

    it('should return 3.14 when radius is 1', () => {
        // Arrange
        let result: any = 0;
        // Act
        result = circle(1);
        // Assert
        expect(result).toBe('3.14');
    })

    it('should return 34.19 when radius is 3.3', () => {
        // Arrange
        let result: any = 0;
        // Act
        result = circle(3.3);
        // Assert
        expect(result).toBe('34.19');
    })
})