import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentPage = 0
  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'At the Town',
      url: 'https://media.istockphoto.com/id/952083480/photo/panorama-of-skyscrapers-in-a-modern-city.webp?b=1&s=170667a&w=0&k=20&c=_cLMVZVE35TmuAr17SL8qN4E1LzFRN3lWrdvhXhexgE=',
    },
    {
      title: 'with friends',
      url: 'https://media.istockphoto.com/id/917742634/photo/sweet-friendships-refreshes-the-soul.webp?b=1&s=170667a&w=0&k=20&c=zt_y5sIIdPrn7ksWO0aVfDtpbgNP2rt2bx-TEwZXr6s=',
    },
    {
      title: 'Here we go again!',
      url: 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG93bnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'my dark side :P',
      url: 'https://images.unsplash.com/photo-1597739239353-50270a473397?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG93bnxlbnwwfHwwfHx8MA%3D%3D',
    },
  ];
}
