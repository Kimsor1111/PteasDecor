const UserReview = ({ img, username, review }) => {
  return (
    <div className="border-2 rounded-2xl border-[#D3D3D3] p-4">
      <div className="w-full flex justify-between items-center">
        <span className="flex items-center gap-3">
          <img src={img} className="size-[40px] rounded-full" alt="" />
          <h1 className="text-[#3D3D3D] text-[15px] font-semibold">
            {username}
          </h1>
        </span>
      </div>
      <p className="px-[50px] mt-3 text-[#949494] text-[15px]">{review}</p>
      <div className="flex gap-4 px-[50px] mt-3 text-[#3D3D3D] text-[15px]">
        <p className="cursor-pointer">Like</p>
        <p className="cursor-pointer">Reply</p>
        <p>5m</p>
      </div>
    </div>
  );
};

export default UserReview;
