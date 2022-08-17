import Cards from "../Item/index.jsx"


export default function ItemList({data}) {
    return(
        <>
            {data?.map((items) =>{
                return(
                    <Cards
                        key={items.id}
                        id={items.id}
                        name={items.name}
                        image={items.image}
                        rating={items.rating}
                        category={items.category}
                        price={items.price}
                        description={items.description}
                        stock={items.stock}
                    />
                );
            })}
        </>
    );
};