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
                for (let note of this.notes)
                {
                    this.newNoteContent(note);
                }
            })
            .catch(() => { });
    }


    delete = (event) =>
    {
        let parent = event.target.parentElement;
        this.notes.splice(Number(parent.id)-1, 1);
        this.appService.saveStickyNotes(this.notes);
        parent.remove();
    }
    textChanged=(event)=>
    {
        let parent = event.target.parentElement.parentElement;
        this.notes[Number(parent.id)-1]=event.target.value;
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
    newNoteContent(text)
    {
        let noteTemp = '<ion-card class="note" id="' + this.notes.length + '">'
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
        let that = this;
        $('.remove').click(this.delete);
        $('textarea').change(this.textChanged);
        $('.note')
    }
}
$.fn.autogrow = function (options)
{
    return this.filter('textarea').each(function ()
    {
        var self = this;
        var $self = $(self);
        var minHeight = $self.height();
        var noFlickerPad = $self.hasClass('autogrow-short') ? 0 : parseInt($self.css('lineHeight')) || 0;

        var shadow = $('<div></div>').css({
            position: 'absolute',
            top: -10000,
            left: -10000,
            width: $self.width(),
            fontSize: $self.css('fontSize'),
            fontFamily: $self.css('fontFamily'),
            fontWeight: $self.css('fontWeight'),
            lineHeight: $self.css('lineHeight'),
            resize: 'none',
            'word-wrap': 'break-word'
        }).appendTo(document.body);

        var update = function (event)
        {
            var times = function (string, number)
            {
                for (var i = 0, r = ''; i < number; i++) r += string;
                return r;
            };

            var val = self.value.replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/&/g, '&amp;')
                .replace(/\n$/, '<br/>&nbsp;')
                .replace(/\n/g, '<br/>')
                .replace(/ {2,}/g, function (space) { return times('&nbsp;', space.length - 1) + ' ' });

            // Did enter get pressed?  Resize in this keydown event so that the flicker doesn't occur.
            if (event && event.data && event.data.event === 'keydown' && event.keyCode === 13)
            {
                val += '<br />';
            }

            shadow.css('width', $self.width());
            shadow.html(val + (noFlickerPad === 0 ? '...' : '')); // Append '...' to resize pre-emptively.
            $self.height(Math.max(shadow.height() + noFlickerPad, minHeight));
        }

        $self.change(update).keyup(update).keydown({ event: 'keydown' }, update);
        $(window).resize(update);

        update(null);
    });
};



