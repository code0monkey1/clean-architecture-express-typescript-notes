

export type NoteResponseModel={
  content:string,
  important:boolean,
  id:string
}

export type NoteRequestModel=Omit<NoteResponseModel,'id'>
