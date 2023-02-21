export const TYPE_LOG = 'log';
export const TYPE_WARN = 'warn';
export const TYPE_ERROR = 'error';

export function loggerFunc(type=TYPE_LOG) {
    console[type]('mylog')
}

