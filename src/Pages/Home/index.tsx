import { useEffect, useState } from 'react'
import { URL_BASE } from '../../Api/urlBase';
import { Card } from '../../components/Card';
import './styles.css';

interface SlipResult {
  slip: Slip
}

export interface Slip {
  advice: string,
  id: number
}

export function Home() {
  const maxId = 224;
  const minId = 1;
  const [isLoading, setIsloading] = useState<boolean>(false);

  const [advice, setAdvice] = useState<Slip>({id: 0, advice: ''});

  let idAleatorio = Math.floor(Math.random() * (maxId - minId) + minId);

  async function getAdvice() : Promise<void>{
    const data = await fetch(`${URL_BASE}/${idAleatorio}`);
    const result: SlipResult = await data.json();
    const slip: Slip = { id: result.slip.id, advice: result.slip.advice };
    setAdvice({
      advice: slip.advice,
      id: slip.id,
    });
    
    setIsloading(true);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="container" >
      { isLoading ? <Card splip={advice} getAdvice={getAdvice} /> : <h1>Carregando...</h1> }
    </div>
  )
}
