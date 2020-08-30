export class Exception extends Error {
    /**
     * Initializes a new instance of the System.Exception  class.
     */
    constructor();
    /**
     * Initializes a new instance of the System.Exception class with a specified error message.
     * @param message The message that describes the error.
     */
    constructor(message: string);
    /**
     * Initializes a new instance of the System.Exception class with a specified error message and a reference to the inner exception that is the cause of this exception.
     * @param message The error message that explains the reason for the exception.
     * @param innerException The exception that is the cause of the current exception, or a null reference (Nothing in Visual Basic) if no inner exception is specified.
     */
    constructor(message: string, innerException: Exception);
}

export class SystemException extends Exception {
    /**
     * Initializes a new instance of the System.SystemException  class.
     */
    constructor();
    /**
     * Initializes a new instance of the System.SystemException class with a specified error message.
     * @param message The message that describes the error.
     */
    constructor(message: string);
    /**
     * Initializes a new instance of the System.SystemException class with a specified error message and a reference to the inner exception that is the cause of this exception.
     * @param message The message that describes the error.
     * @param innerException The exception that is the cause of the current exception. If the innerException parameter is not a null reference (Nothing in Visual Basic), the current exception is raised in a catch block that handles the inner exception.
     */
    constructor(message: string, innerException: Exception);
}

export class ArgumentException extends SystemException {
    /**
     * Initializes a new instance of the System.ArgumentException class.
     */
    constructor();
    /**
     * Initializes a new instance of the System.ArgumentException class with a specified error message.
     * @param message The error message that explains the reason for the exception.
     */
    constructor(message: string);
    /**
     * Initializes a new instance of the System.ArgumentException class with a specified error message and a reference to the inner exception that is the cause of this exception.
     * @param message The error message that explains the reason for the exception.
     * @param innerException The exception that is the cause of the current exception. If the innerException parameter is not a null reference, the current exception is raised in a catch block that handles the inner exception.
     */
    constructor(message: string, innerException: Exception);
    /**
     * Initializes a new instance of the System.ArgumentException class with a specified error message, the parameter name, and a reference to the inner exception that is the cause of this exception.
     * @param message The error message that explains the reason for the exception.
     * @param paramName 
     * @param innerException The exception that is the cause of the current exception. If the innerException parameter is not a null reference, the current exception is raised in a catch block that handles the inner exception.
     */
    constructor(message: string, paramName: string, innerException: Exception);
    /**
     * Initializes a new instance of the System.ArgumentException class with a specified error message and the name of the parameter that causes this exception.
     * @param message The error message that explains the reason for the exception.
     * @param paramName The name of the parameter that caused the current exception.
     */
    constructor(message: string, paramName: string);
}

export class ArgumentNullException extends ArgumentException {
    /**
     * Initializes a new instance of the System.ArgumentNullException  class.
     */
    constructor();
    /**
     * Initializes a new instance of the System.ArgumentNullException  class with the name of the parameter that causes this exception.
     * @param paramName The name of the parameter that caused the exception.
     */
    constructor(paramName: string);
    /**
     * Initializes a new instance of the System.ArgumentNullException  class with a specified error message and the exception that is the cause of this exception.
     * @param message The error message that explains the reason for this exception.
     * @param innerException The exception that is the cause of the current exception, or a null reference (Nothing in Visual Basic) if no inner exception is specified.
     */
    constructor(message: string, innerException: Exception);
    /**
     * Initializes a new instance of the System.ArgumentNullException  class with a specified error message and the name of the parameter that causes this exception.
     * @param message The error message that explains the reason for this exception.
     * @param paramName The name of the parameter that caused the exception.
     */
    constructor(message: string, paramName: string);
}

