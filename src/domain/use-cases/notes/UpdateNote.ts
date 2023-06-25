import { NoteRequestModel, NoteResponseModel } from "../../entities";
import { NotesRepository } from "../../interfaces/repositories/notes-repository";
import { UpdateNoteUseCase } from "../../interfaces/use-cases/update-note-use-case";

 class UpdateNote implements UpdateNoteUseCase{

  constructor(private readonly notesRepository:NotesRepository){}
  
  async execute(id: string, note: Partial<NoteRequestModel>): Promise<NoteResponseModel> {
    
      const updatedNote =await this.notesRepository.updateNote(id,note)

      return updatedNote
  }
  
}

export default UpdateNote