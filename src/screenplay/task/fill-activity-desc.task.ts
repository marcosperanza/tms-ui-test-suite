import {Check} from '@serenity-js/assertions';
import {Task} from '@serenity-js/core';
import {Click, Enter, isPresent} from '@serenity-js/protractor';

import {Tms} from '../selector/tms';

/**
 * Fill description and date input field
 */
export class FillActivityDesc {
    static called = (description: string) =>
        Task.where(`#actor fill description "${ description }""`,
            // Check.whether(Tms.openNewActivityDialogueBtn, isPresent())
            //     .andIfSo(
            //         Click.on(Tms.calendarBtn),
            //     ),
            Enter.theValue(description).into(Tms.descriptionInputNewActivityDialogueBtn),

        )
}
