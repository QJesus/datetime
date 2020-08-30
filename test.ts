import { DateTime, TimeSpan } from './datetime';
import { Console } from './console';

function AreEqual<T>(expected: T, actual: T) {
    let equal = true;
    if (null == expected) {
        if (null != actual && actual !== expected) {
            equal = false;
        }
    } else if (expected !== actual) {
        equal = false;
    }

    if (equal) {
        console.info('%c ✔', 'color: green', `passed! ${expected} equals ${actual}`);
    } else {
        console.error('%c ❌', 'color: red', ` faild! ${expected} WRONG WITH ${actual}`);
    }
};

function TestMethod(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    try {
        descriptor.value();
        console.info('%c ✔', 'color: green', `UnitTest '${propertyKey.toString()}' passed!`);
    } catch (ex) {
        console.error('%c ❌', 'color: red', `UnitTest '${propertyKey.toString()}' faild!`, '\n', ex);
    }
}

// Test_DateTime_Divide
{
    let min1 = new DateTime(2020, 7, 1);
    let max1 = new DateTime(2020, 7, 2);
    let span = max1.Subtract(min1);
    AreEqual('1.00:00:00', span.Divide(1).ToString());
    AreEqual('12:00:00', span.Divide(2).ToString());
    AreEqual('08:00:00', span.Divide(3).ToString());
    AreEqual('06:00:00', span.Divide(4).ToString());
    AreEqual('04:48:00', span.Divide(5).ToString());
    AreEqual('03:25:42.857', span.Divide(7).ToString());
    AreEqual('02:40:00', span.Divide(9).ToString());
    AreEqual('02:10:54.545', span.Divide(11).ToString());
    AreEqual('01:50:46.154', span.Divide(13).ToString());
}

// Test_DateTime_AddMilliseconds
{
    let min1 = new DateTime(2020, 7, 1);
    let max1 = new DateTime(2020, 7, 2);
    let span = max1.Subtract(min1);
    AreEqual('2020-06-30 00:00:00', min1.AddMilliseconds(-span.TotalMilliseconds).ToString());
    AreEqual('1.00:00:00', span.ToString());
    AreEqual('2020-07-01 00:00:00', min1.ToString());
}

// Test_TimeSpan_format_10s
{
    const format_10s = (max: number, min: number) => {
        let span = new TimeSpan(max - min);
        if (Math.abs(span.TotalMilliseconds) > new TimeSpan(0, 0, 0, 10).TotalMilliseconds) {
            span = new TimeSpan(0, 0, 0, 0, span.TotalMilliseconds - span.Milliseconds);
        }
        return span.ToString('c', 'cn');
    };
    AreEqual('1天00时00分00秒', format_10s(1593619200000, 1593532800000));
    AreEqual('00时00分22秒', format_10s(1593546359541, 1593546337366));
    AreEqual('00时00分09秒202毫秒', format_10s(1593546354745, 1593546345543));
}

// Test_TimeSpan_ctor
{
    AreEqual(15 * 24 * 3600 * 1000, new TimeSpan(15, 0, 0, 0).TotalMilliseconds);//15days
    AreEqual(10 * 1000, new TimeSpan(0, 0, 10).TotalMilliseconds); //10s
}
let value = new DateTime(2020, 8, 30);
Console.WriteLine(value);

Console.WriteLine(DateTime.Today.Equals(value));
Console.WriteLine(value.AddMilliseconds(377).ToString('yyyy-MM-dd HH:mm:ss.fff'));
Console.WriteLine(value.AddSeconds(17));
Console.WriteLine(value.AddMinutes(30));
Console.WriteLine(value.AddHours(2));
Console.WriteLine(value.AddMinutes(59));
Console.WriteLine(value.AddDays(1));
