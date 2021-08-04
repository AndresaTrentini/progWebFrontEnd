import { useEffect, useState } from 'react';
import ProductCard from '../../components/productCard';
import api from '../../services/api';
import './styles.css';
import GlobalMenu from "../../components/GlobalMenu";


interface IProduct {

    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;

}

const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    const loadingProducts = async () => {
        const results = await api.get(`/?apikey=2c12174&s=batman`);
        setProducts(results.data.Search);
    };

    useEffect(() => {
        loadingProducts();
    }, []);

    return (
        <>
            <GlobalMenu />
            <h1>Produtos</h1>
            <ul>
                {products.map(p => {
                    return (
                        <li>
                            <ProductCard
                                Title={p.Title}
                                Type={p.Type}
                                Year={p.Year}
                                imdbID={p.imdbID}
                                Poster={p.Poster}
                            />
                        </li>
                    );
                })}


            </ul>
        </>
    );
}
export default Products;