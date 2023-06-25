import { NoteResponseModel } from "../../entities";
import { NotesRepository } from "../../interfaces/repositories/notes-repository";
import { GetAllNotesUseCase } from "../../interfaces/use-cases/get-all-notes-use-case";

class GetAllNotes implements GetAllNotesUseCase{
 
  private readonly notesRepository:NotesRepository

  constructor(notesRepository:NotesRepository){
    this.notesRepository=notesRepository
  }

  async execute(): Promise<NoteResponseModel[]> {

     const notes =await  this.notesRepository.getNotes()
      
     return notes;
  }
  
}

export default GetAllNotes;