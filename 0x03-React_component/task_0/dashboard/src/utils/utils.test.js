import {getFullYear, getFooterCopy, getLatestNotification} from './utils'

test('returns current year', () => {
    expect(getFullYear()).toBe(2024);
});

test('returns footer', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('returns the latest notification', () => {
    expect(getLatestNotification()).toBe(
        '<strong>Urgent requirement</strong> - complete by EOD'
    );
});