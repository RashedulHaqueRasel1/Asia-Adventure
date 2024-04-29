import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";




const Update = () => {

const spots = useLoaderData();
console.log(spots)
const {_id, photo,name,cost } = spots;


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (spots) => {
        // console.log(spots)

        // const {_id} = spots;


        // update data  

        fetch(`http://localhost:5000/spots/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(spots)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert("create success")
                }

            })

    }










    return (
        <div className="mx-auto container">

            <h1 className="text-7xl bg-red-500">Update</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="text" name="photo"  defaultValue={photo} className="input input-bordered" required {...register("photo", { required: true })}  />

                </div>
                {errors.photo && <span className="text-red-800">This field is required.</span>}

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name"   defaultValue={name} className="input input-bordered" required {...register("name", { required: true })} />

                </div>
                {errors.name && <span className="text-red-800">This field is required.</span>}

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">cost</span>
                    </label>
                    <input type="text" name="cost" defaultValue={cost} className="input input-bordered" required {...register("cost", { required: true })} />

                </div>
                {errors.cost && <span className="text-red-800">This field is required.</span>}



                <div className="form-control">
                    <input type="submit" className="btn btn-primary" value="Add" />

                </div>

            </form>
        </div>
    );
};

export default Update;