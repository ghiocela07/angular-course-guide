import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'sort'
})
export class SortPipe implements PipeTransform {

	public transform(value: any, propName: string): any {
		if (propName === '') {
			return value;
		}

		return value.sort((v1: any, v2: any) => {
			if (v1[propName] > v2[propName]) {
				return 1;
			}

			if (v1[propName] < v2[propName]) {
				return -1;
			}

			return 0;
		}

		);
	}

}
