import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { firebaseConfigService } from '../../core/services/firebase-config';
import { Bug } from '../model/bug.model';

@Injectable()

export class BugService {

    private bugsDbRef = this.fire.database.ref().child('bugs');

    constructor(private fire: firebaseConfigService) { }

    getAddedBugs(): Observable<any> {
        //  setup listener
        return Observable.create(obs => {
            this.bugsDbRef.on("child_added", bug => {
                const newBug = bug.val() as Bug;

                obs.next(newBug);
            },
                err => {
                    obs.throw(err);

                })
        }); // end of observable
    }

    addBug(bug: Bug) {
        let newBugRef = this.bugsDbRef.push();
        newBugRef.set({
            title: bug.title,
            status: bug.status,
            severity: bug.severity,
            description: bug.description,
            createdBy: 'James',
            createdDate: Date.now()

        }).catch(err => {
            console.error("there was an error pushing a new bug"); ß
        });
    }
}