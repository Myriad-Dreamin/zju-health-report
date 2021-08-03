
export const defStrMagicOk = 'magic ok';

export const $jquery = function (selector: string) {
    return {
        selector,
        focus() {
            console.log('focus bad validation', selector);
        },
        get(nth: number) {
            return this;
        },
        scrollIntoView() {
            console.log('selected bad validation', selector);
        }
    }
}

export function wapalert(alert_content: string, unkn: boolean, callback: () => void): void {
    console.error(alert_content);
    callback();
}

export async function wapconfirm(confirmContent: string, callback: () => Promise<void>): Promise<void> {
    if (confirmContent.trim() == defStrMagicOk) {
        await callback();
    } else {
        console.log(confirmContent);
    }
}
