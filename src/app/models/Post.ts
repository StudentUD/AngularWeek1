export class Post {
 title: string; 
 description:string; 
 constructor(t:string){
     this.title = t; 
     this.description = 'Descripcion from ' + t; 
 }
}