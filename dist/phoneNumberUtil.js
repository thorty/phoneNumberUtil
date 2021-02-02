"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumberUtil = void 0;
const libphonenumber = __importStar(require("google-libphonenumber"));
const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
const PNF = libphonenumber.PhoneNumberFormat;
class PhoneNumberUtil {
    constructor(input, languageCode) {
        this.phoneNumber = new libphonenumber.PhoneNumber;
        if (languageCode.length === 1 && languageCode[0] !== "all") {
            this.phoneNumber = phoneUtil.parse(input, languageCode[0]);
        }
        else if (languageCode[0] === "all") {
            // todo use all possible regions eg ES, FR, GB, US,...
            this.phoneNumber = phoneUtil.parse(input, "DE");
        }
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