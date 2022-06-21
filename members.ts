import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "siketyan",
    name: "Naoki Ikeguchi",
    role: "CTO",
    bio: "ちいかわエバンジェリスト",
    avatarSrc: "https://github.com/siketyan.png",
    sources: [
      "https://zenn.dev/siketyan/feed",
      "https://qiita.com/s6n/feed",
    ],
    includeUrlRegex: "zenn.dev|qiita.com",
    twitterUsername: "s6n_jp",
    githubUsername: "siketyan",
    websiteUrl: "https://s6n.jp/",
  },
  {
    id: "fuwasegu",
    name: "Hirosugu Takeshita",
    role: "コーポレートエンジニア",
    bio: "車輪の破壊担当｜自撮り陶芸家",
    avatarSrc: "https://github.com/lunain84.png",
    sources: [
      "https://zenn.dev/fuwasegu/feed",
      "https://qiita.com/fuwasegu/feed",
      "https://note.com/fuwasegu/rss",
    ],
    includeUrlRegex: "zenn.dev|qiita.com|note.com",
    twitterUsername: "fuwasegu",
    githubUsername: "lunain84",
    websiteUrl: "https://lapras.com/public/KX7EOYS",
  },
];
