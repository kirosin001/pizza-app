import { Await, useLoaderData } from "react-router-dom";
import { Product } from "../../interfaces/product.interface";
import { Suspense } from "react";

export function Product() {
const data = useLoaderData() as {data: Product }
return (
<>
<Suspense fallback={'Загружаю...'}>
  <Await
    resolve={data}
    errorElement={<div>Не можем отобразить продукт😬</div>}
  >
    {({data}: {data:Product}) => (
      <div>{data.name}</div>
    )}
  </Await>
</Suspense>
</>
 );
}
  
  