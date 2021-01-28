import * as chai from 'chai';
import { PhoneNumberUtil } from '../phoneNumberUtil';

const expect = chai.expect;

describe( 'is the given phnenmbr valid', () => {
    it( '01708122628, DE is valid', () => {
        let pu = new PhoneNumberUtil( "01708122628", "DE" )
        expect( pu.isPhoneNumberValid() ).to.eql( true );
    } );

    it( '755539603, DE is valid', () => {
        let pu = new PhoneNumberUtil( "755539603", "DE" )
        expect( pu.isPhoneNumberValid() ).to.eql( true );
    } );

    it( '011234567, DE is invalid', () => {
        let pu = new PhoneNumberUtil( "011234567", "DE" )
        expect( pu.isPhoneNumberValid() ).to.eql( false );
    } );

    it( '0175555555555, DE is invalid', () => {
        let pu = new PhoneNumberUtil( "0175555555555", "DE" )
        expect( pu.isPhoneNumberValid() ).to.eql( false );
    } );

    it( '01755555555, DE is valid', () => {
        let pu = new PhoneNumberUtil( "01755555555", "DE" )
        expect( pu.isPhoneNumberValid() ).to.eql( true );
    } );

    it( '017555555, DE is invalid', () => {
        let pu = new PhoneNumberUtil( "017555555", "DE" )
        expect( pu.isPhoneNumberValid() ).to.eql( false );
    } );

} );

describe( 'is the given number mobile or fixedline', () => {
    it( '01708122628, DE is mobile', () => {
        let pu = new PhoneNumberUtil( "01708122628", "DE" )
        expect( pu.isPhoneNumberMobile() ).to.eql( true );
    } );

    it( '755539142, DE is fixedline', () => {
        let pu = new PhoneNumberUtil( "755539142", "DE" )
        expect( pu.isPhoneNumberFixedline() ).to.eql( true );
    } );
} );


describe( 'get E164 formattet Number from String', () => {
    it( '01708122628, DE equals +491708122628', () => {
        let pu = new PhoneNumberUtil( "01708122628", "DE" )
        expect( pu.getE164PhoneNumberString() ).to.eql( "+491708122628" );
    } );

} )

