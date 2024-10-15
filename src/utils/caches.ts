// import Cookies from 'js-cookie';

// enum CacheType {
// 	Local,
// 	Session
// }

// interface CookieOptions {
// 	expires?: number | Date; // 过期时间，可以是数值（天数）或日期对象
// 	path?: string; // Cookie 生效的路径
// 	domain?: string; // Cookie 生效的域名
// 	secure?: boolean; // 是否仅通过 HTTPS 发送 Cookie
// 	sameSite?: 'Strict' | 'Lax' | 'None'; // SameSite 属性
// }

// // 把字符串作为 URI 组件进行编码
// export function encode(s: string | number | boolean) {
// 	return encodeURIComponent(s);
// }
// // 对 encodeURIComponent() 函数编码的 URI 进行解码。
// export function decode(s: string) {
// 	return decodeURIComponent(s);
// }

// class Cache {
// 	storage: Storage;
// 	constructor(type: CacheType) {
// 		this.storage = type === CacheType.Local ? localStorage : sessionStorage;
// 	}

// 	set(key: string, value: any, expireSeconds?: number) {
// 		const now = new Date().getTime();
// 		const item = {
// 			value,
// 			expireTime: expireSeconds ? now + expireSeconds * 1000 : undefined
// 		};
// 		if (value) {
// 			this.storage.setItem(key, JSON.stringify(item));
// 		}
// 	}

// 	get(key: string) {
// 		const itemStr = this.storage.getItem(key);
// 		if (!itemStr) return;

// 		const item = JSON.parse(itemStr);
// 		const now = new Date().getTime();

// 		if (item.expireTime && now > item.expireTime) {
// 			this.storage.removeItem(key);
// 			return;
// 		}

// 		return item.value;
// 	}

// 	delete(key: string) {
// 		this.storage.removeItem(key);
// 	}

// 	clear() {
// 		this.storage.clear();
// 	}
// }

// const localCache = new Cache(CacheType.Local);
// const sessionCache = new Cache(CacheType.Session);

// class CookieCache {
// 	public static set(key: string, value: string, options: CookieOptions): void {
// 		Cookies.set(key, value, options);
// 	}

// 	public static get(key: string): string | null {
// 		return Cookies.get(key) || null;
// 	}

// 	public static delete(key: string, options?: CookieOptions): void {
// 		Cookies.remove(key, options);
// 	}

// 	public static check(key: string): boolean {
// 		return Cookies.get(key) !== undefined;
// 	}
// }

// export { localCache, sessionCache, CookieCache };
