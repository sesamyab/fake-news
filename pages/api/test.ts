// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { authorize } from '../../utils/authorize';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // https://sesamywp.dev8.qte.nu/2023/07/24/test/?se=1690570890912&sp=14&so=CHECKOUT%3A56b5b8de-3c3a-4825-8366-f1fa8d552af7&ss=t2oElgtWncotOE88C2tPov5Iqo41eMyXHSlp08mv2BgkH1IrRSuoEbeFMdikMtLap2U319W21G6nAcpmkFoMbJc9uuQZ0nW3Bt%2B5ATH3cQniQhz%2FzM5isvN0Kcqc%2BJ3JGe6gMtffMRUiE5t9M9if1Sv9JWiOKZPRKgK9MtO0BY4em2y7mblSjDDlPgK2MRzQ3%2BHr2XQO29kRVO0B90ex9hpvD2A%2FYG%2BZ4sLHSUm0Ibmznq4Znez3wyXxOGajpNSWCrnbfioIGkuf2N4a3cbyCTaS0nAAH%2FQx%2Fzve7EqMu%2BRm3RCaO1Aa91fYpN2rvbeysblXB5coeZZnfA%2FJEK2lIA%3D%3D
        await authorize('https://fake-news-git-ma-ssr.vercel.sesamy.dev/ssr/Opinionen-just-nu:-Brott-och-straff-pa-agendan-igen?se=1690833977683&sp=Opinionen-just-nu%3A-Brott-och-straff-pa-agendan-igen&so=CHECKOUT%3A7d6ce45f-fd23-4f43-b13a-2374c72ea243&ss=B0q9r5O0fC2njEng9MzWUdY93KDYxQ3oxCd%2BiwG%2Fl14S7930aCTvpkiMf6dDyTAmgQIomxuLNmdUJv27%2F6OZ0YyfrctSLs6pBAfI2jgOIaUQahcUB43g4eexfDzJU%2FcEROqqYpcDS0q0DCicPlcgK454tlzlMWQNenDSAluh8YR3oU9N%2FUD2uOQz6FOjeI5kMB5qstVV%2FnJX83levx29cZgWoUKe4guQRoQ31qBIhvuOKzPhN349MZS0kCzq8I37P1UqD9sxDvU76pc42xHfYapG1AvgH%2FDffPs9sduXlL38JUCXsWpMN0q1yPcqy5U4gXH75Gix%2BeAg2vQmGB5XBQ%3D%3D', ['https://fake-news-git-ma-ssr.vercel.sesamy.dev/ssr/Opinionen-just-nu:-Brott-och-straff-pa-agendan-igen'])
        console.log('done')
        res.status(200).send('authorized');
    } catch (err: any) {
        console.log('failed: ' + err.message);
        res.send('failed: ' + err.message);
    }
}
