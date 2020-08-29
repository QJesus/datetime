export class TimeSpan {
    static readonly Zero: TimeSpan;
    static readonly MaxValue: TimeSpan;
    static readonly MinValue: TimeSpan;
    get Millis(): number;
    get Days(): number;
    get Hours(): number;
    get Milliseconds(): number;
    get Minutes(): number;
    get Seconds(): number;
    get TotalDays(): number;
    get TotalHours(): number;
    get TotalMilliseconds(): number;
    get TotalMinutes(): number;
    get TotalSeconds(): number;

    constructor(ticks: number);
    constructor(hours: number, minutes: number, seconds: number);
    constructor(days: number, hours: number, minutes: number, seconds: number);
    constructor(days: number, hours: number, minutes: number, seconds: number, milliseconds: number);

    Add(ts: TimeSpan): TimeSpan;
    CompareTo(value: TimeSpan): number;
    Duration(): TimeSpan;
    Equals(obj: TimeSpan): boolean;
    GetHashCode(): number;
    Negate(): TimeSpan;
    Subtract(ts: TimeSpan): TimeSpan;
    Multiply(factor: number): TimeSpan;
    Divide(divisor: number): TimeSpan;
    ToString(format: 'c' | 'g' | 'G', culture: 'en' | 'cn'): string;

    static Compare(t1: TimeSpan, t2: TimeSpan): number;
    static FromDays(value: number): TimeSpan;
    static FromHours(value: number): TimeSpan;
    static Interval(value: number, scale: number): TimeSpan;
    static FromMilliseconds(value: number): TimeSpan;
    static FromMinutes(value: number): TimeSpan;
    static FromSeconds(value: number): TimeSpan;
    static FromMillis(value: number): TimeSpan;
    static TimeToMillis(hour: number, minute: number, second: number): number;
}

export class DateTime {
    static readonly MinValue: DateTime;
    static readonly MaxValue: DateTime;
    static readonly UnixEpoch: DateTime;

    get Date(): DateTime;
    get Day(): number;
    get DayOfWeek(): number;
    get DayOfYear(): number;
    get Hour(): number;
    get Millisecond(): number;
    get Minute(): number;
    get Month(): number;
    get Second(): number;
    get Millis(): number;
    get TimeOfDay(): TimeSpan;
    get Year(): number;

    static get Now(): DateTime;
    static get Today(): DateTime;
    static get UtcNow(): DateTime;

    constructor(milliseconds: number);
    constructor(year: number, month: number, day: number);
    constructor(year: number, month: number, day: number, hour: number, minute: number, second: number);
    constructor(year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number);

    Add(value: TimeSpan): DateTime;;
    AddDays(value: number): DateTime;
    AddHours(value: number): DateTime;
    AddMilliseconds(value: number): DateTime;
    AddMinutes(value: number): DateTime;
    AddMonths(months: number): DateTime;
    AddSeconds(value: number): DateTime;
    AddMillis(value: number): DateTime;
    AddYears(value: number): DateTime;
    CompareTo(value: DateTime): number;
    Equals(value: DateTime): boolean;
    GetHashCode(): number;
    Subtract(value: DateTime): TimeSpan;
    ToString(format: string): string;

    ToJavaScriptTimestamp(): number;
    ToJavaScriptDate(): Date;

    static Compare(t1: DateTime, t2: DateTime): number;
    static DaysInMonth(year: number, month: number): number;
    static IsLeapYear(year: number): boolean;
    static FromJavaScripTimestamp(timestamp: number): DateTime;
    static FromJavaScriptDate(date: Date): DateTime;
}