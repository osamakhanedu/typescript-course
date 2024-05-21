import { OutputTarget } from "../Summary";



export class ConsoleTarget implements OutputTarget {

    print(output: string): void {
        console.log(output);

    }
}