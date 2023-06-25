import { NoteRequestModel, NoteResponseModel } from "../../entities";
import { NotesRepository } from "../repositories/notes-repository";

export interface CreateNoteUseCase{
     execute(note:NoteRequestModel):Promise<NoteResponseModel>
    
}