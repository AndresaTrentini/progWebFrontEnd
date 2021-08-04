import { useFormik } from 'formik';
import GlobalMenu from "../../components/GlobalMenu";

interface IFormValues {
 name ? : string;
 description?:string
}
const RegisterProducts = () => {
    const validate = (values: IFormValues) => {
        const errors: IFormValues = {};
        if (!values.name) {
            errors.name = 'obrigatório';
        }

        if (!values.name) {
            errors.description = 'obrigatório';
        }
        return errors;
    }


    const formik = useFormik ({
        initialValues: {
            name:'',
            description: '',
        },
        validate: (values) => validate(values),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }

    });
    return(
        <>
            <GlobalMenu />
           <h1> cadastro de Produtos</h1>
           <form onSubmit={formik.handleSubmit}>
               <div>
                   <label htmlFor="name"> Nome </label>
                   
                   <input
                     type="text"    
                     id ="name" 
                     name="name"  
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    />  
               </div>
               <div>
                   <label htmlFor="description"> Descrição </label >
                   <input type="text"
                   id ="description" 
                   name="description"
                   onChange={formik.handleChange}
                   value={formik.values.description}

                   />

                    <button type ="submit">cadastrar </button>
               </div>
           </form>
        </>
    );
}

export default RegisterProducts;