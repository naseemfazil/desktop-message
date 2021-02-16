import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor() { }
  messages: Array<any> = [
    {
      isGroup: true,
      count: 14,
      name: "Special class students",
      time: "18:31",
      lastMessage: "Pls take a look at this message",
      profile: "fas fa-user",
      isYou: false,
    },
    {
      isGroup: false,
      count: 0,
      name: "Don Norman",
      time: "16:04",
      lastMessage: "Hello guys, we discussed about..",
      profile: "fas fa-user",
      isYou: false,
    },
    {
      isGroup: false,
      count: 0,
      name: "Lee Williamson",
      time: "06:12",
      lastMessage: "Yes, that's goona work, hopefully.",
      profile: "fas fa-user",
      isYou: false,
    },
    {
      isGroup: false,
      count: 0,
      name: "Ronald Mccoy",
      time: "Yesterday",
      lastMessage: "Thanks Dude",
      profile: "fas fa-user",
      isYou: true,
    },
    {
      isGroup: false,
      count: 0,
      name: "Albert Bell",
      time: "Yesterday",
      lastMessage: "I'm happy this chapter has gree..",
      profile: "fas fa-user",
      isYou: false,
    },
    {
      isGroup: false,
      count: 0,
      name: "Ronald Mccoy",
      time: "Yesterday",
      lastMessage: "Thanks Dude",
      profile: "fas fa-user",
      isYou: true,
    },
    {
      isGroup: false,
      count: 0,
      name: "Albert Bell",
      time: "Yesterday",
      lastMessage: "I'm happy this chapter has gree..",
      profile: "fas fa-user",
      isYou: false,
    },
    {
      isGroup: false,
      count: 0,
      name: "Ronald Mccoy",
      time: "Yesterday",
      lastMessage: "Thanks Dude",
      profile: "fas fa-user",
      isYou: true,
    },
  ];

  ngOnInit() {
  }

}
