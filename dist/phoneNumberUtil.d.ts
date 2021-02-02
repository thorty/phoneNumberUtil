import * as libphonenumber from "google-libphonenumber";
export declare class PhoneNumberUtil {
    phoneNumbers: libphonenumber.PhoneNumber[];
    constructor(input: string, languageCodes: string[]);
    isPhoneNumberValid(): boolean;
    isPhoneNumberMobile(): boolean;
    isPhoneNumberFixedline(): boolean;
    isPhoneNumberValidForRegion(): boolean;
    getE164PhoneNumberString(): string[];
}
