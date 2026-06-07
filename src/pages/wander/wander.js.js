export const wander = {
   // Other Wander consoles that visitors can reach from my console.
   consoles: [
       'https://susam.net/wander/',
       'https://matkelly.com/wander/',
       'https://juleskourelakos.com/wander/',
       'https://fractaldragon.net/wander/',
       'https://foodbark.io/wander/',
   ],

   // My favourite websites and pages I recommend to the Wander community.
   pages: [
       'https://msfjarvis.dev/',
       'https://wantguns.dev/',
       'https://xkcd.com/',
       'https://thedailywtf.com/',
       'https://solar.lowtechmagazine.com/',
       'https://blr.indiewebclub.org/',
       'https://matklad.github.io/',
       'https://eli.thegreenplace.net/',
       'https://ratfactor.com/',
       'https://muratbuffalo.blogspot.com/',
       'https://www.allthingsdistributed.com/',
       'https://brooker.co.za/blog/',
       'https://www.potaroo.net/',
       'https://transactional.blog/',
       'https://pagedout.institute/',
   ],

   // Websites and consoles to ignore.  My console will never fetch
   // consoles or web pages whose URLs match the following patterns.
   ignore: [],
};

export function GET({ params, request }) {
  return new Response(
        JSON.stringify(wander),
        { headers: { "Content-Type": "application/json" } },
    );
};
