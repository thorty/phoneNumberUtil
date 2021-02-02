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
    constructor(input, languageCodes) {
        this.phoneNumbers = new Array();
        if (!languageCodes.includes("all")) {
            for (let languagecode of languageCodes) {
                this.phoneNumbers.push(phoneUtil.parse(input, languagecode));
            }
        }
        else if (languageCodes.includes("all")) {
            // todo use all possible regions eg ES, FR, GB, US,...
            this.phoneNumbers.push(phoneUtil.parse(input, "DE"));
        }
    }
    isPhoneNumberValid() {
        let result = false;
        for (let phonenumber of this.phoneNumbers)
            if (phoneUtil.isPossibleNumber(phonenumber) && phoneUtil.isValidNumber(phonenumber) && phoneUtil.getNumberType(phonenumber) !== -1) {
                return true;
            }
        return result;
    }
    isPhoneNumberMobile() {
        let result = false;
        for (let phonenumber of this.phoneNumbers) {
            if (phoneUtil.getNumberType(phonenumber) === 1) {
                return true;
            }
        }
        return result;
    }
    isPhoneNumberFixedline() {
        let result = false;
        for (let phonenumber of this.phoneNumbers) {
            if (phoneUtil.getNumberType(phonenumber) === 0) {
                return true;
            }
        }
        return result;
    }
    isPhoneNumberValidForRegion() {
        let result = false;
        for (let phonenumber of this.phoneNumbers) {
            if (phoneUtil.isPossibleNumber(phonenumber) && phoneUtil.isValidNumberForRegion(phonenumber) && phoneUtil.getNumberType(phonenumber) !== -1) {
                return true;
            }
        }
        return result;
    }
    getE164PhoneNumberString() {
        let result = new Array();
        for (let phonenumber of this.phoneNumbers) {
            result.push(phoneUtil.format(phonenumber, PNF.E164));
        }
        return result;
    }
}
exports.PhoneNumberUtil = PhoneNumberUtil;
//# sourceMappingURL=phoneNumberUtil.js.map