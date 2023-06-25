import { NoteRequestModel, NoteResponseModel } from "../../entities";
import { NotesRepository } from '../../interfaces/repositories/notes-repository';
import { CreateNoteUseCase } from "../../interfaces/use-cases/create-note-use-case";

class CreateNote implements CreateNoteUseCase{

  private readonly notesRepository;

  constructor(notesRepository:NotesRepository){
    this.notesRepository=notesRepository
  }
  execute(note: NoteRequestModel): Promise<NoteResponseModel> {
    
     const createdNote= this.notesRepository.createNote(note)

     return createdNote
  }
  
}

export default CreateNote;