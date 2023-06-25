import { NotesDataSource } from '../../../src/data/interfaces/data-sources/notes-data-source';
import { NoteRequestModel, NoteResponseModel } from '../../../src/domain/entities/index';
import NotesRepositoryImpl from '../../../src/domain/repositories/NotesRepository';


describe('Notes Repository', () => {

    class MockNotesDataSource implements NotesDataSource{
      create(note: NoteRequestModel): Promise<NoteResponseModel> {
        throw new Error('Method not implemented.');
      }
      getAll(): Promise<NoteResponseModel[]> {
        throw new Error('Method not implemented.');
      }
      getOne(id: string): Promise<NoteResponseModel | null> {
        throw new Error('Method not implemented.');
      }
      deleteOne(id: string): Promise<NoteResponseModel> {
        throw new Error('Method not implemented.');
      }
      updateOne(id: string, data: Partial<NoteResponseModel>): Promise<NoteResponseModel> {
        throw new Error('Method not implemented.');
      }

    }

    beforeEach(()=>{
        jest.clearAllMocks()
          
         mockNotesDataSource=new MockNotesDataSource()

    })

    let mockNotesDataSource:NotesDataSource

   describe('getNotes', () => {
           
       it('should get all stored notes',async()=>{
           
            //Arrange
             const storedNotes:NoteResponseModel[]=[{
               content: '',
               important: false,
               id: ''
             }]

             jest.spyOn(mockNotesDataSource,'getAll').mockImplementation(()=>Promise.resolve(storedNotes))

            //Act
            const notesRepository = new NotesRepositoryImpl(mockNotesDataSource)
             
            const result = await notesRepository.getNotes()

            //Assert
             expect(result).toStrictEqual(storedNotes)
       })
   })
      describe('updateNote', () => {
           
       it('should get updated note',async()=>{
           
            //Arrange
             const id ='2'

             const updatedNote:NoteResponseModel={
               content: 'updated content',
               important: false,
               id: '2'
             }

             jest.spyOn(mockNotesDataSource,'updateOne').mockImplementation(()=>Promise.resolve(updatedNote))

            //Act
            const notesRepository = new NotesRepositoryImpl(mockNotesDataSource)
             
            const result = await notesRepository.updateNote(id,updatedNote)

            //Assert
             expect(result).toStrictEqual(updatedNote)

             expect(mockNotesDataSource.updateOne).toBeCalledWith(id,updatedNote)
             expect(mockNotesDataSource.updateOne).toBeCalledTimes(1)
       })
   })
   
      describe('deleteNote', () => {
           
       it('should create and return a new note',async()=>{
           
            //Arrange
             const id ='1'

             const deletedNote:NoteResponseModel={
               content: 'my content',
               id: '1',
               important: false
             }

             jest.spyOn(mockNotesDataSource,'deleteOne').mockImplementation(()=>Promise.resolve(deletedNote))

            //Act
            const notesRepository = new NotesRepositoryImpl(mockNotesDataSource)
             
            const result :NoteResponseModel= await notesRepository.deleteNote(id)

            //Assert
             expect(result).toStrictEqual(deletedNote)
      
       })
   })
   
      describe('createNote', () => {
           
       it('should get all stored notes',async()=>{ 
           
            //Arrange
             const storedNote:NoteResponseModel={
               content: '',
               important: false,
               id: ''
             }

             jest.spyOn(mockNotesDataSource,'create').mockImplementation(()=>Promise.resolve(storedNote))

            //Act
            const notesRepository = new NotesRepositoryImpl(mockNotesDataSource)
             
            const result = await notesRepository.createNote(storedNote)

            //Assert
             expect(result).toStrictEqual(storedNote)
             expect(mockNotesDataSource.create).toBeCalledTimes(1)
             expect(mockNotesDataSource.create).toBeCalledWith(storedNote)

       })
   })
   
   
  
})
