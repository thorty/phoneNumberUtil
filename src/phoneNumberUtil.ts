
import * as libphonenumber from "google-libphonenumber";

const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
const PNF = libphonenumber.PhoneNumberFormat;



export class PhoneNumberUtil {

    phoneNumber: libphonenumber.PhoneNumber = new libphonenumber.PhoneNumber;

    constructor ( input: string, languageCode: string[] ) {
        if ( languageCode.length === 1 && languageCode[0] !== "all" ) {
            this.phoneNumber = phoneUtil.parse( input, languageCode[0] );
        }
        else if ( languageCode[0] === "all" ) {
            // todo use all possible regions eg ES, FR, GB, US,...
            this.phoneNumber = phoneUtil.parse( input, "DE" );
        }
    }

    isPhoneNumberValid (): boolean {
        if ( phoneUtil.isPossibleNumber( this.phoneNumber ) && phoneUtil.isValidNumber( this.phoneNumber ) && phoneUtil.getNumberType( this.phoneNumber ) !== -1 ) {
            return true;
        }
        else {
            return false;
        }
    }


    isPhoneNumberMobile (): boolean {
        if ( phoneUtil.getNumberType( this.phoneNumber ) === 1 ) {
            return true;
        }
        else {
            return false;
        }
    }

    isPhoneNumberFixedline (): boolean {
        if ( phoneUtil.getNumberType( this.phoneNumber ) === 0 ) {
            return true;
        }
        else {
            return false;
        }
    }


    isPhoneNumberValidForRegion (): boolean {
        if ( phoneUtil.isPossibleNumber( this.phoneNumber ) && phoneUtil.isValidNumberForRegion( this.phoneNumber ) && phoneUtil.getNumberType( this.phoneNumber ) !== -1 ) {
            return true;
        }
        else {
            return false;
        }
    }

    getE164PhoneNumberString (): string {
        return phoneUtil.format( this.phoneNumber, PNF.E164 );
    }

}

