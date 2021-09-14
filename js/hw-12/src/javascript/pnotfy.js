import { alert, defaultModules, Notice, ModuleEntry,Stack } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';

defaultModules.set(PNotifyMobile, {});

export default function notify(config) {
    alert({
        text: config.text,
        type: 'notice',
        stack: new Stack({
            context: document.getElementById(config.place),
            dir1: 'down', dir2: 'right'
        })
    });
}