
import * as libphonenumber from "google-libphonenumber";

const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
const PNF = libphonenumber.PhoneNumberFormat;



export class PhoneNumberUtil {

    phoneNumbers: libphonenumber.PhoneNumber[] = new Array();

    constructor ( input: string, languageCodes: string[] ) {
        if ( !languageCodes.includes( "all" ) ) {
            for ( let languagecode of languageCodes ) {
                try {
                    this.phoneNumbers.push( phoneUtil.parse( input, languagecode ) );
                } catch ( ex ) {

                }
            }
        }
        else if ( languageCodes.includes( "all" ) ) {
            // todo use all possible regions eg ES, FR, GB, US,...
            this.phoneNumbers.push( phoneUtil.parse( input, "DE" ) );
        }
    }

    isPhoneNumberValid (): boolean {
        let result = false;
        for ( let phonenumber of this.phoneNumbers )
            if ( phoneUtil.isPossibleNumber( phonenumber ) && phoneUtil.isValidNumber( phonenumber ) && phoneUtil.getNumberType( phonenumber ) !== -1 ) {
                return true;
            }
        return result;
    }


    isPhoneNumberMobile (): boolean {
        let result: boolean = false;
        for ( let phonenumber of this.phoneNumbers ) {
            if ( phoneUtil.getNumberType( phonenumber ) === 1 ) {
                return true;

            }
        }
        return result;
    }

    isPhoneNumberFixedline (): boolean {
        let result: boolean = false;
        for ( let phonenumber of this.phoneNumbers ) {
            if ( phoneUtil.getNumberType( phonenumber ) === 0 ) {
                return true;

            }
        }
        return result;
    }


    isPhoneNumberValidForRegion (): boolean {
        let result: boolean = false;
        for ( let phonenumber of this.phoneNumbers ) {
            if ( phoneUtil.isPossibleNumber( phonenumber ) && phoneUtil.isValidNumberForRegion( phonenumber ) && phoneUtil.getNumberType( phonenumber ) !== -1 ) {
                return true;

            }
        }
        return result;
    }

    getE164PhoneNumberString (): string[] {
        let result: string[] = new Array();
        for ( let phonenumber of this.phoneNumbers ) {
            result.push( phoneUtil.format( phonenumber, PNF.E164 ) );
        }
        return result;
    }

}

