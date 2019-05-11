import {Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';
import {Pokemon} from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})


export class MyComponentComponent implements OnInit {

  lists: Pokemon[];
  selection = '' ;
  selectedPokemon: any ;
  detailPokemon: any ;
  resultatRecherche: string;
  filtre = '';
  objetdata: any;
  tableaupokemon: Array <any> = [];
  tableaupokemonW: Array <any> = [];
  index: number;

  constructor(private pokemonService: PokemonServiceService) {}

  ngOnInit(): void {
    this.pokemonService.recupListePokemon().subscribe((data: object) => {
      /* tslint:disable:no-string-literal */
      this.lists = data['pokemon_entries'];
      this.objetdata = this.lists;
      for (this.index = 0; this.index < this.objetdata.length; this.index++) {
     const obj = {
       id: this.objetdata[this.index].entry_number,
       name: this.objetdata[this.index].pokemon_species.name,
       url: this.objetdata[this.index].pokemon_species.url,
     };
     this.tableaupokemon.push(obj);
    }
      this.tableaupokemonW = this.tableaupokemon ;
    });

  }



  afficher() {
    console.log(this.detailPokemon);
  }

  open(pokemon) {
    this.pokemonService.recupPokemonDetail(pokemon).subscribe((data: object) => {
      this.detailPokemon = data ;
   //   console.log(this.detailPokemon);
    }) ;
  }

  recherchePokemon() {
    /*
    console.log(this.lists.filter((e) => {
      return e.name.toLowerCase().indexOf(this.filtre.toLowerCase()) !== -1;
    } ));*/
  }
}
