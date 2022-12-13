import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ApiService } from "src/app/core/services/api.service";
import { Post } from "../models/post";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  posts: Post[] = [
    {
      nickname: "joe321",
      title: "Five Below gains",
      postContent:
        "Raiders will keep an eye on how shares of Five Below and salesforce react to the latest earnings and news. Raders will keep an eye on how shares of Five Below and salesforce react to the latest earnings and news. raders will keep an eye on how shares of Five Below and salesforce react to the latest earnings and news.",
      postImg:
        "https://static.clubs.nfl.com/image/private/t_editorial_landscape_8_desktop_mobile/f_auto/raiders/dxhgnz84w8ezkk6hbgqn.jpg",
      countComments: 12,
      likes: 35,
      rating: 59,
      createDate: "12.05.2021",
    },
    {
      nickname: "max1",
      title: "Below to qwerty",
      postContent:
        "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero",
      postImg: "https://miro.medium.com/max/1145/1*nuGWz5wZpd3Arvt9aJkFOA.png",
      countComments: 5,
      likes: 18,
      rating: 17,
      createDate: "16.08.2021",
    },
    {
      nickname: "whiteAnt1254562552",
      title: "Why we test it",
      postContent:
        "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements. Besides, random text risks to be unintendedly humorous or offensive",
      countComments: 89,
      likes: 256,
      rating: 35,
      createDate: "02.01.2021",
    },
    {
      nickname: "alberto-bents7",
      title: "On the other hand",
      postContent:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can",
      postImg:
        "https://static.clubs.nfl.com/image/private/t_new_photo_album/f_auto/raiders/oknhlbaclndou7uphkva.jpg",
      countComments: 26,
      likes: 102,
      rating: 10,
      createDate: "28.08.2022",
    },
    {
      nickname: "mikeDaVinci777",
      title: "Las Vegas rider",
      postContent:
        "Raiders will keep an eye on how shares of Five Below and salesforce react to the latest earnings and news. Raders will keep an eye on how shares of Five Below and salesforce react to the latest earnings and news. raders will keep an eye on how shares of Five Below and salesforce react to the latest earnings and news.",
      postImg:
        "https://static.clubs.nfl.com/image/private/t_new_photo_album/f_auto/raiders/w7mfebiro546qml4dgqm.jpg",
      countComments: 19,
      likes: 65,
      rating: 15,
      createDate: "12.04.2022",
    },
    {
      nickname: "joe321",
      title: "Five Below gains",
      postContent:
        "Raiders will keep an eye on how shares of Five Below and salesforce react to the latest earnings and news. Raders will keep an eye on how shares of Five Below and salesforce react to the latest earnings and news. raders will keep an eye on how shares of Five Below and salesforce react to the latest earnings and news.",
      postImg:
        "https://static.clubs.nfl.com/image/private/t_editorial_landscape_8_desktop_mobile/f_auto/raiders/dxhgnz84w8ezkk6hbgqn.jpg",
      countComments: 12,
      likes: 35,
      rating: 22,
      createDate: "12.05.2021",
    },
    {
      nickname: "max1",
      title: "Below to qwerty",
      postContent:
        "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero",
      postImg: "https://miro.medium.com/max/1145/1*nuGWz5wZpd3Arvt9aJkFOA.png",
      countComments: 5,
      likes: 18,
      rating: 7,
      createDate: "16.08.2021",
    },
    {
      nickname: "whiteAnt1254562552",
      title: "Why we test it",
      postContent:
        "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements. Besides, random text risks to be unintendedly humorous or offensive",
      countComments: 89,
      likes: 256,
      rating: 1,
      createDate: "02.01.2021",
    },
    {
      nickname: "alberto-bents7",
      title: "On the other hand",
      postContent:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can",
      postImg:
        "https://static.clubs.nfl.com/image/private/t_new_photo_album/f_auto/raiders/oknhlbaclndou7uphkva.jpg",
      countComments: 26,
      likes: 102,
      rating: 12,
      createDate: "28.08.2022",
    },
  ];

  postsList: BehaviorSubject<Post[]> = new BehaviorSubject(this.posts);
  postsList$: Observable<Post[]> = this.postsList.asObservable();

  constructor(private apiService: ApiService) {}
  // getAllPosts(): Observable<any> {
  //   return this.apiService.get();
  // }
}
