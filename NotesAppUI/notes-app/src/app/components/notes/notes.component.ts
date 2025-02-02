import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { Note } from '../../models/note.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  imports: [FormsModule,CommonModule],
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];
  title = '';
  content = '';

  constructor(private notesService: NotesService, private http: HttpClient) {}

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    this.notesService.getNotes().subscribe(notes => {
      this.notes = notes;
    });
  }

  addNote() {
    const newNote: Note = { title: this.title, content: this.content };
    this.notesService.addNote(newNote).subscribe(note => {
      this.notes.push(note);
      this.title = '';
      this.content = '';
    });
  }
}

