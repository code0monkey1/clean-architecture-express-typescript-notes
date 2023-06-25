import { NoteRequestModel, NoteResponseModel } from '../../../../src/domain/entities';
import { NotesRepository } from '../../../../src/domain/interfaces/repositories/notes-repository';
import GetAllNotes from '../../../../src/domain/use-cases/notes/GetAllNotes';

describe('Get all notes use case', () => {
     
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

      let mockNotesRepository:NotesRepository

      beforeEach(()=>{
          
          jest.clearAllMocks()

          mockNotesRepository = new MockNotesRepository()
             
      })

   test('should return storedNotes',async()=>{

               //Arrange 
               const storedNotes:NoteResponseModel[]=[{
                  content: 'note',
                  important: false,
                  id: '1'
               }]
               
               //Act 
               jest.spyOn(mockNotesRepository,'getNotes').mockImplementation(()=> Promise.resolve(storedNotes))
               
               const getAllNotesUseCase = new GetAllNotes(mockNotesRepository)

               const result =await getAllNotesUseCase.execute()

               // Assert 
              expect(result).toStrictEqual(storedNotes)
   })
     
})
