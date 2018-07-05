import {expect} from 'chai';
import m from 'mocha';

import RPSGoogleApi from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('googleapis', () => {

  m.it('should print supported apis', async function () {
    let md = new RPSGoogleApi;

    let output = await md.getSupportedApis(new RpsContext,{});

    console.log(output);

  }).timeout(0);

})
