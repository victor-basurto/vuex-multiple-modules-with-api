/**
 * Helper
 * Returns TimeOut Func
 * @example
 * How to use sleep()
 * ```
 * const someNumber = 1000
 * sleep( someNumber ) // -> resolves after 1s
 * ```
 * 
 * @param {Number} ms - Milliseconds
 * @returns Timeout Function
 */
export const sleepHelper = (ms: number): Promise<number> => 
	new Promise<number>((resolve: (value: number | PromiseLike<number>) => void): number => 
		setTimeout(resolve, ms))
