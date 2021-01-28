
import libphonenumber from 'google-libphonenumber';

const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
const PNF = libphonenumber.PhoneNumberFormat;



export class PhoneNumberUtil {

    phoneNumber: libphonenumber.PhoneNumber = new libphonenumber.PhoneNumber;

    constructor ( input: string, languageCode: string ) {
        this.phoneNumber = phoneUtil.parse( input, languageCode );
    }

    isPhoneNumberValid (): boolean {
        if ( phoneUtil.isPossibleNumber( this.phoneNumber ) && phoneUtil.isValidNumber( this.phoneNumber ) && phoneUtil.getNumberType( this.phoneNumber ) !== -1 ) {
            return true;
        } else {
            return false;
        }
    }


    isPhoneNumberMobile (): boolean {
        if ( phoneUtil.getNumberType( this.phoneNumber ) === 1 ) {
            return true;
        } else {
            return false;
        }
    }

    isPhoneNumberFixedline (): boolean {
        if ( phoneUtil.getNumberType( this.phoneNumber ) === 0 ) {
            return true;
        } else {
            return false;
        }
    }


    isPhoneNumberValidForRegion (): boolean {
        if ( phoneUtil.isPossibleNumber( this.phoneNumber ) && phoneUtil.isValidNumberForRegion( this.phoneNumber ) && phoneUtil.getNumberType( this.phoneNumber ) !== -1 ) {
            return true;
        } else {
            return false;
        }
    }

    getE164PhoneNumberString (): string {
        return phoneUtil.format( this.phoneNumber, PNF.E164 )
    }

}

