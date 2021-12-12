import {Actor, Cast} from '@serenity-js/core';
import {BrowseTheWeb} from '@serenity-js/protractor';
import {CallAnApi} from '@serenity-js/rest';
import {protractor} from 'protractor';

export class Actors implements Cast {
    prepare(actor: Actor): Actor {
        return actor.whoCan(
            BrowseTheWeb.using(protractor.browser),
            CallAnApi.at(protractor.browser.baseUrl + '/api')
        );
    }
}
