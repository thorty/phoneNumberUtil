import * as libphonenumber from "google-libphonenumber";
export declare class PhoneNumberUtil {
    phoneNumber: libphonenumber.PhoneNumber;
    constructor(input: string, languageCode: string[]);
    isPhoneNumberValid(): boolean;
    isPhoneNumberMobile(): boolean;
    isPhoneNumberFixedline(): boolean;
    isPhoneNumberValidForRegion(): boolean;
    getE164PhoneNumberString(): string;
}
