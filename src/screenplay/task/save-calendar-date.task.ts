import {Task} from '@serenity-js/core';
import {Click, isEnabled, Wait} from '@serenity-js/protractor';

import {Tms} from '../selector/tms';

/**
 * Saves an activity
 */
export class SaveCalendarDate {
    static called = () =>
        Task.where(`#actor saves the calendar"`,
            Wait.until(Tms.calendarDoneBtn, isEnabled()),
            Click.on(Tms.calendarDoneBtn),
        )
}
