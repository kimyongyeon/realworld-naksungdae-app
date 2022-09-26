// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
<<<<<<< HEAD
	name: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>,
) {
	res.status(200).json({ name: 'John Doe' });
=======
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe' });
>>>>>>> 9e9fcb4d8eb2330508eb3962e655c80118b65f86
}
