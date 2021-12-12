import {Task} from '@serenity-js/core';
import {Enter} from '@serenity-js/protractor';

import {Tms} from '../selector/tms';
import {FillActivityDesc} from './fill-activity-desc.task';

/**
 * Fill description and date input field
 */
export class FillActivityDescAndDate {
    static called = (description: string, date: string) =>
        Task.where(`#actor fill description "${ description }" and date "${ date }""`,
            FillActivityDesc.called(description),
            Enter.theValue(date).into(Tms.dateInputNewActivityDialogueBtn),
        )
}
