
import  httpProxy from 'http-proxy'
import type {NextApiRequest, NextApiResponse} from 'next'

// type Data = {
//     name : string
// }

const proxy = httpProxy.createProxyServer();


export default function handler(req : NextApiRequest, res: NextApiResponse<any>) {
    req.headers.cookie = ''
   proxy.web(req,res , {
    target : '',
    changeOrigin: false,
    selfHandleResponse: false
   })
}