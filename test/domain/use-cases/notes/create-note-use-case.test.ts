
import { NoteRequestModel, NoteResponseModel } from '../../../../src/domain/entities';
import { NotesRepository } from '../../../../src/domain/interfaces/repositories/notes-repository';
import CreateNote from '../../../../src/domain/use-cases/notes/CreateNote';

describe('Create Note Use Case', () => {
   
    class MockNotesRepository implements NotesRepository{
      deleteNote(id: string): Promise<NoteResponseModel> {
        throw new Error('Method not implemented.');
      }
      updateNote(id: string, note: Partial<NoteRequestModel>): Promise<NoteResponseModel> {
        throw new Error('Method not implemented.');
      }
      createNote(note: NoteRequestModel): Promise<NoteResponseModel> {
        throw new Error('Method not implemented.');
      }
      getNotes(): Promise<NoteResponseModel[]> {
        throw new Error('Method not implemented.');
      }

    }

    beforeEach(()=>{
         jest.clearAllMocks()
         mockNotesRepository = new MockNotesRepository()

    })

    let mockNotesRepository:NotesRepository

    it(' should return a new note with id',async()=>{
         
          //Arrange
          const newNote :NoteResponseModel={
            content: 'A',
            important: false,
            id: '1'
          }

          jest.spyOn(mockNotesRepository,'createNote').mockImplementation(()=>Promise.resolve(newNote))

          //Act
           const createNoteUseCase = new CreateNote(mockNotesRepository)
           const result = await createNoteUseCase.execute(newNote)

          //Assert
          expect(result).toStrictEqual(newNote)
             
    })
  
})
