//const API_KEY = "82221edb0c272ba0da179fce766d8e21";
//한번더 숨겨주기
const API_KEY = process.env.API_KEY;
module.exports = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source: "/old-blog/:path*",//여기를 destination으로 리다이렉트할수 있다. destination으로 바꾼다.
        destination:"/new-sexy-blog//:path*",
        permanent:false,//브라우저나 검색엔진이 이 정보를 기억하는지 여부가 결정됨
      },
    ];//array는 object를 가질거고, redirection에 필요한건 이게 다임
  },
  async rewrites(){//user을 리다이렉트 시키지만 url은 변하지 않는다.
    return [
      {
        source:"/api/movies",
        destination:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source:"/api/movies/:id",
        destination:`https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      }
    ];
  },

}
