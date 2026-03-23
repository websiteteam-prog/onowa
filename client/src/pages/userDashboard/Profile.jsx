const Profile = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <div className="bg-white p-8 rounded shadow max-w-xl">

      <h2 className="text-2xl font-bold mb-6">
        My Profile
      </h2>

      <p><b>Name:</b> {user?.name}</p>
      <p><b>Email:</b> {user?.email}</p>

    </div>

  );
};

export default Profile;