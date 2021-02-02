#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const phoneNumberUtil_1 = require("./phoneNumberUtil");
const yargs_1 = __importDefault(require("yargs"));
const options = yargs_1.default
    .usage("Usage: -n <phonenumber>")
    .option("n", { alias: "phonenumber", describe: "Phonenumber you want to check", type: "string", demandOption: true })
    .argv;
//const greeting = `Hello, ${ options.name }!`;
const phoneNumberUtil = new phoneNumberUtil_1.PhoneNumberUtil(options.phonenumber, ["DE"]);
console.info("Valid Phoneumber: " + phoneNumberUtil.isPhoneNumberValid());
console.warn("isPhoneNumberMobile: " + phoneNumberUtil.isPhoneNumberMobile());
console.warn("isPhoneNumberFixedline: " + phoneNumberUtil.isPhoneNumberFixedline());
console.log("E164: " + phoneNumberUtil.getE164PhoneNumberString());
//# sourceMappingURL=index_old.js.map