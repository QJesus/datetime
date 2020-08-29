export class TimeSpan {
    /**
     * Represents the zero System.TimeSpan value. This field is read-only.
     */
    static readonly Zero: TimeSpan;
    /**
     * Represents the maximum TimeSpan value. This field is read-only.
     */
    static readonly MaxValue: TimeSpan;
    /**
     * Represents the minimum System.TimeSpan value. This field is read-only.
     */
    static readonly MinValue: TimeSpan;

    /**
     * Gets the days component of the time interval represented by the current System.TimeSpan structure.
     * Returns: The day component of this instance. The return value can be positive or negative.
     */
    get Days(): number;
    /**
     * Gets the hours component of the time interval represented by the current System.TimeSpan structure.
     * Returns: The hour component of the current System.TimeSpan structure. The return value ranges from -23 through 23.
     */
    get Hours(): number;
    /**
     * Gets the minutes component of the time interval represented by the current System.TimeSpan structure.
     * Returns: The minute component of the current System.TimeSpan structure. The return value ranges from -59 through 59.
     */
    get Minutes(): number;
    /**
     * Gets the seconds component of the time interval represented by the current System.TimeSpan structure.
     * Returns: The second component of the current System.TimeSpan structure. The return value ranges from -59 through 59.
     */
    get Seconds(): number;
    /**
     * Gets the milliseconds component of the time interval represented by the current System.TimeSpan structure.
     * Returns: The millisecond component of the current System.TimeSpan structure. The return value ranges from -999 through 999.
     */
    get Milliseconds(): number;

    /**
     * Gets the value of the current System.TimeSpan structure expressed in whole and fractional days.
     * Returns: The total number of days represented by this instance.
     */
    get TotalDays(): number;
    /**
     * Gets the value of the current System.TimeSpan structure expressed in whole and fractional hours.
     * Returns: The total number of hours represented by this instance.
     */
    get TotalHours(): number;
    /**
     * Gets the value of the current System.TimeSpan structure expressed in whole and fractional minutes.
     * Returns: The total number of minutes represented by this instance.
     */
    get TotalMinutes(): number;
    /**
     * Gets the value of the current System.TimeSpan structure expressed in whole and fractional seconds.
     * Returns: The total number of seconds represented by this instance.
     */
    get TotalSeconds(): number;
    /**
     * Gets the value of the current System.TimeSpan structure expressed in whole and fractional milliseconds.
     * Returns: The total number of milliseconds represented by this instance.
     */
    get TotalMilliseconds(): number;

    constructor();
    constructor(milliseconds: number);
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
    ToString(): string;
    ToString(format: 'c' | 'g' | 'G', culture: 'en' | 'cn'): string;

    /**
     * Compares two System.TimeSpan  values and returns an integer that indicates whether the first value is shorter than, equal to, or longer than the second value.
     * @param t1 The first time interval to compare.
     * @param t2 The second time interval to compare.
     */
    static Compare(t1: TimeSpan, t2: TimeSpan): number;
    /**
     * Returns a System.TimeSpan  that represents a specified number of days, where the specification is accurate to the nearest millisecond.
     * @param value A number of days, accurate to the nearest millisecond.
     */
    static FromDays(value: number): TimeSpan;
    /**
     * Returns a System.TimeSpan  that represents a specified number of hours, where the specification is accurate to the nearest millisecond.
     * @param value A number of hours accurate to the nearest millisecond.
     */
    static FromHours(value: number): TimeSpan;
    /**
     * Returns a System.TimeSpan  that represents a specified number of milliseconds.
     * @param value A number of milliseconds.
     */
    static FromMilliseconds(value: number): TimeSpan;
    /**
     * Returns a System.TimeSpan  that represents a specified number of minutes, where the specification is accurate to the nearest millisecond.
     * @param value A number of minutes, accurate to the nearest millisecond.
     */
    static FromMinutes(value: number): TimeSpan;
    /**
     * Returns a System.TimeSpan  that represents a specified number of seconds, where the specification is accurate to the nearest millisecond.
     * @param value A number of seconds, accurate to the nearest millisecond.
     */
    static FromSeconds(value: number): TimeSpan;
    /**
     * Returns a System.TimeSpan  that represents a specified time, where the specification is in units of ticks.
     * @param value A number of millis that represent a time.
     */
    static FromMillis(value: number): TimeSpan;
}

