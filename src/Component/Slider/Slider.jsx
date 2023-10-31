
const Slider = () => {
    return (
        <div className="carousel w-full h-[550px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="/src/assets/images/banner/1.jpg" className="w-full " />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
          <div className="absolute  transform -translate-y-1/2 left-5 right-5 bottom-0 space-y-4 p-4 bg-gradient-to-r from-[#151515] to-[ #15151500 ]">
           <div className="text-white w-1/3 ">
           <p className="text-5xl font-bold ">Affordable Price For Car Servicing</p>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
           </div>
            <div className="text-white">
              <button className="btn btn-primary hover:bg-orange-500">Discover</button>
              <button className="btn btn-primary ml-5 hover:bg-orange-500">Leastest</button>
            </div>
      
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/src/assets/images/banner/2.jpg" className="w-full" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="/src/assets/images/banner/3.jpg" className="w-full" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src="/src/assets/images/banner/4.jpg" className="w-full" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
          );
      };
    


export default Slider;