export class Console {
    public static Clear(): void {
        console.clear();
    }

    public static WriteLine(...value: Object[]): void {
        switch ((value || []).length) {
            case 0: console.log(); break;
            case 1: console.log(value[0].toString()); break;
            default:
                let r = value[0].toString();
                for (let i = 1; i < value.length; i++) {
                    r = r.replace('{' + (i - 1) + '}', value[i].toString());
                }
                console.log(r);
                break;
        }
    }
}