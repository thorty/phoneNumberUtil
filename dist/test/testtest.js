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
const chai = __importStar(require("chai"));
const phoneNumberUtil_1 = require("../phoneNumberUtil");
const expect = chai.expect;
describe('is the given phnenmbr valid', () => {
    it('01708122628, DE is valid', () => {
        let pu = new phoneNumberUtil_1.PhoneNumberUtil("01708122628", ["DE"]);
        expect(pu.isPhoneNumberValid()).to.eql(true);
    });
    it('755539603, DE is valid', () => {
        let pu = new phoneNumberUtil_1.PhoneNumberUtil("755539603", ["DE"]);
        expect(pu.isPhoneNumberValid()).to.eql(true);
    });
    it('011234567, DE is invalid', () => {
        let pu = new phoneNumberUtil_1.PhoneNumberUtil("011234567", ["DE"]);
        expect(pu.isPhoneNumberValid()).to.eql(false);
    });
    it('0175555555555, DE is invalid', () => {
        let pu = new phoneNumberUtil_1.PhoneNumberUtil("0175555555555", ["DE"]);
        expect(pu.isPhoneNumberValid()).to.eql(false);
    });
    it('01755555555, DE is valid', () => {
        let pu = new phoneNumberUtil_1.PhoneNumberUtil("01755555555", ["DE"]);
        expect(pu.isPhoneNumberValid()).to.eql(true);
    });
    it('017555555, DE is invalid', () => {
        let pu = new phoneNumberUtil_1.PhoneNumberUtil("017555555", ["DE"]);
        expect(pu.isPhoneNumberValid()).to.eql(false);
    });
});
describe('is the given number mobile or fixedline', () => {
    it('01708122628, DE is mobile', () => {
        let pu = new phoneNumberUtil_1.PhoneNumberUtil("01708122628", ["DE"]);
        expect(pu.isPhoneNumberMobile()).to.eql(true);
    });
    it('755539142, DE is fixedline', () => {
        let pu = new phoneNumberUtil_1.PhoneNumberUtil("755539142", ["DE"]);
        expect(pu.isPhoneNumberFixedline()).to.eql(true);
    });
});
describe('get E164 formattet Number from String', () => {
    it('01708122628, DE equals +491708122628', () => {
        let pu = new phoneNumberUtil_1.PhoneNumberUtil("01708122628", ["DE"]);
        expect(pu.getE164PhoneNumberString()).to.eql("+491708122628");
    });
});
describe('foreign mobilenumber parsed with DE comes back as fixedline', () => {
    it('0690696954, french Mobile number is mobile', () => {
        let pu = new phoneNumberUtil_1.PhoneNumberUtil("0690696954", ["DE"]);
        expect(pu.isPhoneNumberMobile()).to.eql(false);
    });
    it('0690696954, DE is not valid for region', () => {
        let pu = new phoneNumberUtil_1.PhoneNumberUtil("0690696954", ["DE"]);
        expect(pu.isPhoneNumberValidForRegion()).to.eql(false);
    });
});
//# sourceMappingURL=testtest.js.map