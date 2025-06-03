import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post';
import { ResumenPipe } from '../../pipes/resumen.pipe';

@Component({
  standalone: true,
  selector: 'app-busqueda',
  imports: [CommonModule, FormsModule, ResumenPipe],
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {
  termino = '';
  posts: Post[] = [];
  filtrados: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
      this.filtrados = [...this.posts];
    });
  }

  buscar() {
    this.filtrados = this.posts.filter((p) =>
      p.title.toLowerCase().includes(this.termino.toLowerCase())
    );
  }
}
