import { Component } from '@angular/core';
import { AppService } from '../../providers/app-service';

declare var $;

@Component({
    selector: 'sticky-notes',
    templateUrl: 'sticky-notes.html'
})

export class StickyNotes
{
    notes: string[];
    noteInput: string;


    noteZindex = 1;
    constructor(private appService: AppService)
    {
        this.noteInput = "";
        this.notes = [];
        this.appService.getStickyNote()
            .then(data => 
            {
                this.notes = data || [];
                for (let noteInd in this.notes)
                {
                    this.newNoteContent(this.notes[noteInd], noteInd);
                }
            })
            .catch(() => { });
    }


    delete = (event) =>
    {
        let parent = event.target.parentElement;
        if (Number(parent.id) < 0)
            return;
        this.notes.splice(Number(parent.id), 1);
        this.appService.saveStickyNotes(this.notes);
        parent.id = -1;
        parent.remove();
    }
    textChanged = (event) =>
    {
        let parent = event.target.parentElement.parentElement;
        this.notes[Number(parent.id)] = event.target.value;
        this.appService.saveStickyNotes(this.notes);
    }
    newNote(event)
    {
        if (event.key === 'Enter')
        {
            if (!event.ctrlKey)
            {

                this.newNoteContent(this.noteInput);
                this.notes.push(this.noteInput);
                this.appService.saveStickyNotes(this.notes);
                this.noteInput = "";

                return false;
            }
            else
            {
                this.noteInput += '\n';
            }
        }
    }
    newNoteContent(text, index = null)
    {
        index = index || this.notes.length;
        let noteTemp = '<ion-card class="note" id="' + index + '">'
            + '<a href="javascript:;" class="button remove">X</a>'
            + '<ion-card class="note_cnt">'
            + '<textarea class="cnt" >' + text + '</textarea>'
            + '</ion-card> '
            + '</ion-card>';
        $(noteTemp).hide().appendTo("#board").show("fade", 150, 150);
        // .draggable().on('dragstart',
        // function ()
        // {
        //     $(this).zIndex(++this.noteZindex);
        // });
        $('.remove').click(this.delete);
        $('textarea').change(this.textChanged);
    }
}




