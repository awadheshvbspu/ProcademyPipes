import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "../Model/student";

@Pipe({
    name: 'filter',
    pure: true
})
export class FilterPipe implements PipeTransform{
    transform(list: Student[], filterBy: string) {
        console.log('FILTER PIPE CALLED!');
        if(filterBy.toLowerCase() === 'all' || filterBy === '' || list.length === 0){
            return list;
        }else{
            return list.filter((std) => {
                return std.gender.toLowerCase() === filterBy.toLowerCase();
            })
        }
    }
}