import Cards from "../Item/index.jsx"


export default function ItemList({data}) {
    return(
        <>
            {data.map((items) =>{
                return(
                    <Cards
                    key={items.id}
                        name={items.name}
                        image={items.image}
                        rating={items.rating}
                        productType={items.productType}
                        price={items.price}
                        description={items.description}
                    />
                );
            })}
        </>
    );
};