import {Target} from '@serenity-js/protractor/lib/screenplay/questions/targets'
import {by} from 'protractor';

export class Tms {
    static calendarBtn = Target.the(`Calendar`).located(by.css('#calendar-btn'));
    static descriptionInputNewActivityDialogueBtn = Target.the(`description`).located(by.id('description'));
    static dateInputNewActivityDialogueBtn = Target.the(`date`).located(by.id('date'));
    static saveBtn = Target.the(`save`).located(by.id('save-activity'));
    static firstItem = Target.the(`firstItem`).located(by.css('#activity-list > div:nth-child(1) .description-item'));
    static secondItem = Target.the(`secondItem`).located(by.css('#activity-list > div:nth-child(2) .description-item'));
    static secondItemDivDone = Target.the(`secondItem done`).located(by.css('#activity-list .done .description-item'));

    static thirdItemRemoveBtn = Target.the(`secondItem`).located(by.css('#activity-list > div:nth-child(3) .done-block .p-button'));
    static acceptConfirmBtn = Target.the(`accept remove btn`).located(by.css('.p-confirm-popup-accept'));

    static calendarDlgSndRow3Col = Target.the(`dateTime`).located(by.css('#icon > div > div > div > div.p-datepicker-calendar-container > table > tbody > tr:nth-child(2) > td:nth-child(3) > span'));
    static calendarDlgFirstRow3Col = Target.the(`dateTime`).located(by.css('#icon > div > div > div > div.p-datepicker-calendar-container > table > tbody > tr:nth-child(2) > td:nth-child(2) > span'));
    static calendarDoneBtn = Target.the(`done`).located(by.css('.p-dialog-footer > div > button'));

    static doneCheckFirstItem = Target.the(`done check 1 activity`).located(by.css('#activity-list > div:nth-child(2) > div.done-block.my-auto.flex.flex-row > div > div.p-checkbox-box'));

}
