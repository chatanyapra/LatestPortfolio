import { useState } from 'react';

const BlogCard = () => {
  const [mainImage, setMainImage] = useState('fxVE.gif');
  const [smallImage, setSmallImage] = useState('loaderCircleNew.gif');

  const toggleImage = (newImage) => {
    if (mainImage !== newImage) {
      setMainImage(newImage);
      setSmallImage('fxVE.gif');
    } else {
      setMainImage('fxVE.gif');
      setSmallImage(newImage);
    }
  };

  return (
    <div className=" flex justify-center items-center">
      <div className="relative w-[500px] h-[300px]">
        {/* Main Image */}
        <div className="absolute top-0 left-0 w-4/5 h-5/6 bg-gray-200 rounded-[40px] overflow-hidden">
          <img src={mainImage} className="toggleImage1 w-full h-full object-fill" alt="Main" />
        </div>

        {/* Blog content */}
        <div className="absolute right-0 bottom-0 w-3/4 h-[45%] rounded-b-[40px] rounded-r-[40px] rounded-tl-[5px] bg-black py-1 pl-2 transparent-color overflow-hidden">
          <div className="text-white text-xl font-bold">The Title Of Blog...</div>
          <p className="text-gray-200 text-sm pl-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolor accusamus repellendus repudiandae tenetur explicabo error consequatur ipsum excepturi commodi.
          </p>
        </div>

        {/* Interactive buttons */}
        <div className="absolute bottom-0.5 left-1 w-[20%] h-[15%] flex justify-between items-center">
          <div onClick={() => toggleImage('loaderCircleNew.gif')} className="w-10 h-10 bg-gray-100 rounded-full outline-dashed outline-2 outline-offset-2 overflow-hidden">
            <img src={smallImage} className="toggleImage2 w-full h-full object-fill" alt="Small" />
          </div>
          <div onClick={() => toggleImage('XDZT.gif')} className="w-10 h-10 bg-gray-100 rounded-full outline-dashed outline-2 outline-offset-2 overflow-hidden">
            <img src="XDZT.gif" className="toggleImage3 w-full h-full object-fill" alt="Small" />
          </div>
        </div>

        {/* Read blog card */}
        <div className="w-[18%] h-[52%] absolute right-0 top-0 rounded-3xl bg-red-100 flex flex-col text-center py-2">
          <div className="text-xl font-bold">Read</div>
          <div className="text-5xl font-bold mt-5">1</div>
          <div className="text-2xl font-bold">Blog</div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
