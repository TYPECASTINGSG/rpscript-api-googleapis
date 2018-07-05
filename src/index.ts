/**
 * @module googleapis
 */

import {GoogleApis} from 'googleapis';

import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

@RpsModule("googleapis")
export default class RPSGoogleApi {

  @rpsAction({verbName:'google-get-supported-apis'})
  async getSupportedApis (ctx:RpsContext,opts:Object) : Promise<{ [index: string]: string[]}>{
    return new GoogleApis().getSupportedAPIs();
  }

}

