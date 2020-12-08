"use strict";
/// <reference path="./string.d.ts" />
/// <reference path="./number.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.int = exports.divide = exports.AreEqual = exports.TestMethod = exports.DateTime = exports.DayOfWeek = exports.TimeSpan = void 0;
var TimeSpan = /** @class */ (function () {
    function TimeSpan() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var millis = 0;
        var days;
        var hours;
        var minutes;
        var seconds;
        var milliseconds;
        switch ((args || []).length) {
            case 1:
                millis = int(args[0]);
                break;
            case 3:
                hours = int(args[0]);
                minutes = int(args[1]);
                seconds = int(args[2]);
                millis = TimeSpan.TimeToMillis(hours, minutes, seconds);
                break;
            case 4:
            case 5:
                days = int(args[0]);
                hours = int(args[1]);
                minutes = int(args[2]);
                seconds = int(args[3]);
                milliseconds = int(args[4] || 0);
                var num = (days * 3600 * 24 + hours * 3600 + minutes * 60 + seconds) * 1000 + milliseconds;
                if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
                    throw new Error("Overflow_TimeSpanTooLong");
                }
                millis = num * 1;
                break;
        }
        this._millis = millis;
    }
    Object.defineProperty(TimeSpan.prototype, "Days", {
        get: function () {
            return divide(this._millis, 86400000);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "Hours", {
        get: function () {
            return divide(this._millis, 3600000) % 24;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "Milliseconds", {
        get: function () {
            return divide(this._millis, 1) % 1000;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "Minutes", {
        get: function () {
            return divide(this._millis, 60000) % 60;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "Seconds", {
        get: function () {
            return divide(this._millis, 1000) % 60;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "TotalDays", {
        get: function () {
            return this._millis / 86400000.0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "TotalHours", {
        get: function () {
            return this._millis / 3600000.0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "TotalMilliseconds", {
        get: function () {
            var num = this._millis;
            if (num > Number.MAX_SAFE_INTEGER) {
                return Number.MAX_SAFE_INTEGER;
            }
            if (num < Number.MIN_SAFE_INTEGER) {
                return Number.MIN_SAFE_INTEGER;
            }
            return num;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "TotalMinutes", {
        get: function () {
            return this._millis / 60000.0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "TotalSeconds", {
        get: function () {
            return this._millis / 1000.0;
        },
        enumerable: false,
        configurable: true
    });
    TimeSpan.prototype.Add = function (ts) {
        var num = this._millis + ts._millis;
        return new TimeSpan(num);
    };
    TimeSpan.Compare = function (t1, t2) {
        if (t1._millis > t2._millis) {
            return 1;
        }
        if (t1._millis < t2._millis) {
            return -1;
        }
        return 0;
    };
    TimeSpan.prototype.CompareTo = function (value) {
        var millis = value._millis;
        if (this._millis > millis) {
            return 1;
        }
        if (this._millis < millis) {
            return -1;
        }
        return 0;
    };
    TimeSpan.FromDays = function (value) {
        return TimeSpan.Interval(value, 864000000000.0);
    };
    TimeSpan.prototype.Duration = function () {
        if (this._millis === TimeSpan.MinValue._millis) {
            throw new Error("Overflow_Duration");
        }
        return new TimeSpan((this._millis >= 0) ? this._millis : (-this._millis));
    };
    TimeSpan.prototype.Equals = function (obj) {
        return this._millis === obj._millis;
    };
    TimeSpan.prototype.GetHashCode = function () {
        return int(this._millis) ^ int(this._millis >> 32);
    };
    TimeSpan.FromHours = function (value) {
        return TimeSpan.Interval(value, 3600000.0);
    };
    TimeSpan.Interval = function (value, scale) {
        if (Number.isNaN(value)) {
            throw new Error("Arg_CannotBeNaN");
        }
        var num = value * scale;
        return new TimeSpan(num);
    };
    TimeSpan.FromMilliseconds = function (value) {
        return TimeSpan.Interval(value, 10000.0);
    };
    TimeSpan.FromMinutes = function (value) {
        return TimeSpan.Interval(value, 600000000.0);
    };
    TimeSpan.prototype.Negate = function () {
        if (this._millis === TimeSpan.MinValue._millis) {
            throw new Error("Overflow_NegateTwosCompNum");
        }
        return new TimeSpan(-this._millis);
    };
    TimeSpan.FromSeconds = function (value) {
        return TimeSpan.Interval(value, 1000.0);
    };
    TimeSpan.prototype.Subtract = function (ts) {
        var num = this._millis - ts._millis;
        return new TimeSpan(num);
    };
    TimeSpan.prototype.Multiply = function (factor) {
        if (Number.isNaN(factor)) {
            throw new Error("\"factor\" Arg_CannotBeNaN");
        }
        var num = Math.round(this._millis * factor);
        return TimeSpan.FromMillis(num);
    };
    TimeSpan.prototype.Divide = function (divisor) {
        if (Number.isNaN(divisor)) {
            throw new Error("\"divisor\" Arg_CannotBeNaN");
        }
        var num = Math.round(this._millis / divisor);
        if (Number.isNaN(num)) {
            throw new Error("Overflow_TimeSpanTooLong");
        }
        return TimeSpan.FromMillis(num);
    };
    TimeSpan.FromMillis = function (value) {
        return new TimeSpan(value);
    };
    TimeSpan.TimeToMillis = function (hour, minute, second) {
        var num = hour * 3600 + minute * 60 + second;
        return num * 1000;
    };
    TimeSpan.prototype.ToString = function (format, culture) {
        if (format === void 0) { format = 'c'; }
        if (culture === void 0) { culture = 'en'; }
        var days = Math.abs(this.Days);
        var hours = Math.abs(this.Hours);
        var minutes = Math.abs(this.Minutes);
        var seconds = Math.abs(this.Seconds);
        var milliseconds = Math.abs(this.Milliseconds);
        var dest = new Array();
        if (this.TotalMilliseconds < 0) {
            dest.push('-');
        }
        if (days !== 0) {
            dest.push(days.toString());
            dest.push(culture === 'cn' ? '天' : (format === 'c' ? '.' : ':'));
        }
        if (format !== 'g') {
            dest.push(hours.toString().padStart(2, '0'));
        }
        else {
            dest.push(hours.toString());
        }
        dest.push(culture === 'cn' ? '时' : ':');
        dest.push(minutes.toString().padStart(2, '0'));
        dest.push(culture === 'cn' ? '分' : ':');
        dest.push(seconds.toString().padStart(2, '0'));
        dest.push(culture === 'cn' ? '秒' : '');
        if (milliseconds !== 0) {
            if (culture === 'cn') {
                dest.push(milliseconds.toString().padStart(3, '0'));
                dest.push('毫秒');
            }
            else {
                dest.push('.');
                dest.push(milliseconds.toString().padStart(3, '0'));
            }
        }
        return dest.join('');
    };
    TimeSpan.prototype.Test_TimeSpan_format_10s = function () {
        var format_10s = function (max, min) {
            var span = new TimeSpan(max - min);
            if (Math.abs(span.TotalMilliseconds) > new TimeSpan(0, 0, 0, 10).TotalMilliseconds) {
                span = new TimeSpan(0, 0, 0, 0, span.TotalMilliseconds - span.Milliseconds);
            }
            return span.ToString('c', 'cn');
        };
        AreEqual('1天00时00分00秒', format_10s(1593619200000, 1593532800000));
        AreEqual('00时00分22秒', format_10s(1593546359541, 1593546337366));
        AreEqual('00时00分09秒202毫秒', format_10s(1593546354745, 1593546345543));
    };
    TimeSpan.prototype.Test_TimeSpan_ctor = function () {
        AreEqual(15 * 24 * 3600 * 1000, new TimeSpan(15, 0, 0, 0).TotalMilliseconds); //15days
        AreEqual(10 * 1000, new TimeSpan(0, 0, 10).TotalMilliseconds); //10s
    };
    TimeSpan.Zero = new TimeSpan(0);
    TimeSpan.MaxValue = new TimeSpan(Number.MAX_SAFE_INTEGER);
    TimeSpan.MinValue = new TimeSpan(Number.MIN_SAFE_INTEGER);
    __decorate([
        TestMethod
    ], TimeSpan.prototype, "Test_TimeSpan_format_10s", null);
    __decorate([
        TestMethod
    ], TimeSpan.prototype, "Test_TimeSpan_ctor", null);
    return TimeSpan;
}());
exports.TimeSpan = TimeSpan;
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["Sunday"] = 0] = "Sunday";
    DayOfWeek[DayOfWeek["Monday"] = 1] = "Monday";
    DayOfWeek[DayOfWeek["Tuesday"] = 2] = "Tuesday";
    DayOfWeek[DayOfWeek["Wednesday"] = 3] = "Wednesday";
    DayOfWeek[DayOfWeek["Thursday"] = 4] = "Thursday";
    DayOfWeek[DayOfWeek["Friday"] = 5] = "Friday";
    DayOfWeek[DayOfWeek["Saturday"] = 6] = "Saturday";
})(DayOfWeek = exports.DayOfWeek || (exports.DayOfWeek = {}));
var DateTime = /** @class */ (function () {
    function DateTime() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var millis = 0;
        var year;
        var month;
        var day;
        var hour;
        var minute;
        var second;
        var millisecond;
        switch ((args || []).length) {
            case 1:
                millis = int(args[0]);
                break;
            case 3:
                year = int(args[0]);
                month = int(args[1]);
                day = int(args[2]);
                millis = int(DateTime.DateToMillis(year, month, day));
                break;
            case 6:
                year = int(args[0]);
                month = int(args[1]);
                day = int(args[2]);
                hour = int(args[3]);
                minute = int(args[4]);
                second = int(args[5]);
                millis = int(DateTime.DateToMillis(year, month, day) + DateTime.TimeToMillis(hour, minute, second));
                break;
            case 7:
                year = int(args[0]);
                month = int(args[1]);
                day = int(args[2]);
                hour = int(args[3]);
                minute = int(args[4]);
                second = int(args[5]);
                millisecond = int(args[6]);
                if (millisecond < 0 || millisecond >= 1000) {
                    throw new Error("ArgumentOutOfRange_Range \"millisecond: [0, 999]\"");
                }
                var num = DateTime.DateToMillis(year, month, day) + DateTime.TimeToMillis(hour, minute, second);
                millis = num + millisecond * 1;
                break;
        }
        this._millis = millis;
    }
    Object.defineProperty(DateTime.prototype, "Date", {
        get: function () {
            return new DateTime(this.Year, this.Month, this.Day);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "Day", {
        get: function () {
            return this.GetDatePart(3);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "DayOfWeek", {
        get: function () {
            return (divide(this._millis, 86400000) + 1) % 7;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "DayOfYear", {
        get: function () {
            return this.GetDatePart(1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "Hour", {
        get: function () {
            return this.TimeOfDay.Hours;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "Millisecond", {
        get: function () {
            return this._millis % 1000;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "Minute", {
        get: function () {
            return this.TimeOfDay.Minutes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "Month", {
        get: function () {
            return this.GetDatePart(2);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTime, "Now", {
        get: function () {
            return DateTime.FromJavaScriptDate(new Date());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "Second", {
        get: function () {
            return this.TimeOfDay.Seconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "TimeOfDay", {
        get: function () {
            return new TimeSpan(this._millis - this.Date._millis);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTime, "Today", {
        get: function () {
            return DateTime.Now.Date;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "Year", {
        get: function () {
            return this.GetDatePart(0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DateTime, "UtcNow", {
        get: function () {
            var d = new Date();
            return new DateTime(d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());
        },
        enumerable: false,
        configurable: true
    });
    DateTime.prototype.Add = function (value) {
        return this.AddMillis(value.TotalMilliseconds);
    };
    DateTime.prototype.add = function (value, scale) {
        // const num = value * scale + ((value >= 0.0) ? 0.5 : (-0.5));
        var num = value * scale;
        if (num <= -315537897600000.0 || num >= 315537897600000.0) {
            throw new Error("ArgumentOutOfRange_AddValue \"value\"");
        }
        return this.AddMillis(num * 1);
    };
    DateTime.prototype.AddDays = function (value) {
        return this.add(value, 86400000);
    };
    DateTime.prototype.AddHours = function (value) {
        return this.add(value, 3600000);
    };
    DateTime.prototype.AddMilliseconds = function (value) {
        return this.add(value, 1);
    };
    DateTime.prototype.AddMinutes = function (value) {
        return this.add(value, 60000);
    };
    DateTime.prototype.AddMonths = function (months) {
        if (months < -120000 || months > 120000) {
            throw new Error("ArgumentOutOfRange_DateTimeBadMonths \"months\"");
        }
        var _a = this.GetDatePart2(), year = _a.year, month = _a.month, day = _a.day;
        var num = month - 1 + months;
        if (num >= 0) {
            month = num % 12 + 1;
            year += divide(num, 12);
        }
        else {
            month = 12 + (num + 1) % 12;
            year += divide(num - 11, 12);
        }
        if (year < 1 || year > 9999) {
            throw new Error("ArgumentOutOfRange_DateArithmetic \"months\"");
        }
        var num2 = DateTime.DaysInMonth(year, month);
        if (day > num2) {
            day = num2;
        }
        return new DateTime(int(DateTime.DateToMillis(year, month, day) + this._millis % 86400000));
    };
    DateTime.prototype.AddSeconds = function (value) {
        return this.add(value, 1000);
    };
    DateTime.prototype.AddMillis = function (value) {
        var internalMillis = this._millis;
        return new DateTime(int(internalMillis + value));
    };
    DateTime.prototype.AddYears = function (value) {
        if (value < -10000 || value > 10000) {
            throw new Error("ArgumentOutOfRange_DateTimeBadYears \"years\"");
        }
        return this.AddMonths(value * 12);
    };
    DateTime.Compare = function (t1, t2) {
        var internalMillis = t1._millis;
        var internalMillis2 = t2._millis;
        if (internalMillis > internalMillis2) {
            return 1;
        }
        if (internalMillis < internalMillis2) {
            return -1;
        }
        return 0;
    };
    DateTime.prototype.CompareTo = function (value) {
        return DateTime.Compare(this, value);
    };
    DateTime.DateToMillis = function (year, month, day) {
        if (year >= 1 && year <= 9999 && month >= 1 && month <= 12) {
            var array = DateTime.IsLeapYear(year) ? DateTime.s_daysToMonth366 : DateTime.s_daysToMonth365;
            if (day >= 1 && day <= array[month] - array[month - 1]) {
                var num = year - 1;
                var num2 = num * 365 + divide(num, 4) - divide(num, 100) + divide(num, 400) + array[month - 1] + day - 1;
                return num2 * 86400000;
            }
        }
        throw new Error("ArgumentOutOfRange_BadYearMonthDay");
    };
    DateTime.TimeToMillis = function (hour, minute, second) {
        if (hour >= 0 && hour < 24 && minute >= 0 && minute < 60 && second >= 0 && second < 60) {
            return TimeSpan.TimeToMillis(hour, minute, second);
        }
        throw new Error("ArgumentOutOfRange_BadHourMinuteSecond");
    };
    DateTime.DaysInMonth = function (year, month) {
        if (month < 1 || month > 12) {
            throw new Error("ArgumentOutOfRange_Month \"month\"");
        }
        var array = DateTime.IsLeapYear(year) ? DateTime.s_daysToMonth366 : DateTime.s_daysToMonth365;
        return array[month] - array[month - 1];
    };
    DateTime.prototype.Equals = function (value) {
        return this._millis == value._millis;
    };
    DateTime.prototype.GetDatePart = function (part) {
        var internalMillis = this._millis;
        var num = divide(internalMillis, 86400000);
        var num2 = divide(num, 146097);
        num -= num2 * 146097;
        var num3 = divide(num, 36524);
        if (num3 == 4) {
            num3 = 3;
        }
        num -= num3 * 36524;
        var num4 = divide(num, 1461);
        num -= num4 * 1461;
        var num5 = divide(num, 365);
        if (num5 == 4) {
            num5 = 3;
        }
        if (part == 0) {
            return num2 * 400 + num3 * 100 + num4 * 4 + num5 + 1;
        }
        num -= num5 * 365;
        if (part == 1) {
            return num + 1;
        }
        var array = (num5 == 3 && (num4 != 24 || num3 == 3)) ? DateTime.s_daysToMonth366 : DateTime.s_daysToMonth365;
        var i;
        for (i = (num >> 5) + 1; num >= array[i]; i++) {
        }
        if (part == 2) {
            return i;
        }
        return num - array[i - 1] + 1;
    };
    DateTime.prototype.GetDatePart2 = function () {
        var internalMillis = this._millis;
        var num = divide(internalMillis, 86400000);
        var num2 = divide(num, 146097);
        num -= num2 * 146097;
        var num3 = divide(num, 36524);
        if (num3 == 4) {
            num3 = 3;
        }
        num -= num3 * 36524;
        var num4 = divide(num, 1461);
        num -= num4 * 1461;
        var num5 = divide(num, 365);
        if (num5 == 4) {
            num5 = 3;
        }
        var year = num2 * 400 + num3 * 100 + num4 * 4 + num5 + 1;
        num -= num5 * 365;
        var array = (num5 == 3 && (num4 != 24 || num3 == 3)) ? DateTime.s_daysToMonth366 : DateTime.s_daysToMonth365;
        var i;
        for (i = (num >> 5) + 1; num >= array[i]; i++) {
        }
        var month = i;
        var day = num - array[i - 1] + 1;
        return { year: year, month: month, day: day };
    };
    DateTime.prototype.GetHashCode = function () {
        var internalMillis = this._millis;
        return int(internalMillis) ^ int(internalMillis >> 32);
    };
    DateTime.IsLeapYear = function (year) {
        if (year < 1 || year > 9999) {
            throw new Error("ArgumentOutOfRange_Year \"year\"");
        }
        if (year % 4 == 0) {
            if (year % 100 == 0) {
                return year % 400 == 0;
            }
            return true;
        }
        return false;
    };
    DateTime.prototype.Subtract = function (value) {
        return new TimeSpan(this._millis - value._millis);
    };
    DateTime.prototype.ToString = function (format) {
        if (format === void 0) { format = 'yyyy-MM-dd HH:mm:ss'; }
        var data = new Array();
        data['yyyy'] = this.Year.toString().padStart(4, '0');
        data['MM'] = this.Month.toString().padStart(2, '0');
        data['M'] = this.Month.toString();
        data['dd'] = this.Day.toString().padStart(2, '0');
        data['d'] = this.Day.toString();
        data['HH'] = this.Hour.toString().padStart(2, '0');
        data['H'] = this.Hour.toString();
        data['mm'] = this.Minute.toString().padStart(2, '0');
        data['m'] = this.Minute.toString();
        data['ss'] = this.Second.toString().padStart(2, '0');
        data['s'] = this.Second.toString();
        data['fff'] = this.Millisecond.toString().padStart(3, '0');
        data['ff'] = data['fff'].substr(0, 2);
        var output = '';
        var parts = format.split(/(yyyy|MM|M|dd|d|HH|H|mm|m|ss|s|fff|ff)?/);
        for (var index = 0; index < parts.length; index++) {
            var item = parts[index];
            output += data[item] != null ? data[item] : item;
        }
        return output;
    };
    DateTime.FromJavaScripTimestamp = function (timestamp) {
        return DateTime.FromJavaScriptDate(new Date(timestamp));
    };
    DateTime.FromJavaScriptDate = function (date) {
        var d = date;
        return new DateTime(d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
    };
    DateTime.prototype.ToJavaScriptTimestamp = function () {
        return this.ToJavaScriptDate().valueOf();
    };
    DateTime.prototype.ToJavaScriptDate = function () {
        return new Date(this.Year, this.Month - 1, this.Day, this.Hour, this.Minute, this.Second, this.Millisecond);
    };
    DateTime.prototype.Test_DateTime_AddMilliseconds = function () {
        var min1 = new DateTime(2020, 7, 1);
        var max1 = new DateTime(2020, 7, 2);
        var span = max1.Subtract(min1);
        AreEqual('2020-06-30 00:00:00', min1.AddMilliseconds(-span.TotalMilliseconds).ToString());
        AreEqual('1.00:00:00', span.ToString());
        AreEqual('2020-07-01 00:00:00', min1.ToString());
    };
    DateTime.prototype.Test_DateTime_Divide = function () {
        var min1 = new DateTime(2020, 7, 1);
        var max1 = new DateTime(2020, 7, 2);
        var span = max1.Subtract(min1);
        AreEqual('1.00:00:00', span.Divide(1).ToString());
        AreEqual('12:00:00', span.Divide(2).ToString());
        AreEqual('08:00:00', span.Divide(3).ToString());
        AreEqual('06:00:00', span.Divide(4).ToString());
        AreEqual('04:48:00', span.Divide(5).ToString());
        AreEqual('03:25:42.857', span.Divide(7).ToString());
        AreEqual('02:40:00', span.Divide(9).ToString());
        AreEqual('02:10:54.545', span.Divide(11).ToString());
        AreEqual('01:50:46.154', span.Divide(13).ToString());
    };
    DateTime.s_daysToMonth365 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
    DateTime.s_daysToMonth366 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
    DateTime.MinValue = new DateTime(0);
    DateTime.MaxValue = new DateTime(Number.MAX_SAFE_INTEGER);
    DateTime.UnixEpoch = new DateTime(1970, 1, 1, 0, 0, 0, 0);
    __decorate([
        TestMethod
    ], DateTime.prototype, "Test_DateTime_AddMilliseconds", null);
    __decorate([
        TestMethod
    ], DateTime.prototype, "Test_DateTime_Divide", null);
    return DateTime;
}());
exports.DateTime = DateTime;
function TestMethod(target, propertyKey, descriptor) {
    try {
        descriptor.value();
        console.info('%c ✔', 'color: green', "UnitTest '" + propertyKey.toString() + "' passed!");
    }
    catch (ex) {
        console.error('%c ❌', 'color: red', "UnitTest '" + propertyKey.toString() + "' faild!", '\n', ex);
    }
}
exports.TestMethod = TestMethod;
function AreEqual(expected, actual) {
    var equal = true;
    if (null == expected) {
        if (null != actual && actual !== expected) {
            equal = false;
        }
    }
    else if (expected !== actual) {
        equal = false;
    }
    if (!equal) {
        throw new Error('expected = ' + expected + ', ' + 'actual = ' + actual);
    }
}
exports.AreEqual = AreEqual;
;
function divide(value, factor) {
    return int(+value / +factor);
}
exports.divide = divide;
function int(value) {
    return +value >= 0 ? Math.floor(+value) : Math.ceil(+value);
}
exports.int = int;
window['DateTime'] = DateTime;
window['TimeSpan'] = TimeSpan;
//# sourceMappingURL=datetime.js.map