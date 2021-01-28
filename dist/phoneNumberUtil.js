"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumberUtil = void 0;
const google_libphonenumber_1 = __importDefault(require("google-libphonenumber"));
const phoneUtil = google_libphonenumber_1.default.PhoneNumberUtil.getInstance();
const PNF = google_libphonenumber_1.default.PhoneNumberFormat;
class PhoneNumberUtil {
    constructor(input, languageCode) {
        this.phoneNumber = new google_libphonenumber_1.default.PhoneNumber;
        this.phoneNumber = phoneUtil.parse(input, languageCode);
    }
    isPhoneNumberValid() {
        if (phoneUtil.isPossibleNumber(this.phoneNumber) && phoneUtil.isValidNumber(this.phoneNumber) && phoneUtil.getNumberType(this.phoneNumber) !== -1) {
            return true;
        }
        else {
            return false;
        }
    }
    isPhoneNumberMobile() {
        if (phoneUtil.getNumberType(this.phoneNumber) === 1) {
            return true;
        }
        else {
            return false;
        }
    }
    isPhoneNumberFixedline() {
        if (phoneUtil.getNumberType(this.phoneNumber) === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    isPhoneNumberValidForRegion() {
        if (phoneUtil.isPossibleNumber(this.phoneNumber) && phoneUtil.isValidNumberForRegion(this.phoneNumber) && phoneUtil.getNumberType(this.phoneNumber) !== -1) {
            return true;
        }
        else {
            return false;
        }
    }
    getE164PhoneNumberString() {
        return phoneUtil.format(this.phoneNumber, PNF.E164);
    }
}
exports.PhoneNumberUtil = PhoneNumberUtil;
//# sourceMappingURL=phoneNumberUtil.js.map