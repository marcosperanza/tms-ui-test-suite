import {Ensure} from '@serenity-js/assertions';
import {Task} from '@serenity-js/core';
import {Click, isEnabled, isPresent} from '@serenity-js/protractor';

import {Tms} from '../selector/tms';

/**
 * Saves an activity
 */
export class OpenCalendar {
    static called = () =>
        Task.where(`#actor opens the calendar"`,
            Ensure.that(Tms.calendarBtn, isPresent()),
            Ensure.that(Tms.calendarBtn, isEnabled()),
            Click.on(Tms.calendarBtn),
        )
}