export enum DayOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

export class DateTime {
    /**
     * Represents the smallest possible value of System.DateTime . This field is read-only.
     */
    static readonly MinValue: DateTime;
    /**
     * Represents the largest possible value of System.DateTime . This field is read-only.
     */
    static readonly MaxValue: DateTime;
    static readonly UnixEpoch: DateTime;

    /**
     * Gets the year component of the date represented by this instance.
     * Returns: The year, between 1 and 9999.
     */
    get Year(): number;
    /**
     * Gets the month component of the date represented by this instance.
     * Returns: The month component, expressed as a value between 1 and 12.
     */
    get Month(): number;
    /**
     * Gets the day of the month represented by this instance.
     * Returns: The day component, expressed as a value between 1 and 31.
     */
    get Day(): number;
    /**
     * Gets the hour component of the date represented by this instance.
     * Returns: The hour component, expressed as a value between 0 and 23.
     */
    get Hour(): number;
    /**
     * Gets the minute component of the date represented by this instance.
     * Returns: The minute component, expressed as a value between 0 and 59.
     */
    get Minute(): number;
    /**
     * Gets the seconds component of the date represented by this instance.
     * Returns: The seconds component, expressed as a value between 0 and 59.
     */
    get Second(): number;
    /**
     * Gets the milliseconds component of the date represented by this instance.
     * Returns: The milliseconds component, expressed as a value between 0 and 999.
     */
    get Millisecond(): number;


    /**
     * Gets the date component of this instance.
     * Returns: A new object with the same date as this instance, and the time value set to 12:00:00 midnight (00:00:00).
     */
    get Date(): DateTime;
    /**
     * Gets the day of the week represented by this instance.
     * Returns: An enumerated constant that indicates the day of the week of this System.DateTime value.
     */
    get DayOfWeek(): DayOfWeek;
    /**
     * Gets the day of the year represented by this instance.
     * Returns: The day of the year, expressed as a value between 1 and 366.
     */
    get DayOfYear(): number;
    /**
     * Gets the time of day for this instance.
     * Returns: A time interval that represents the fraction of the day that has elapsed since midnight.
     */
    get TimeOfDay(): TimeSpan;

    /**
     * Gets a System.DateTime object that is set to the current date and time on this computer, expressed as the local time.
     * Returns: An object whose value is the current local date and time.
     */
    static get Now(): DateTime;
    /**
     * Gets the current date.
     * Returns: An object that is set to today's date, with the time component set to 00:00:00.
     */
    static get Today(): DateTime;
    /**
     * Gets a System.DateTime object that is set to the current date and time on this computer, expressed as the Coordinated Universal Time (UTC).
     * Returns: An object whose value is the current UTC date and time.
     */
    static get UtcNow(): DateTime;

    /**
     * Initializes a new instance of the System.DateTime  structure to the specified year, month, and day.
     */
    constructor();
    /**
     * Initializes a new instance of the System.DateTime  structure to the specified year, month, and day.
     * @param milliseconds A date and time expressed in the number of 1-millisecond intervals that have elapsed since January 1, 0001 at 00:00:00.000 in the Gregorian calendar.
     */
    constructor(milliseconds: number);
    /**
     * Initializes a new instance of the System.DateTime  structure to the specified year, month, and day.
     * @param year The year (1 through 9999).
     * @param month The month (1 through 12).
     * @param day The day (1 through the number of days in month ).
     */
    constructor(year: number, month: number, day: number);
    /**
     * Initializes a new instance of the System.DateTime  structure to the specified year, month, and day.
     * @param year The year (1 through 9999).
     * @param month The month (1 through 12).
     * @param day The day (1 through the number of days in month ).
     * @param hour The hours (0 through 23).
     * @param minute The minutes (0 through 59).
     * @param second The seconds (0 through 59).
     */
    constructor(year: number, month: number, day: number, hour: number, minute: number, second: number);
    /**
     * Initializes a new instance of the System.DateTime  structure to the specified year, month, and day.
     * @param year The year (1 through 9999).
     * @param month The month (1 through 12).
     * @param day The day (1 through the number of days in month ).
     * @param hour The hours (0 through 23).
     * @param minute The minutes (0 through 59).
     * @param second The seconds (0 through 59).
     * @param millisecond The milliseconds (0 through 999).
     */
    constructor(year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number);

