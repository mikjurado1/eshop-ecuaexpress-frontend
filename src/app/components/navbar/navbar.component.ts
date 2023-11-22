import { Component,OnInit , HostListener, ElementRef   } from '@angular/core';
import { ConnectBackendService } from '../../services/connect-backend.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})

export class NavbarComponent implements OnInit {
  showDropdown = false;
  inputValue = '';
  placeholderText = 'sephora maquillaje...';
  opciones = ['Opción 1', 'Opción 2', 'Opción 3']; // Puedes llenar esto dinámicamente
  categories: any;

  constructor(private eRef: ElementRef, private connectBackendService:ConnectBackendService ) { }

  ngOnInit(): void {
      this.connectBackendService.obtenerDatos().subscribe(data =>{

        this.categories = data.result.resultList.categoryList;
        console.log(this.categories)
      })
  }

  toggleDropdown(){
    this.showDropdown = !this.showDropdown;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
      if (!this.eRef.nativeElement.contains(event.target)) {
          this.showDropdown = false;
      }
  }

  seleccionarOpcion(opcion: any){
    console.log(opcion)
    return opcion
  }
}
