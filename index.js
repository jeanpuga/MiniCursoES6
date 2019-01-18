//Spread
const [a, b, ...rest] = [1, 2, 3, 4, 5];

console.log(a); // 1
console.log(b); // 2
console.log(rest); // 3, 4, 5


//Class
class Brand{
    static XPSeg(){
        return {BrandCode:3, Name:'XPSeg'}
    }
    static Rico(){
        return {BrandCode:386, Name:'Rico'}
    }
    static Clear(){
        return {BrandCode:308, Name:'Clear'}
    }
}

class Portability {
    constructor(insurerPortabilityCode) {
        this.insurerPortabilityCode = insurerPortabilityCode;
    }

    print() {
        console.log('insurerPortabilityCode', this.insurerPortabilityCode + '.');
    }
}

class Order {
    constructor(insurerProposalCode) {
        this.insurerProposalCode = insurerProposalCode;
        this.portabilities = [];
    }

    print() {
        console.log('InsurerCode', this.insurerProposalCode + '.');
    }

    addPortability(value){
        this.portabilities.push(value);
    }
}

class XPSeg extends Order {
    constructor(insurerProposalCode) {
        super(insurerProposalCode);
    }

    get Brand() {
        return Brand.XPSeg();
    }

}

const proposal = new XPSeg(123123) ;
proposal.Brand;
proposal.addPortability(new Portability(2222));
proposal.portabilities.forEach(e=>console.log(e.insurerPortabilityCode));

//Modulos
import { soma } from 'js/maths.js'

soma(1, 2)