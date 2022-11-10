import { Button, Label, TextInput } from 'flowbite-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';
import moment from 'moment';


const AddServices = () => {

    const handelAddService = (e) => {
        e.preventDefault();
        //get form fild value
        const form = e.target;
        const name = form.name.value;
        const img = form.url.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const published = form.published.value;
        const time = moment().format('Do MM YYYY, h:mm:ss a')
        //set service object
        const serviceInfo = {
            name,
            img,
            price,
            description,
            rating,
            published,
            time
        }
        form.reset()
        //add service
        fetch('https://crumb-cooking-server-pbvo3twxb-nasar06.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceInfo)
        })
            .then(res => res.json())
            .then(data => {
                toast("Service added successfully")
            })
            .catch(err => console.error(err))
    }




    return (
        <>
            <Helmet>
                <title>Add service</title>
            </Helmet>
            <div>
            {moment().format('Do MM YYYY, h:mm:ss a')}
            </div>
            <div className='w-6/12 mx-auto mb-12'>
                <h1 className='text-4xl font-bold mb-8 text-lime-500'>Add Your Service</h1>
                <form onSubmit={handelAddService} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="name"
                                value="service name"
                            />
                        </div>
                        <TextInput
                            name='name'
                            id="name"
                            type="text"
                            placeholder="Type your service name"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="Photo Url"
                                value="Photo Url"
                            />
                        </div>
                        <TextInput
                            name='url'
                            id="img"
                            type="text"
                            placeholder="type your Photo Url"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="Price"
                                value="Price"
                            />
                        </div>
                        <TextInput
                            name='price'
                            id="price"
                            type="text"
                            placeholder="type your service price"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="Description"
                                value="Description"
                            />
                        </div>
                        <TextInput
                            name='description'
                            id="description"
                            type="text-area"
                            placeholder="type your service description"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="rating"
                                value="rating"
                            />
                        </div>
                        <TextInput
                            name='rating'
                            id="rating"
                            type="text"
                            placeholder="type your service rating"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="published"
                                value="published Date"
                            />
                        </div>
                        <TextInput
                            name='published'
                            id="published"
                            type="date"
                            placeholder="type your service published date"
                            required={true}
                        />
                    </div>

                    <Button className='bg-lime-500' type="submit">
                        Submit
                    </Button>
                </form>
                <ToastContainer />
            </div>
        </>
    );
};

export default AddServices;