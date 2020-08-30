import { SR } from './sr';

export class Exception extends Error {
    private _HResult: number;
    public get HResult() {
        return this._HResult;
    }
    public set HResult(value) {
        this._HResult = value;
    }
    private _innerException: Exception;
    public get InnerException() {
        return this._innerException;
    }

    constructor(...args: Object[]) {
        switch ((args || []).length) {
            case 0:
                super();
                this._HResult = -2146233088; break;
            case 1:
            case 2:
                super(<string>args[0]);
                this._innerException = <Exception>args[1];
                break;
        }
    }

    public get Message(): string {
        return this.message ?? SR.Format(SR.Exception_WasThrown, this.name);
    }

    ToString(): string {
        return `${this.name}:${this.message}\r${this.stack}`;
    }
}

export class SystemException extends Exception {
    constructor(...args: Object[]) {
        super(<string>args[0] || SR.Arg_SystemException, <Exception>args[1]);
        this.HResult = -2146233087;
    }
}

export class ArgumentException extends SystemException {
    private _paramName: string;
    public get ParamName() {
        return this._paramName;
    }

    constructor(...args: Object[]) {
        switch ((args || []).length) {
            case 0: super(SR.Arg_ArgumentException); break;
            case 1: super(<string>args[0]); break;
            case 2:
                if (typeof args[1] === 'string') {
                    super(<string>args[0]);
                    this._paramName = args[1];
                } else {
                    super(<string>args[0], <Exception>args[1]);
                }
                break;
            case 3:
                super(<string>args[0], <Exception>args[2]);
                this._paramName = <string>args[1];
                break;
        }
        this.HResult = -2147024809;
    }

    public get Message(): string {
        if (this.message == null && this.HResult == -2147024809) {
            this.message = SR.Arg_ArgumentException;
        }
        let text = super.Message;
        if (!!this._paramName) {
            text = text + ' ' + SR.Format(SR.Arg_ParamName_Name, this._paramName);
        }
        return text;
    }
}

export class ArgumentNullException extends ArgumentException {
    constructor(...args: Object[]) {
        switch ((args || []).length) {
            case 0: super(SR.ArgumentNull_Generic); break;
            case 1: super(SR.ArgumentNull_Generic, <string>args[0]); break;
            case 2: super(args); break;
        }
        this.HResult = -2147467261;
    }
}

export class ArgumentOutOfRangeException extends ArgumentException {
    private _actualValue: Object;
    public get ActualValue() {
        return this._actualValue;
    }

    constructor(...args: Object[]) {
        switch ((args || []).length) {
            case 0: super(SR.Arg_ArgumentOutOfRangeException); break;
            case 1: super(SR.Arg_ArgumentOutOfRangeException, <string>args[0]); break;
            case 2: super(args); break;
            case 3:
                super(<string>args[0], <string>args[2]);
                this._actualValue = <Object>args[1];
                break;
        }
        this.HResult = -2146233086;
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
    constructor(...args: Object[]) {
        switch ((args || []).length) {
            case 0: super(SR.SerializationException); break;
            case 1:
            case 2: super(args); break;
        }
        this.HResult = -2146233076;
    }
}

export class ArithmeticException extends SystemException {
    constructor(...args: Object[]) {
        switch ((args || []).length) {
            case 0: super(SR.Arg_ArithmeticException); break;
            case 1:
            case 2: super(args); break;
        }
        this.HResult = -2147024362;
    }
}

export class OverflowException extends ArithmeticException {
    constructor(...args: Object[]) {
        switch ((args || []).length) {
            case 0: super(SR.Arg_OverflowException); break;
            case 1:
            case 2: super(args); break;
        }
        this.HResult = -2146233066;
    }
}

export class InvalidCastException extends SystemException {
    constructor(...args: Object[]) {
        switch ((args || []).length) {
            case 0: super(SR.Arg_InvalidCastException); break;
            case 1: super(args); break;
            case 2:
                if (typeof args[1] === 'number') {
                    super(<string>args[0]);
                    this.HResult = <number>args[1];
                } else {
                    super(args);
                }
                break;
        }
        this.HResult = this.HResult != null ? this.HResult : -2147467262;
    }
}
