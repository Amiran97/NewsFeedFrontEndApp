import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

export class CryptHelper {
    public static encryptData(data: {}): string {
        return CryptoJS.AES.encrypt(JSON.stringify(data), environment.encryptSecretKey).toString();
    }

    public static decryptData(data: string): {} {
        const bytes = CryptoJS.AES.decrypt(data, environment.encryptSecretKey);
        if (bytes.toString()) {
            return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        }
        return data;
    }
}