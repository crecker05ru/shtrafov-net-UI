// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import example1 from '../../mock/fine-example.json'
import example2 from '../../mock/fine-example2.json'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
    ) {  
      const { number } = req.query
    //   try{
    //   const { number } = req.query
    //   console.log('number',number)
    //   console.log('example1.number',example1.number)
    //   if(number == example1.number){
    //    res.status(200).json(example1)
    //   }else{
    //     res.status(404)
    //   }
    // }catch(e){
    //   console.log(e)
    //   res.status(500)
    // }
    res.status(200).json({ message: "number " + number })

}
