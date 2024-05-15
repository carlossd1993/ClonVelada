export interface Boxers{
  id?: string;
  apodo?: string;
  img?: string;
  versus?: string;
  tandem?: boolean;
}

export const boxeadores: Boxers[] = [
  {id: "el_mariana", apodo:"El Mariana", img:"el_mariana", versus:"plex", tandem:false},
  {id: "plex", apodo:"Yo Soy Plex", img:"plex", versus:"el_mariana", tandem:false},
  {id: "carrera", apodo:"Carreraaa", img:"carrera", versus:"agustin", tandem:false},
  {id:"agustin", apodo:"Agustin51", img:"agustin", versus:"carrera", tandem:false},
  {id:"guanyar", apodo:"Guanyar", img:"guanyar", versus:"la_cobra", tandem:false},
  {id:"la_cobra", apodo:"LaCobra", img:"la_cobra", versus:"guanyar", tandem:false},
  {id:"zeling", apodo:"zeling", img:"zeling", tandem:true},
  {id:"nissaxter", apodo:"nissaxter", img:"nissaxter", tandem:true},
  {id:"alana", apodo:"alana", img:"alana", tandem:true},
  {id:"ama", apodo:"AmaBlitz", img:"ama", tandem:true},
  {id:"viruzz", apodo:"ByViruzz", img:"viruzz", versus:"shelao", tandem:false},
  {id:"shelao", apodo:"Shelao", img:"shelao", versus:"viruzz", tandem:false},
];
