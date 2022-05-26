import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService implements InMemoryDbService {
  constructor() { }
  createDb(){
    return {
      movies: [
        {
          id: 1,
          name: 'Jeff Nyalik',
          description: 'This is just a test description',
          director: 'jame Kings',
          year: new Date()
        },
        {
          id: 2,
          name: 'Seaman Cap',
          description: 'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae',
          director: 'jame Kings',
          year: new Date()
        },
        {
          id: 3,
          name: 'Seaman Cap',
          description: 'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae',
          director: 'jame Kings',
          year: new Date()
        },
        {
          id: 4,
          name: 'Seaman Cap',
          description: 'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae',
          director: 'jame Kings',
          year: new Date()
        },
        {
          id: 5,
          name: 'Seaman Cap',
          description: 'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae',
          director: 'jame Kings',
          year: new Date()
        },
        {
          id: 6,
          name: 'Seaman Cap',
          description: 'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae',
          director: 'jame Kings',
          year: new Date()
        }
      ]
    }
  }
}
