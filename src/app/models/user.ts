export class User {
    
  name;
  mail;
  mdp;
  nomRue;
  codePostal;
  ville;

constructor(name : string | null, mail : string | null, mdp : string | null, nomRue : string | null, codePostal : string | null, ville : string | null){
  this.name = name;
  this.mail = mail;
  this.mdp = mdp;
  this.nomRue = nomRue;
  this.codePostal = codePostal;
  this.ville = ville;
}
}