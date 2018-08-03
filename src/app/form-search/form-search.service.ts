import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FormSearchService {

  apiUrlMarcas = 'https://fipeapi.appspot.com/api/1/carros/marcas.json';
  apiUrlModelos = 'https://fipeapi.appspot.com/api/1/carros/veiculos';
  apiUrlVeiculos = 'https://fipeapi.appspot.com/api/1/carros/veiculo'
  apiUrlCarro = 'https://fipeapi.appspot.com/api/1/carros/veiculo';
  
  constructor(private http: HttpClient) { }
  
  getMarcas() {
      return this.http.get(`${ this.apiUrlMarcas }`);
  }
  
  getModelos(id: string) {
    return this.http.get(`${ this.apiUrlModelos  }/${ id }.json`);
  }
  
  getVeiculos(idMarca: string, idVeiculo: string) {
      return this.http.get(`${ this.apiUrlVeiculos  }/${ idMarca }/${ idVeiculo }.json`);
  }

  getCarro(idMarca: string, idVeiculo: string, idCarro: string) {
    return this.http.get(`${ this.apiUrlCarro  }/${ idMarca }/${ idVeiculo }/${ idCarro }.json`);
  }
}
