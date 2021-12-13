import 'jasmine';

import {Ensure, equals, includes, not} from '@serenity-js/assertions';
import {actorCalled, engage} from '@serenity-js/core';
import {Click, isEnabled, isPresent, Text, Wait, Website} from '@serenity-js/protractor';
import {DeleteRequest, LastResponse, Send} from '@serenity-js/rest';
import {browser} from 'protractor';

import {Actors} from '../src';
import {Tms} from '../src/screenplay/selector/tms';
import {FillActivityDesc} from '../src/screenplay/task/fill-activity-desc.task';
import {FillActivityDescAndDate} from '../src/screenplay/task/fill-activity-desc-and-date.task';
import {OpenCalendar} from '../src/screenplay/task/open-calendar.task';
import {OpenTms} from '../src/screenplay/task/opern-tms.task';
import {SaveActivity} from '../src/screenplay/task/save-activity.task';
import {SaveCalendarDate} from '../src/screenplay/task/save-calendar-date.task';

describe('TMS website', () => {

    beforeEach(() => {
        engage(new Actors())
    });

    /**
     * Clean the environment using the REST API delete all!
     */
    it(`clear env`, () => {
        const end = browser.baseUrl.indexOf('//');
        const prot = browser.baseUrl.slice(0, end + 2);
        const tail  = browser.baseUrl.slice(end + 2);

        actorCalled('Jasmine').attemptsTo(
            Send.a(DeleteRequest.to(prot + 'auth:secret@' + tail +'/api/activity')),
            Ensure.that(LastResponse.status(), equals(200))
        )
    }
    );

    it(`add a new todo manual date`, () =>
        actorCalled('Jasmine').attemptsTo(
            OpenTms.called(),
            Ensure.that(Website.title(), includes('TMS')),
           
            FillActivityDescAndDate.called('ALESSANDRO','2015/11/17'),
            SaveActivity.called(),

            Wait.until(Tms.firstItem, isPresent()),
            Ensure.that(Text.of(Tms.firstItem), equals('ALESSANDRO')),

        ));

    it(`add a new todo date calendar`, () =>
        actorCalled('Jasmine').attemptsTo(
            OpenTms.called(),
            Ensure.that(Website.title(), includes('TMS')),
            FillActivityDesc.called('TEST AUTO'),

            OpenCalendar.called(),
            Click.on(Tms.calendarDlgSndRow3Col),
            SaveCalendarDate.called(),
            SaveActivity.called(),

            Wait.until(Tms.firstItem, isPresent()),
            Ensure.that(Text.of(Tms.firstItem), equals('TEST AUTO')),

        ));

    it(`put done`, () =>
        actorCalled('Jasmine').attemptsTo(
            OpenTms.called(),
            Ensure.that(Website.title(), includes('TMS')),

            FillActivityDesc.called('TEST AUTO DONE'),
            OpenCalendar.called(),

            Click.on(Tms.calendarDlgFirstRow3Col),

            SaveCalendarDate.called(),
            SaveActivity.called(),
            
            // verification
            Wait.until(Tms.secondItem, isPresent()),
            Ensure.that(Text.of(Tms.secondItem), equals('TEST AUTO DONE')),
            Click.on(Tms.doneCheckFirstItem),
            Wait.until(Tms.secondItemDivDone, isPresent()),
            Ensure.that(Text.of(Tms.secondItemDivDone), equals('TEST AUTO DONE')),
        ));

    it(`remove third item`, () =>
        actorCalled('Jasmine').attemptsTo(
            OpenTms.called(),
            Ensure.that(Tms.thirdItemRemoveBtn, isEnabled()),
            Click.on(Tms.thirdItemRemoveBtn),
            Ensure.that(Tms.thirdItemRemoveBtn, not(isPresent())),

        ));

});
