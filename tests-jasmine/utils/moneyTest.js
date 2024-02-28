import { formatCurrency } from "../../scripts/utils/money.js";

describe('test suite : formatCurrency', ()=>{
    it('converts cents to dollars', ()=>{
        expect(formatCurrency(2095)).toEqual('20.95');
    })

    it('rounds upto two digits', ()=>{
        expect(formatCurrency(2000.4)).toEqual('20.00');
    })

});