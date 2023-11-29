import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 16 Crud example';
  constructor(private meta: Meta) { }

    ngOnInit(): void {
      // Configurar meta tags para mejorar el SEO
      this.meta.addTag({ name: 'description', content: 'Descripción de mi página para SEO.' });
      this.meta.addTag({ name: 'keywords', content: 'palabra clave 1, palabra clave 2' });
      this.meta.addTag({ name: 'robots', content: 'index, follow' });
      this.meta.addTag({ name: 'author', content: 'Nombre del Autor' });

      // Etiqueta canonical para especificar la URL canónica de la página
      this.meta.addTag({ rel: 'canonical', href: 'URL_CANONICA_DE_LA_PAGINA' });

      // Etiqueta og:title y og:description para Open Graph (compartir en redes sociales)
      this.meta.addTag({ property: 'og:title', content: 'Título para compartir en redes sociales' });
      this.meta.addTag({ property: 'og:description', content: 'Descripción para compartir en redes sociales' });
    }
}
