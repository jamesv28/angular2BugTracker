import { Component, OnInit } from '@angular/core';
import { BugService } from '../service/bugs.service';
import {Bug} from '../model/bug.model';

@Component({
    moduleId: module.id,
    selector: 'bug-list',
    templateUrl: 'bug.component.html',
    styleUrls: ['bug.component.css']
})

export class BugListComponent implements OnInit {

    private bugs: Bug[] = [];

    constructor(private bugService: BugService) { };

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getAddedBugs();
    }
    getAddedBugs() {
        this.bugService.getAddedBugs()
            .subscribe(bug => {
                this.bugs.push(bug);
                console.log('bug', this.bugs);    // TODO remove this line when finished
            },
            err => {
                console.error("no added bug");
            });
    }
}