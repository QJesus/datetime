import { SR } from './sr';

export class Exception extends Error {
    constructor(message: string) {
        super(message || SR.Exception_WasThrown);
    }

    public get Message(): string {
        return this.message ?? SR.Format(SR.Exception_WasThrown, this.name);
    }

    ToString(): string {
        return `${this.name}:${this.message}\r${this.stack}`;
    }
}

export class SystemException extends Exception {
    constructor(message: string) {
        super(message || SR.Arg_SystemException);
    }
}

export class ArgumentException extends SystemException {
    private _paramName: string;

    constructor(message: string, paramName?: string) {
        super(message);
        this._paramName = paramName;
    }

    public get Message(): string {
        let text = this.message || SR.Arg_ArgumentException;
        if (!!this._paramName) {
            text = text + ' ' + SR.Format(SR.Arg_ParamName_Name, this._paramName);
        }
        return text;
    }
}

export class ArgumentNullException extends ArgumentException {
    constructor(message: string, paramName?: string) {
        super(message, paramName);
    }
}

export class ArgumentOutOfRangeException extends ArgumentException {
    private _actualValue: Object;

    constructor(message: string, paramName?: string, actualValue?: Object) {
        super(message, paramName);
    }

    public get Message(): string {
        let message = super.Message;
        if (this._actualValue != null) {
            let text = SR.Format(SR.ArgumentOutOfRange_ActualValue, this._actualValue);
            if (message == null) {
                return text;
            }
            return message + '\r' + text;
        }
        return message;
    }
}

export class SerializationException extends Exception {
    constructor(message: string) {
        super(message || SR.SerializationException);
    }
}

export class ArithmeticException extends SystemException {
    constructor(message: string) {
        super(message || SR.Arg_ArithmeticException)
    }
}

export class OverflowException extends ArithmeticException {
    constructor(message: string) {
        super(message || SR.Arg_OverflowException);
    }
}

export class InvalidCastException extends SystemException {
    constructor(message: string) {
        super(message || SR.Arg_InvalidCastException);
    }
}
