import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "summary"
})
export class SummaryPipe implements PipeTransform {
    transform(value: string, limit?: number) {
        if (!value)
            return null;

        let defaultLimit = 50;
        return value.substr(0, limit ? limit : defaultLimit) + (limit < value.length ? "..." : "");
    }
}
