import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'ngx-list',
  styleUrls: ['./list.component.scss'],
  templateUrl: './list.component.html',
  providers:[PostService]
})
export class ListComponent {
  
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      title: {
        title: 'Title',
        type: 'string',
      },
      slug: {
        title: 'Slug',
        type: 'string',
      },
      tags: {
        title: 'Tags',
        type: 'string',
      },
      verified: {
        title: 'verified',
        type: 'boolean',
      },
      published: {
        title: 'published',
        type: 'boolean',
      },
      
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private postService:PostService) {
  }
  ngOnInit(){
    this.postService.getPosts().then((x)=>{
      this.source.load(x.data);
    })
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
