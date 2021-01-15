export class Persona {
    public Nombre: string;//="Marisol";
    public Apellido: string;//="Garcia";
    public Sexo: string;//="F";
    public Edad: number;//="18";
    

    /*public setterNombre() {
        return this.nombre;
      }
    public get setterApellido():string {
        return this.apellido;
      }
    public get setterSexo():string {
        return this.sexo;
      }
    public get setterEdad():string {
        return this.edad;
      }*/
 constructor(nombre:string,apellido:string,edad:number,sexo:string){
     this.Nombre=nombre;
     this.Apellido=apellido;
    this.Edad=edad;
    this.Sexo= sexo;
 }
    

  }
  
 

