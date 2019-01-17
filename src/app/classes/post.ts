import {Injectable} from '@angular/core';

@Injectable()
export class Posts {
    public id: string;
    public title: string;
    public description: string;
    public photoUrl: string;
    public tags: Array<string>;
}