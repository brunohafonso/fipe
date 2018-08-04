import { Component, OnInit } from '@angular/core';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { Marca } from './marca.model';
import { Modelo } from './modelo.model';
import { Veiculo } from './veiculo.model';
import { Carro } from './carro.model';
import { FormSearchService } from './form-search.service';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.min.css']
})
export class FormSearchComponent implements OnInit {
  
  faCar = faCar;
  
  marcaId: string;
  
  marcas: Marca[] = [];
  
  modeloId: string;
  
  modelos: Modelo[] = [];
  
  veiculoId: string;
  
  veiculos: Veiculo[] = [];
  
  carro =  new Carro();
  
  constructor(private formSearchService: FormSearchService) { }

  ngOnInit() {
    this.formSearchService.getMarcas().subscribe((res: Marca[]) => {
      this.marcas = res;
    });
  }
  
  carregarModelos() {
    this.modelos = [];
    this.veiculos = [];
    this.carro = new Carro();
    if(this.marcaId.toString() === '' || this.marcaId.toString() === null) {
      return ;
    }
    this.formSearchService.getModelos(this.marcaId).subscribe((res: Modelo[]) => {
      this.modelos = res;
    });
  }
  
  carregarVeiculos() {
    this.veiculos = [];
    this.carro = new Carro();
    if(this.marcaId.toString() === ''  || this.marcaId.toString() === null || this.modeloId.toString() === ''  || this.modeloId.toString() === null) {
      return ;
    }
    this.formSearchService.getVeiculos(this.marcaId, this.modeloId).subscribe((res: Veiculo[]) => {
      this.veiculos = res;
    });
  }
  
  gerarRelatorioCarro() {
    this.carro = new Carro();
    this.formSearchService.getCarro(this.marcaId, this.modeloId, this.veiculoId.toString()).subscribe((res: Carro) => {
      this.carro = res;
    });
  }
  
  activeModelos() {
    return this.modelos.length < 1;
  }
  
  activeVeiculos() {
    return this.veiculos.length < 1;
  }
  
  activeSubmit() {
    return this.veiculoId == '' || this.veiculoId == null;
  }
  
  cleanRelatorioCarro() {
    this.carro = new Carro();
  }
  
  showRelatorioCarro() {
    return Object.keys(this.carro).length !== 0;
  }
}
