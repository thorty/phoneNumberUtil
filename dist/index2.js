#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const phoneNumberUtil_1 = require("./phoneNumberUtil");
const inquirer_1 = __importDefault(require("inquirer"));
function askForInput() {
    inquirer_1.default
        .prompt([
        {
            type: 'input',
            name: 'number',
            message: 'phonenumber pls! ',
            default: "",
        },
    ])
        .then(answers => {
        let phoneNumberUtil = new phoneNumberUtil_1.PhoneNumberUtil(answers.number, "DE");
        console.info("Valid Phoneumber: " + phoneNumberUtil.isPhoneNumberValid());
        console.warn("isPhoneNumberMobile: " + phoneNumberUtil.isPhoneNumberMobile());
        console.warn("isPhoneNumberFixedline: " + phoneNumberUtil.isPhoneNumberFixedline());
        console.log("E164: " + phoneNumberUtil.getE164PhoneNumberString());
        askForInput();
    })
        .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error);
        }
        else {
            // Something else went wrong
            console.log(error);
        }
    });
}
askForInput();
//# sourceMappingURL=index2.js.map