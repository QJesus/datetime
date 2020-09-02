# datetime-dotnet

> Convert Javascript Date to C# DateTime
>
> Working with Date and Time in C# Like

```c#

let value = new DateTime(2020, 8, 30);
Console.WriteLine(value);

Console.WriteLine(DateTime.Today.Equals(value));
Console.WriteLine(value.AddMilliseconds(377).ToString('yyyy-MM-dd HH:mm:ss.fff'));
Console.WriteLine(value.AddSeconds(17));
Console.WriteLine(value.AddMinutes(30));
Console.WriteLine(value.AddHours(2));
Console.WriteLine(value.AddMinutes(59));
Console.WriteLine(value.AddDays(1));

```

Output:

2020-08-30 00:00:00

true

2020-08-30 00:00:00.377

2020-08-30 00:00:17

2020-08-30 00:30:00

2020-08-30 02:00:00

2020-08-30 00:59:00

2020-08-31 00:00:00


**SEE test.ts FOR MORE EXAMPLES.**
