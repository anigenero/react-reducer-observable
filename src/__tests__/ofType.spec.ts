import {ofType} from '../ofType';

describe('ofType', () => {

    it('should throw types error for null', () => {
        expect(ofType(null)).toThrowError();
    });

    it('should throw types error for undefined', () => {
        expect(ofType(undefined)).toThrowError();
    });

    it('should throw argument length error', () => {
        // @ts-ignore
        expect(ofType()).toThrowError();
    });

});
