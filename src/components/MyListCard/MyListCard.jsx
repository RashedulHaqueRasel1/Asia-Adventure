import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyListCard = ({ u }) => {

    const { _id, photo, name, cost, visitors, description, time, seasonality, country, location } = u;

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://asia-adventura-server.vercel.app/spots/${_id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                        }
                        //   Ui Delete 

                        // const remaining = spots.filter(spo => spo._id !== _id)
                        // setSpots(remaining)
                    })
            }
        });
        console.log(_id)

    }



    // console.log(info)
    // const { name } = u;
    return (
        <div className="mx-auto container">

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Country</th>
                            <th>Cost</th>
                            <th>Visitors</th>
                            <th>Travel Time</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {location}
                                <br />
                                <span className="badge badge-ghost text-black badge-sm">{country}</span>
                            </td>
                            <td>{cost}</td>
                            <td>{visitors}</td>
                            <th>
                                <button className="  btn-xs">{time}</button>
                            </th>
                            <th>
                                <div className="join join-vertical">

                                    <Link to={`/spotsUpdate/${_id}`}>
                                        <button className="btn btn-primary join-item">u</button>
                                    </Link>
                                    <button onClick={() => handleDelete(_id)} className="btn join-item">Delete</button>
                                </div>
                            </th>
                        </tr>

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default MyListCard;