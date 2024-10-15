// 判断是否为空数组
export function nonEmptyArray<T>(obj: T[]): obj is T[] {
	return Array.isArray(obj) && !!obj.length;
}

// 深度取值
export function getIn(path: Array<string | number>, object: any, defaultValue: any) {
	const isTrue = (v: number) => !!v || v === 0;
	return path.reduce((xs, x) => (isTrue(xs) && isTrue(xs[x]) ? xs[x] : defaultValue), object);
}
