// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { authorize } from '../../utils/authorize';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // https://sesamywp.dev8.qte.nu/2023/07/24/test/?se=1690570890912&sp=14&so=CHECKOUT%3A56b5b8de-3c3a-4825-8366-f1fa8d552af7&ss=t2oElgtWncotOE88C2tPov5Iqo41eMyXHSlp08mv2BgkH1IrRSuoEbeFMdikMtLap2U319W21G6nAcpmkFoMbJc9uuQZ0nW3Bt%2B5ATH3cQniQhz%2FzM5isvN0Kcqc%2BJ3JGe6gMtffMRUiE5t9M9if1Sv9JWiOKZPRKgK9MtO0BY4em2y7mblSjDDlPgK2MRzQ3%2BHr2XQO29kRVO0B90ex9hpvD2A%2FYG%2BZ4sLHSUm0Ibmznq4Znez3wyXxOGajpNSWCrnbfioIGkuf2N4a3cbyCTaS0nAAH%2FQx%2Fzve7EqMu%2BRm3RCaO1Aa91fYpN2rvbeysblXB5coeZZnfA%2FJEK2lIA%3D%3D
        await authorize('https://fake-news.vercel.sesamy.dev/Argumenten-mot-Nato-du-aldrig-fick-hora?se=1690553697464&sp=Argumenten-mot-Nato-du-aldrig-fick-hora&so=CHECKOUT%3A38eac3a6-ecbd-4cfb-9643-3a4f45ebcd85&ss=TUcU6Idh0VD9KKTpfStKvbmfQeWGbq39GegEKmOcNIqKcEtiELyAYG3CdG7ff%2BVeqZmMFsQedOaW8HORv3SGNSS6M7qpLl484%2BS6HPzHVQtOFGDl4XecJrpkLjo5AHO%2BibwDjPs4fNlC%2B%2BGKbB1okTD%2B8iaJ9%2B%2Fj1E2sZ11lBBUx8Jrbo6EQiC0XGqtmtiR5KDtcN5oEc6Hfm8RjNgBZKKE4ivctlMfd1AJ2Cvj1znlMzjBYK7lLgHQY9OlxkFtKbvoNDp1A0HUnxQoLJJYqOteAAv3Coumx3%2FakkdmQUqkNgiomot8k1PGq6OKBUNAjhY%2BnSe%2FJngrfR3mp5x52sw%3D%3D', ['https://sesamywp.dev8.qte.nu/2023/07/24/test/'])
        console.log('done')
        res.status(200).send('authorized');
    } catch (err: any) {
        console.log('failed: ' + err.message);
        res.send('failed: ' + err.message);
    }
}
