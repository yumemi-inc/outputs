export const config = {
  siteMeta: {
    title: "YUMEMI Outputs",
    teamName: "YUMEMI Inc.",
    description: "ゆめみメンバーのソーシャルアウトプットをまとめるコレクションサイト",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://main.dt1fv708p3a4a.amplifyapp.com"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "株式会社ゆめみ",
      href: "https://www.yumemi.co.jp/",
    },
  ],
};
