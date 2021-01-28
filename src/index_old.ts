#!/usr/bin/env node

import { PhoneNumberUtil } from "./phoneNumberUtil";
import yargs from "yargs"


const options = yargs
    .usage( "Usage: -n <phonenumber>" )
    .option( "n", { alias: "phonenumber", describe: "Phonenumber you want to check", type: "string", demandOption: true } )
    .argv;

//const greeting = `Hello, ${ options.name }!`;

const phoneNumberUtil = new PhoneNumberUtil( <string>options.phonenumber, "DE" );


console.info( "Valid Phoneumber: " + phoneNumberUtil.isPhoneNumberValid() );
console.warn( "isPhoneNumberMobile: " + phoneNumberUtil.isPhoneNumberMobile() );
console.warn( "isPhoneNumberFixedline: " + phoneNumberUtil.isPhoneNumberFixedline() );
console.log( "E164: " + phoneNumberUtil.getE164PhoneNumberString() );