export class ArgumentOutOfRangeException extends ArgumentException {
    /**
     * Initializes a new instance of the System.ArgumentOutOfRangeException  class.
     */
    constructor();
    /**
     * Initializes a new instance of the System.ArgumentOutOfRangeException  class with the name of the parameter that causes this exception.
     * @param paramName The name of the parameter that causes this exception.
     */
    constructor(paramName: string);
    /**
     * Initializes a new instance of the System.ArgumentOutOfRangeException  class with the name of the parameter that causes this exception and a specified error message.
     * @param paramName The name of the parameter that causes this exception.
     * @param message The error message that explains the reason for this exception.
     */
    constructor(paramName: string, message: string);
    /**
     * Initializes a new instance of the System.ArgumentOutOfRangeException  class with a specified error message and the exception that is the cause of this exception.
     * @param message The error message that explains the reason for this exception.
     * @param innerException The exception that is the cause of the current exception, or a null reference (Nothing in Visual Basic) if no inner exception is specified.
     */
    constructor(message: string, innerException: Exception);
    /**
     * Initializes a new instance of the System.ArgumentOutOfRangeException  class with the parameter name, the value of the argument, and a specified error message.
     * @param paramName The name of the parameter that causes this exception.
     * @param actualValue The value of the argument that causes this exception.
     * @param message The error message that explains the reason for this exception.
     */
    constructor(paramName: string, actualValue: Object, message: string);
}

export class SerializationException extends SystemException {
    /**
     * Initializes a new instance of the System.Runtime.Serialization.SerializationException  class with default properties.
     */
    constructor();
    /**
     * Initializes a new instance of the System.Runtime.Serialization.SerializationException  class with default properties.
     * @param message Indicates the reason why the exception occurred.
     */
    constructor(message: string);
    /**
     * Initializes a new instance of the System.Runtime.Serialization.SerializationException  class with default properties.
     * @param message The error message that explains the reason for the exception.
     * @param innerException The exception that is the cause of the current exception. If the innerException parameter is not null, the current exception is raised in a catch block that handles the inner exception.
     */
    constructor(message: string, innerException: Exception);
}

export class ArithmeticException extends SystemException {
    /**
     * Initializes a new instance of the System.ArithmeticException  class.
     */
    constructor();
    /**
     * Initializes a new instance of the System.ArithmeticException  class.
     * @param message A System.String that describes the error.
     */
    constructor(message: string);
    /**
     * Initializes a new instance of the System.ArithmeticException  class.
     * @param message The error message that explains the reason for the exception.
     * @param innerException The exception that is the cause of the current exception. If the innerException parameter is not a null reference, the current exception is raised in a catch block that handles the inner exception.
     */
    constructor(message: string, innerException: Exception);
}

export class OverflowException extends ArithmeticException {
    /**
     * Initializes a new instance of the System.OverflowException  class.
     */
    constructor();
    /**
     * Initializes a new instance of the System.OverflowException  class.
     * @param message The message that describes the error.
     */
    constructor(message: string);
    /**
     * Initializes a new instance of the System.OverflowException  class.
     * @param message The error message that explains the reason for the exception.
     * @param innerException The exception that is the cause of the current exception. If the innerException parameter is not a null reference (Nothing in Visual Basic), the current exception is raised in a catch block that handles the inner exception.
     */
    constructor(message: string, innerException: Exception);
}

export class InvalidCastException extends SystemException {
    /**
     * Initializes a new instance of the System.InvalidCastException  class.
     */
    constructor();
    /**
     * Initializes a new instance of the System.InvalidCastException  class.
     * @param message The message that describes the error.
     */
    constructor(message: string);
    /**
     * Initializes a new instance of the System.InvalidCastException  class.
     * @param message The error message that explains the reason for the exception.
     * @param innerException The exception that is the cause of the current exception. If the innerException parameter is not null, the current exception is raised in a catch block that handles the inner exception.
     */
    constructor(message: string, innerException: Exception);
    /**
     * Initializes a new instance of the System.InvalidCastException  class.
     * @param message The message that indicates the reason the exception occurred.
     * @param errorCode The error code (HRESULT) value associated with the exception.
     */
    constructor(message: string, errorCode: number);
}