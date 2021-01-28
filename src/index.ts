#!/usr/bin/env node

import { PhoneNumberUtil } from "./phoneNumberUtil";
import inquirer from "inquirer";


function askForInput () {
    inquirer
        .prompt( [
            {
                type: 'input',
                name: 'number',
                message: 'phonenumber pls! ',
                default: "",
            },
        ] )
        .then( answers => {
            let phoneNumberUtil = new PhoneNumberUtil( <string>answers.number, "DE" );
            console.info( "Valid Phoneumber: " + phoneNumberUtil.isPhoneNumberValid() );
            console.warn( "isPhoneNumberMobile: " + phoneNumberUtil.isPhoneNumberMobile() );
            console.warn( "isPhoneNumberFixedline: " + phoneNumberUtil.isPhoneNumberFixedline() );
            console.log( "E164: " + phoneNumberUtil.getE164PhoneNumberString() );
            askForInput();
        } )
        .catch( error => {
            if ( error.isTtyError ) {
                // Prompt couldn't be rendered in the current environment
                console.log( error );
            } else {
                // Something else went wrong
                console.log( error );
            }
        } );
}

askForInput();