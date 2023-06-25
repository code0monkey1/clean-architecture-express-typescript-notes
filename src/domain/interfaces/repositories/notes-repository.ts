import { NoteRequestModel, NoteResponseModel } from "../../entities";

export interface NotesRepository{
       getNotes():Promise<NoteResponseModel[]>
       createNote(note:NoteRequestModel):Promise<NoteResponseModel>

       deleteNote(id:string):Promise<NoteResponseModel>

       updateNote(id:string,note:Partial<NoteRequestModel>):Promise<NoteResponseModel>

}