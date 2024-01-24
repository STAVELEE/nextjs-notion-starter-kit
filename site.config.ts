import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'ceca6166ee814dfa887028bc526256ac',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'PB Marketing 퍼블 마케팅 - with BORA Team.',
  domain: 'nextjs-notion-starter-kit-psi-blue.vercel.app',
  author: 'PB Marketing',

  // open graph metadata (optional)
  description: '퍼블 마케팅, 인스타팔로워늘리기, 인스타팔로워구매, 인스타한국인팔로워, 유튜브조회수늘리기, 유튜브구독자늘리기, 인스타그램팔로워늘리기, 유튜브구독자구매, 트래픽, 틱톡, 페이스북, 플레이스, 블로그, 쓰레드, 유튜브',

  // social usernames (optional)
  nblog: 'boracm',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://cdn.imweb.me/upload/S20231119ec49b4c5c8219/6dd46a6be23da.png',
  defaultPageCover: 'https://landing.pbmarketing.co.kr/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fprod-files-secure.s3.us-west-2.amazonaws.com%252Fd4b56409-1bad-40e9-8858-e32030fc012c%252Fb92a4077-99b3-4d46-a79b-26a7c30b5f65%252F%2525E1%252584%25258C%2525E1%252585%2525A6%2525E1%252584%252586%2525E1%252585%2525A9%2525E1%252586%2525A8%2525E1%252584%25258B%2525E1%252585%2525B3%2525E1%252586%2525AF_%2525E1%252584%25258B%2525E1%252585%2525B5%2525E1%252586%2525B8%2525E1%252584%252585%2525E1%252585%2525A7%2525E1%252586%2525A8%2525E1%252584%252592%2525E1%252585%2525A2%2525E1%252584%25258C%2525E1%252585%2525AE%2525E1%252584%252589%2525E1%252585%2525A6%2525E1%252584%25258B%2525E1%252585%2525AD_-001_(6).png%3Ftable%3Dblock%26id%3Dceca6166-ee81-4dfa-8870-28bc526256ac%26cache%3Dv2&w=2048&q=75',
  defaultPageCoverPosition: 0.3,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
