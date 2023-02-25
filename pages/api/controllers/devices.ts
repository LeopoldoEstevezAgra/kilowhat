import type { NextApiRequest, NextApiResponse } from 'next'
import supabase from '../utils/supabase'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ){
    const result = await supabase.from('device').select('id, name, type_id, pos_x, pos_y').not('pos_x', 'is', 'null').order('id')
    
    res.status(200).json(result.data);
}