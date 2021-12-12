import {Ensure} from '@serenity-js/assertions';
import {Task} from '@serenity-js/core';
import {Click, isEnabled, Wait} from '@serenity-js/protractor';

import {Tms} from '../selector/tms';

/**
 * Saves an activity
 */
export class SaveActivity {
    static called = () =>
        Task.where(`#actor save activity"`,
            Wait.until(Tms.saveBtn, isEnabled()),
            Ensure.that(Tms.saveBtn, isEnabled()),
            Click.on(Tms.saveBtn),
        )
}