    /**
     * Returns a new System.DateTime  that adds the value of the specified System.TimeSpan  to the value of this instance.
     * @param value A positive or negative time interval.
     */
    Add(value: TimeSpan): DateTime;
    /**
     * Returns a new System.DateTime  that adds the specified number of days to the value of this instance.
     * @param value A number of whole and fractional days. The value parameter can be negative or positive.
     */
    AddDays(value: number): DateTime;
    /**
     * Returns a new System.DateTime  that adds the specified number of hours to the value of this instance.
     * @param value A number of whole and fractional hours. The value parameter can be negative or positive.
     */
    AddHours(value: number): DateTime;
    /**
     * Returns a new System.DateTime  that adds the specified number of milliseconds to the value of this instance.
     * @param value A number of whole and fractional milliseconds. The value parameter can be negative or positive. Note that this value is rounded to the nearest integer.     
     */
    AddMilliseconds(value: number): DateTime;
    /**
     * Returns a new System.DateTime  that adds the specified number of minutes to the value of this instance.
     * @param value A number of whole and fractional minutes. The value parameter can be negative or positive.
     */
    AddMinutes(value: number): DateTime;
    /**
     * Returns a new System.DateTime  that adds the specified number of months to the value of this instance.
     * @param months A number of months. The months parameter can be negative or positive.
     */
    AddMonths(months: number): DateTime;
    /**
     * Returns a new System.DateTime  that adds the specified number of seconds to the value of this instance.
     * @param value A number of whole and fractional seconds. The value parameter can be negative or positive.
     */
    AddSeconds(value: number): DateTime;
    /**
     * Returns a new System.DateTime  that adds the specified number of ticks to the value of this instance.
     * @param value A number of 1-millisecond ticks. The value parameter can be positive or negative.
     */
    AddMillis(value: number): DateTime;
    /**
     * Returns a new System.DateTime  that adds the specified number of years to the value of this instance.
     * @param value A number of years. The value parameter can be negative or positive.
     */
    AddYears(value: number): DateTime;
    /**
     * Compares the value of this instance to a specified System.DateTime  value and returns an integer that indicates whether this instance is earlier than, the same as, or later than the specified System.DateTime  value.
     * @param value The object to compare to the current instance.
     */
    CompareTo(value: DateTime): number;
    /**
     * Returns a value indicating whether the value of this instance is equal to the value of the specified System.DateTime  instance.
     * @param value The object to compare to this instance.
     */
    Equals(value: DateTime): boolean;
    /**
     * Returns the hash code for this instance.
     */
    GetHashCode(): number;
    /**
     * Returns a new System.DateTime  that subtracts the specified date and time from the value of this instance.
     * @param value The date and time value to subtract.
     */
    Subtract(value: DateTime): TimeSpan;
    /**
     * Converts the value of the current System.DateTime  object to its equivalent string representation using the formatting conventions of the current culture.
     */
    ToString(): string;
    /**
     * Converts the value of the current System.DateTime  object to its equivalent string representation using the specified format and the formatting conventions of the current culture.
     * @param format A standard or custom date and time format string.
     */
    ToString(format: string): string;
    ToJavaScriptTimestamp(): number;
    ToJavaScriptDate(): Date;

    /**
     * Compares two instances of System.DateTime  and returns an integer that indicates whether the first instance is earlier than, the same as, or later than the second instance.
     * @param t1 The first object to compare.
     * @param t2 The second object to compare.
     */
    static Compare(t1: DateTime, t2: DateTime): number;
    /**
     * Returns the number of days in the specified month and year.
     * @param year The year.
     * @param month The month (a number ranging from 1 to 12).
     */
    static DaysInMonth(year: number, month: number): number;
    /**
     * Returns an indication whether the specified year is a leap year.
     * @param year A 4-digit year.
     */
    static IsLeapYear(year: number): boolean;
    static FromJavaScripTimestamp(timestamp: number): DateTime;
    static FromJavaScriptDate(date: Date): DateTime;
}