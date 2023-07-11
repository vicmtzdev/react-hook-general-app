import { useCounter, useFetch } from '../hooks';
import { LoadingCard, Card } from '../03-examples';

export const Layout = () => {

    const { counter, increment, decrement, reset } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://api.tcgdex.net/v2/en/sets/swsh3/${counter}`);
    // console.log({ data, isLoading, hasError });
    // const desestructuración = si la data tiene un valor entonces toma la data
    const { name, illustrator, rarity, stage, hp } = !!data && data;


    return (
        <>

            {

                isLoading ? <LoadingCard /> : <Card name={name} illustrator={illustrator} rarity={rarity} stage={stage} hp={hp} counter={counter} increment={increment} decrement={decrement} reset={reset} />

            }


        </>
    )

}



