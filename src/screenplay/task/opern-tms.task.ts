import {Task} from '@serenity-js/core';
import {Navigate, UseAngular} from '@serenity-js/protractor';
import {browser} from 'protractor';

export class OpenTms {
    static called = () =>
        Task.where(`#actor opens TMS application"`,
            UseAngular.disableSynchronisation(),
            Navigate.to(browser.baseUrl ),
        )
}
